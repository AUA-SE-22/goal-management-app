import { useRef } from 'react';
import { FormControl, Button, InputLabel, Input, Box } from '@mui/material';

import Card from '../ui/Card';
import classes from './NewGoalForm.module.css';

function NewGoalForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const goalData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddGoal(goalData);
  }

  return (
    <Card>
      <form>
        <FormControl>
          <InputLabel  htmlFor="title">Meetup Title</InputLabel>
          <Input type="text" required id="title" ref={titleInputRef} />
        </FormControl>
        <FormControl>
          <InputLabel  htmlFor="image">Meetup Image</InputLabel>
          <Input type="url" required id="image" ref={imageInputRef} />
        </FormControl>
        <FormControl>
          <InputLabel  htmlFor="address">Address</InputLabel>
          <input type="text" required id="address" ref={addressInputRef} />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="description">Description</InputLabel>
          <textarea id="description" required rows="5" ref={descriptionInputRef}></textarea>
        </FormControl>
        <FormControl>
          <Button type="submit" onClick={submitHandler}>Add goal</Button>
        </FormControl>
      </form>
    </Card>
  );
}

export default NewGoalForm;
