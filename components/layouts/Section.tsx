import classes from './Section.module.css';

export default function Section({
  children,
  title,
  description,
}: {
  children: JSX.Element;
  title?: string;
  description?: string;
}) {
  return (
    <section className={classes.section}>
      <div className={classes.header}>
        {title && <h2 className={classes.title}>{title}</h2>}
        {description && <p className={classes.description}>{description}</p>}
      </div>
      {children}
    </section>
  );
}
