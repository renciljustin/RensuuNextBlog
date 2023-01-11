import classes from './Pill.module.css';

export default function Pill({ label }: { label: string }) {
  return <span className={classes.pill}>{label}</span>;
}
