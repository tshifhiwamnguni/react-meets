import NewMeetupForm from "../components/meetups/form/NewMeetupForm";

function NewMeetsPage(){

    function addMeetupHandler(meetUpData){
        fetch('https://meetups-1ce57-default-rtdb.firebaseio.com/meetups.json',
        {
            method: 'POST',
            body: JSON.stringify(meetUpData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    return(
        <section>
            <h1> add new meetup</h1>
            <NewMeetupForm onAddMeetups={addMeetupHandler}/>
        </section>
    )
}

export default NewMeetsPage;