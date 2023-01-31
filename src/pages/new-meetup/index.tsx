//our-domain/new-meetup

import NewMeetupForm from '@/components/meetups/NewMeetupForm'
import { MeetupItemType } from '..'


const NewMeetupPage = () => {
  const addMeetupHandler = (enteredMeetupData: MeetupItemType) => {
    console.log(enteredMeetupData)
  }
  
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />
}

export default NewMeetupPage