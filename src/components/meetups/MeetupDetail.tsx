import Image from 'next/image';
import { MeetupItemProps } from './MeetupItem';
import classes from './MeetupDetail.module.css';

interface MeetupDetailProps extends MeetupItemProps {
  description: string;
}

const MeetupDetail = (props: MeetupDetailProps) => {
  return (
    <section className={classes.detail}>
      <Image src={props.image} alt={props.title} width={500} height={500} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
};

export default MeetupDetail;
