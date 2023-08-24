import { NavLink } from "react-router-dom";

const NavbarLinks = ({ classInfo }) => {
  return (
    <>
      <ul className={classInfo}>
        <li>
          <NavLink to="/">home</NavLink>
        </li>
        <li>
          <NavLink to="/about">about</NavLink>
        </li>
        <li>
          <NavLink to="/blog">blog</NavLink>
        </li>
        <li>
          <NavLink to="/projects">projects</NavLink>
        </li>
        <li>
          <NavLink to="/contact">contact</NavLink>
        </li>
      </ul>
    </>
  );
};
export default NavbarLinks;
