import Link from 'next/link';
import Pill from '../ui/Pill';
import PillGroup from '../ui/PillGroup';
import classes from './QuickLinks.module.css';
import { QuickLinksType, QuickLinksUI } from './QuickLinksUI';

export default function QuickLinks({
  quickLinks,
}: {
  quickLinks: QuickLinksUI;
}) {
  return (
    <section className={classes.container}>
      <h4 className={classes.title}>{quickLinks.title}</h4>
      {quickLinks.type === QuickLinksType.Link &&
        quickLinks.routes.map((route) => (
          <Link
            href={route.destination}
            className={classes.link}
            key={route.title}
          >
            {route.title}
          </Link>
        ))}
      {quickLinks.type === QuickLinksType.Pill && (
        <PillGroup>
          {quickLinks.routes.map((route) => (
            <Pill
              key={route.title}
              label={'#' + route.title}
              destination={route.destination}
            />
          ))}
        </PillGroup>
      )}
    </section>
  );
}
