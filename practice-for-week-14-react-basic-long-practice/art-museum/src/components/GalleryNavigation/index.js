import { NavLink } from "react-router-dom";
import "./GalleryNavigation.css";
import { Navbar, Nav } from "react-bootstrap";

export default function GalleryNavigation(props) {
  const { galleries } = props;
  console.log(galleries);
  return (
    <Navbar sticky="bottom" bg="dark" className="nav-bar-color" expand={false}>
      <NavLink to="/">
        <Navbar.Brand className="navBrand">Harvard Art Museum</Navbar.Brand>
      </NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="nav-grid">
          {galleries.map((gallery) => {
            return (
              <NavLink
                exact
                key={gallery.galleryid}
                to={`/galleries/${gallery.galleryid}`}
                className="nav-link"
              >
                {gallery.name}
              </NavLink>
            );
          })}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
