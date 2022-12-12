import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useSnackbar } from 'notistack';
import { Button, CardHeader, Stack, Card, Box } from '@mui/material';

import GoalManagementService from '../../helpers/service/GoalManagementService';
import FormProvider from '../../components/form/FormProvider';
import Label from '../../components/Label';
import RHFTextField from '../../components/form/RHFTextField';
import RHFSelect from '../../components/form/RHFSelect';

GoalForm.propTypes = {
  currentGoal: PropTypes.object,
};

export function GoalForm({ currentGoal }) {
  const { id, name, detail, employerId } = currentGoal || {};
  const { push } = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const [employers, setEmployers] = useState([]);

  const goalValidations = Yup.object().shape({
    name: Yup.string().required(),
    detail: Yup.string().required(),
    employerId: Yup.number().required(),
  });

  const defaultValues = {
    name: name || '',
    detail: detail || '',
    employerId: employerId || '',
  };

  const methods = useForm({
    resolver: yupResolver(goalValidations),
    defaultValues,
    mode: 'onChange',
  });

  const { watch, reset, handleSubmit } = methods;

  const values = watch();

  const addGoal = async (data) => await GoalManagementService.addEmployeeGoal(data);

  const editGoal = async (data) => await GoalManagementService.editEmployeeGoal(id, data);

  const onSubmit = (data) => {
    try {
      id ? editGoal(data) : addGoal(data);
      reset();
      enqueueSnackbar(!id ? 'Create success!' : 'Update success!');
      push('/goals');
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const getEmployers = async () => {
      try {
        const { data } = await GoalManagementService.getEmployers();
        setEmployers(data);
      } catch (error) {
        console.error(error);
      }
    };
    getEmployers();
  }, []);

  useEffect(() => {
    reset(defaultValues);
  }, [id]);

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Card sx={{ pt: 4, pb: 8, px: 3 }}>
        <CardHeader title="Goal Details" sx={{ pt: 0, px: 0 }} />
        {id && (
          <Label
            color={values.status !== 'active' ? 'error' : 'success'}
            sx={{ textTransform: 'uppercase', position: 'absolute', top: 24, right: 24 }}
          >
            {values.status}
          </Label>
        )}
        <Box
          sx={{
            display: 'grid',
            columnGap: 2,
            rowGap: 3,
            gridTemplateColumns: { xs: 'repeat(1, 1fr)' },
          }}
        >
          <RHFTextField name="name" label="Name" required />
          <RHFTextField name="detail" label="Detail" required multiline rows={4} />
          <RHFSelect name="employerId" label="Employer" placeholder="Employer">
            <option value="" />
            {employers.map((employer, index) => (
              <option key={index} value={employer?.id}>
                {employer?.name}
              </option>
            ))}
          </RHFSelect>
        </Box>
        <Stack alignItems="flex-end" sx={{ mt: 3, px: 3 }}>
          <Button type="submit" variant="contained">
            {!id ? 'Create' : 'Edit'}
          </Button>
        </Stack>
      </Card>
    </FormProvider>
  );
}
