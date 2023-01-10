import classes from './Section.module.css';

export default function Section({ children }: React.PropsWithChildren) {
  return <section className={classes.section}>{children}</section>;
}
