import Section from '../layouts/Section';
import Container from '../layouts/Container';
import {
  BsLink45Deg,
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsLinkedin,
} from 'react-icons/bs';
import classes from './SharePost.module.css';

export default function SharePost() {
  return (
    <Section>
      <Container>
        <p className={classes.text}>SHARE IT ON:</p>
        <div className={classes.container}>
          <BsLink45Deg className={classes.icon} />
          <BsFacebook className={classes.icon} />
          <BsInstagram className={classes.icon} />
          <BsTwitter className={classes.icon} />
          <BsLinkedin className={classes.icon} />
        </div>
      </Container>
    </Section>
  );
}
