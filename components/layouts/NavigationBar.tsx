import Link from 'next/link';
import Logo from '../ui/Logo';
import Container from './Container';
import classes from './NavigationBar.module.css';

export default function NavigationBar() {
  return (
    <header>
      <Container>
        <nav className={classes.nav}>
          <Logo />
          <ul className={classes.navItems}>
            <li>
              <Link href={'/blog-posts'} className={classes.navItem}>
                Posts
              </Link>
            </li>
            <li>
              <Link href={'/about'} className={classes.navItem}>
                About
              </Link>
            </li>
            <li>
              <Link href={'/contact'} className={classes.navItem}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
