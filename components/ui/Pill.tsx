import Link from 'next/link';
import classes from './Pill.module.css';

export default function Pill({
  label,
  destination,
}: {
  label: string;
  destination: string;
}) {
  return (
    <Link href={destination} className={classes.pill}>
      {label}
    </Link>
  );
}
