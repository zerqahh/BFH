import "./App.scss";
import "./Header.scss";
function Header() {
  return (
    <header className="App-header">
      <div className="header-content">
        <div className="header-logo">
          <div className="logo-container">
            <div className="logo-top">MISCHIEF</div>
            <div className="logo-bottom">MANAGED</div>
          </div>
        </div>

        <div className="header-nav">
          <div className="nav-menu">
            <a href="#Vanilla">HOME</a>
            <a href="#Bflag" class="menu_href">
              CONTACT
            </a>
            <a href="#ProjectReality" class="menu_href">
              REPORT
            </a>
          </div>
        </div>
        <div className="nav-login">
          <button>
            <span>SIGN IN</span>
          </button>

          <div className="login-name"></div>
          <div className="login-avatar"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
