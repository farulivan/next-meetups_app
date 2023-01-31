import MeetupList from '@/components/meetups/MeetupList';
import { useEffect, useState } from 'react';

export interface MeetupItemType {
  id?: string;
  title: string;
  image: string;
  address: string;
  description: string;
}

const DUMMY_MEETUPS: MeetupItemType[] = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Jakarta_Car_Free_Day.jpg/440px-Jakarta_Car_Free_Day.jpg',
    address: 'Jl. Medan Merdeka, No 20, Jakarta',
    description: 'This is the first meetup',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Bandung_City_31.jpg/600px-Bandung_City_31.jpg',
    address: 'Jl. Bandung Raya, No 1, Bandung',
    description: 'This is the second meetup',
  },
];

interface HomePageProps {
  meetups: MeetupItemType[]
}

const HomePage = (props: HomePageProps) => {
  // this is using react to fetch data, but this make a problem that the page will not pre-render by Next
  // const [loadedMeetups, setLoadedMeetups] = useState([] as MeetupItem[]);
  
  // useEffect(() => {
  //   setLoadedMeetups(DUMMY_MEETUPS)
  // }, [])

  return <MeetupList meetups={props.meetups} />;
};

//this function only run in build process not in the client/server
export async function getStaticProps() {
  //fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS
    }
  }
}

export default HomePage;
