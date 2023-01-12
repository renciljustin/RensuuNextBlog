import Link from 'next/link';
import Pill from '../ui/Pill';
import PillGroup from '../ui/PillGroup';
import classes from './QuickLinks.module.css';

export default function QuickLinks({
  title,
  type,
  links,
}: {
  title: string;
  type: string;
  links: { text: string; destination: string }[];
}) {
  return (
    <section className={classes.container}>
      <h4 className={classes.title}>{title}</h4>
      {type === 'link' &&
        links.map((link) => (
          <Link
            href={link.destination}
            className={classes.link}
            key={link.text}
          >
            {link.text}
          </Link>
        ))}
      {type === 'pills' && (
        <PillGroup>
          {links.map((link) => (
            <Pill
              key={link.text}
              label={'#' + link.text}
              destination={link.destination}
            />
          ))}
        </PillGroup>
      )}
    </section>
  );
}
