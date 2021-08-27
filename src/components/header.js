import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import * as headerStyles from "./header.module.css";
import MenuButton from "./menu-button";

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className={headerStyles.header}>
      <h1 className={headerStyles.title}>
        <Link to="/">{data.site.siteMetadata.title}</Link>
      </h1>
      <nav className={headerStyles.navBar}>
        <MenuButton toggleMenuClass={headerStyles.navMenu} menuId="nav-list"/>
        <ul className={headerStyles.navList} id="nav-list">
          <li>
            <Link
              to="/"
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
