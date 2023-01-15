import Image from 'next/image';
import classes from './Hero.module.css';
import Typewriter from 'typewriter-effect';

export default function Hero() {
  const typewriter = (
    <Typewriter
      options={{
        strings: [`I'm a code wizard.`, 'I turn coffee into code.'],
        autoStart: true,
        loop: true,
        delay: 50,
        deleteSpeed: 100,
      }}
    />
  );
  return (
    <>
      <Image
        src={'/images/profile.jpg'}
        alt={'My profile'}
        height={300}
        width={300}
        className={classes.profilePhoto}
      />
      <div className={classes.circles}>
        <div className={[classes.circle, classes.circleGreen].join(' ')}></div>
      </div>
      <h1 className={classes.greetings}>
        Hi I&apos;m RJ.&nbsp;
        <span className={classes.typewriter}>{typewriter}</span>
      </h1>
    </>
  );
}
