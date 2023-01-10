import Link from 'next/link';
import Container from './Container';
import classes from './NavigationBar.module.css';

export default function NavigationBar() {
  return (
    <header>
      <Container>
        <nav className={classes.nav}>
          <Link href={'/'} className={classes.navLogo}>
            Next Blog
          </Link>
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
