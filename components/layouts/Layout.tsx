import classes from './Layout.module.css';

export default function Layout({ children }: React.PropsWithChildren) {
  return <div className={classes.layout}>{children}</div>;
}
