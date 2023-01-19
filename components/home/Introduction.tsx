import Image from 'next/image';
import classes from './Introduction.module.css';

export default function Introduction() {
  return (
    <div className={classes.introduction}>
      <Image
        src={'/images/introduction.jpg'}
        alt={'My profile'}
        height={700}
        width={800}
        className={classes.displayPhoto}
      />
      <div>
        <p>
          I started to write code since year 2015. Ever since I was introduced
          in to programming, I never stopped learning. I feel empty if days are
          passed without typing a single piece of code. I have joined a lot of
          programming competitions during my academic days and brings
          recognition to my school. I got my first professional work experience
          in year 2019 and my journey to become an amazing Software Developer
          continuous.
        </p>
        <p>
          My motto in my career life is...{' '}
          <strong>A little progress is still a progress</strong>. Do not lose
          your hope if you are feeling lack of progress, you will grow day by
          day. Because, the path to become an Amazing Developer is through
          continuous learning and execution.
        </p>
        <p>
          I made this website to share some great pieces of my knowledge to help
          you grow and decide your journey as a Software Developer. The world of
          programming is so vast and it is better to know early which path to
          choose so you will be able to keep on track of your journey.
        </p>
      </div>
    </div>
  );
}
