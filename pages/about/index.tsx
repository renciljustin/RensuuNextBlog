import { Fragment } from 'react';
import MyLife from '../../components/about/MyLife';
import TechStacks from '../../components/about/TechStacks';
import Introduction from '../../components/home/Introduction';
import Container from '../../components/layouts/Container';
import Section from '../../components/layouts/Section';
import classes from './AboutPage.module.css';

export default function AboutPage() {
  return (
    <Fragment>
      <Section>
        <Container className={classes.noPadding}>
          <Introduction />
        </Container>
      </Section>
      <TechStacks />
      <Section
        title="My Life"
        description="As A Human Being, I Also Have My Own Hobbies And Interests"
      >
        <Container>
          <MyLife />
        </Container>
      </Section>
    </Fragment>
  );
}
