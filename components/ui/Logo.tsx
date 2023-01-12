import Link from 'next/link';
import classes from './Logo.module.css';

export default function Logo() {
  return (
    <Link href={'/'} className={classes.logo}>
      Next Blog
    </Link>
  );
}
