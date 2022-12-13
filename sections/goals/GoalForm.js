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
import { PATH_PAGE } from '../../utils/paths';
import { GOAL_STATUS_STYLES } from '../../helpers/constants/goal';

GoalForm.propTypes = {
  currentGoal: PropTypes.object,
};

export function GoalForm({ currentGoal }) {
  const { id, name, detail, employerId, status } = currentGoal || {};
  const router = useRouter();
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
    status: status || 'PENDING',
  };

  const methods = useForm({
    resolver: yupResolver(goalValidations),
    defaultValues,
    mode: 'onChange',
  });

  const { reset, handleSubmit } = methods;

  const addGoal = async (data) => await GoalManagementService.addEmployeeGoal(data);

  const editGoal = async (data) => await GoalManagementService.editEmployeeGoal(id, data);

  const onSubmit = async (data) => {
    try {
      await (id ? editGoal(data) : addGoal(data));
      reset();
      enqueueSnackbar(!id ? 'Create success!' : 'Update success!');
      router.push(PATH_PAGE.goals);
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
      <Card sx={{ pt: 4, pb: 8, px: 3, position: 'relative' }}>
        <CardHeader title="Goal Details" sx={{ pt: 0, px: 0 }} />
        {id && (
          <Label
            color={GOAL_STATUS_STYLES[`${status}`]?.color}
            sx={{ textTransform: 'uppercase', position: 'absolute', top: 10, right: 10 }}
          >
            {status}
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
