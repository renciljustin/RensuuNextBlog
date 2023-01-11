import { Fragment } from 'react';
import Hero from '../components/home/Hero';
import Introduction from '../components/home/Introduction';

export default function HomePage() {
  return (
    <Fragment>
      <Hero />
      <Introduction />
    </Fragment>
  );
}
