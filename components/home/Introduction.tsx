import Image from 'next/image';
import Container from '../layouts/Container';
import Section from '../layouts/Section';
import classes from './Introduction.module.css';

export default function Introduction() {
  return (
    <Container>
      <Section>
        <div className={classes.introduction}>
          <Image
            src={'/images/introduction.jpg'}
            alt={'My profile'}
            height={700}
            width={500}
            className={classes.displayPhoto}
          />
          <div>
            <p>
              I started turning coffee into code since year 2015. Ever since I
              was introduced in programming, I never stopped learning. I feel
              empty if days are passed without typing a single piece of code. I
              have joined a lot of programming competitions during my academic
              days and brings recognition to my school.
            </p>
            <p>
              My motto in my career life is... A little progress is still a
              progress. So do not lose hope if you are feeling lack of progress,
              you will grow day by day. Because, the path to become an Amazing
              Developer is through continuous learning and execution.
            </p>
            <p>
              I made this website to share some pieces of my knowledge to help
              you grow and decide your journey. Because the world of programming
              is so vast and it is better to know which path to choose while you
              are still a beginner so you do not lose your track.
            </p>
          </div>
        </div>
      </Section>
    </Container>
  );
}
