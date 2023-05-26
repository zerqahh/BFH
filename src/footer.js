import "./App.scss";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="event-container">
        <div className="event-box">
          <div className="event" id="event-left">
            <p id="event-top">Saintz's 2v2 semi-finals</p>
            <p id="event-bottom">MAY 15</p>
          </div>

        </div>
        <div className="event-box">
          <div className="event" id="event-mid">
            <p id="event-top">MISCHIEF MANAGED</p>
            <p id="event-bottom">SEPTEMBER 23, 6PM CET</p></div>
        </div>

        <div className="event-box">
          <div className="event" id="event-right">
            <p id="event-top">HEXA LEAGUE</p>
            <p id="event-bottom">DECEMBER 29</p></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
