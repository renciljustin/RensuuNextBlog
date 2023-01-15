import classes from './Container.module.css';

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`${classes.container} ${className}`}>{children}</div>;
}
