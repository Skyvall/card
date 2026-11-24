import Button from "./button";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Button text="POTFOLIO" target="portfolio" />
      <Button text="ABOUT ME" target="about" />
      <Button text="CONTACT" target="contact" />
      <a href="#home" className="navbar-logo">
        LOGO
      </a>
    </nav>
  );
}
