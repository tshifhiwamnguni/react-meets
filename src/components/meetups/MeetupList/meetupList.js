import classes from "./MeetupList.module.css";
import MeetupItem from "../meetupItem/meetupItem";

function MeetupList(props) {
  const data = props.meetup;
  return (
    <ul
      className={classes.list}>
      {data.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
