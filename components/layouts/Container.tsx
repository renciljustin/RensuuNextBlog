import classes from './Container.module.css';

export default function Container({ children }: React.PropsWithChildren) {
  return <div className={classes.container}>{children}</div>;
}
