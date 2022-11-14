import React from "react";
import Card from "../../ui/Card";
import classes from "./NewMeetupForm.module.css";
import { useRef } from "react";

function NewMeetupForm(props) {
  const titleInputRefs = useRef();
  const imageInputRefs = useRef();
  const addressInputRefs = useRef();
  const descriptionInputRefs = useRef();
  function submit(event) {
    event.preventDefault();
    const enteredTitle = titleInputRefs.current.value;
    const enteredImage = imageInputRefs.current.value;
    const enteredAddress = addressInputRefs.current.value;
    const enteredDescription = descriptionInputRefs.current.value;
    const meetUpData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };
    console.log(meetUpData);
    props.onAddMeetups(meetUpData)
  }
  return ( 
    <Card>
      <form className={classes.form} onSubmit={submit}>
        <div className={classes.control}>
          <label htmlFor="title">meetup title</label>
          <input type="text" id="title" required ref={titleInputRefs} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">meetup image</label>
          <input type="url" id="image" required ref={imageInputRefs} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">meetup address</label>
          <input type="text" id="address" required ref={addressInputRefs} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">meetup description</label>
          <textarea
            type="text"
            id="description"
            required
            ref={descriptionInputRefs}
          />
        </div>
        <div className={classes.actions}>
          <button type="submit"> add new place</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
