import "../styles/footer.css";

export default function Footer() {
  return (
    <footer id="home" className="hero">
      <div className="footer-main">
        <div className="footer-main-left">
          <h2 className="logo">LOGO.</h2>
          <p className="footer-title">Web Development & Design</p>
          <p className="footer-title">Inżynier i Specjalista ds. IoT</p>
          <p className="footer-description">
            Aplikacje Webowe oraz Infrastruktura IoT
          </p>
          <p className="footer-place">Gdańsk, Polska</p>
        </div>
        <div className="footer-main-right">
            <h3 className="footer-contact-title">Współpracujmy!</h3>
            <p className="footer-email">EMAILPLACEHOLDER</p>
            <p className="footer-phone">PHONEPLACEHOLDER</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-left">
            <p className="footer-copyright">© 2024 NAZWAMARKIPLACEHOLDER</p>
        </div>
        <div className="footer-bottom-right">
            <p className="footer-privacy">Polityka Prywatności</p>
        </div>
      </div>
      <div className="language-buttons">
        <button type="button">PL</button>
        <button type="button">ENG</button>
        <button type="button">DE</button>
      </div>
    </footer>
  );
}
