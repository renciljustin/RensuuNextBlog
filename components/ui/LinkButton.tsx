import Link from 'next/link';
import classes from './LinkButton.module.css';

export default function LinkButton({
  link,
  text,
}: {
  link: string;
  text: string;
}) {
  return (
    <Link href={link} className={classes.link}>
      {text}
    </Link>
  );
}
