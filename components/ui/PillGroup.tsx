import classes from './PillGroup.module.css';

export default function PillGroup({ children }: React.PropsWithChildren) {
  return <div className={classes.group}>{children}</div>;
}
