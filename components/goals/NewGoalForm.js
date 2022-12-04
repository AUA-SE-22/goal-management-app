import { useRef } from 'react';
import { FormControl, Button, InputLabel, Input, FormGroup, TextField } from '@mui/material';

function NewGoalForm(props) {
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const goalData = {
      title: enteredTitle,
      description: enteredDescription,
    };

    props.onAddGoal(goalData);
  }

  return (
    <FormGroup>
      <FormControl>
        <InputLabel htmlFor="title">Goal Title</InputLabel>
        <Input type="text" required id="title" inputRef={titleInputRef} />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="description">Description</InputLabel>
        <TextField id="description" required rows="5" inputRef={descriptionInputRef} />
      </FormControl>
      <FormControl>
        <Button type="submit" onClick={submitHandler}>
          Add goal
        </Button>
      </FormControl>
    </FormGroup>
  );
}

export default NewGoalForm;
