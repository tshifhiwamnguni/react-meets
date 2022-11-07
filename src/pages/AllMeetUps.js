// import classes from './allmeets.module.css'
import React from "react";
import { useState,useEffect } from "react";

import MeetupList from '../components/meetups/MeetupList/meetupList'

function AllMeetsPage() {

const [isLoading, setIsLoading] = useState(true)
const [loadedMeetupData, setMeetupData] = useState(true)

useEffect(()=>{
  fetch('https://meetups-1ce57-default-rtdb.firebaseio.com/meetups.json')
  .then(response=>{
     return response.json()
  }).then(data=>{
    const meetups= []
    for(const key in data){
      const meetup ={
        id: key,
        ...data[key]
      }
      meetups.push(meetup)
    }
    console.log(data);
      setIsLoading(false )
      setMeetupData(meetups)
  })
},[])
  
if (isLoading) {
  return(
    <section>
    <p>
      loading ...
    </p>
    </section>
  )
  
}
  return (
    <section>
        <h2>All Meets</h2>
        <MeetupList meetup={loadedMeetupData}/> 
  
    </section>
   
  );
}


export default AllMeetsPage;