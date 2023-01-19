import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import classes from './SocialIcons.module.css';

export default function SocialIcons() {
  return (
    <div className={classes.container}>
      <a
        href="https://facebook.com/renciljustin"
        target={'_blank'}
        rel="noopener noreferrer"
      >
        <AiFillFacebook
          className={[classes.socialIcon, classes.iconFacebook].join(' ')}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/renciljustinevangelista/"
        target={'_blank'}
        rel="noopener noreferrer"
      >
        <AiFillLinkedin
          className={[classes.socialIcon, classes.iconLinkedIn].join(' ')}
        />
      </a>
      <a
        href="https://github.com/renciljustin"
        target={'_blank'}
        rel="noopener noreferrer"
      >
        <AiFillGithub
          className={[classes.socialIcon, classes.iconGithub].join(' ')}
        />
      </a>
    </div>
  );
}
