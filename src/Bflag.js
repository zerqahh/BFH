import "./App.scss";
import "./Bflag.scss";

function Bflag() {
  return (
    <section className="main-container">
      {/* <div className="sidebar-left">
        <div className="ranking">
          <div className="ranking-text">
            <span>ranking</span>
          </div>
          <div className="ranking-scores">
            <div className="scores-left">
              <span>1</span>
            </div>
            <div className="scores-middle">
              <div className="player-flag" id="first-place"></div>
              <div className="player-name">
                <span>Neko</span>
              </div>
            </div>
            <div className="scores-right">
              <span>91</span>
            </div>
          </div>
          <div className="ranking-scores">
            <div className="scores-left">
              <span>2</span>
            </div>
            <div className="scores-middle">
              <div className="player-flag" id="second-place"></div>
              <div className="player-name">SaintZ</div>
            </div>
            <div className="scores-right">
              <span>87</span>
            </div>
          </div>
          <div className="ranking-scores">
            <div className="scores-left">
              <span>3</span>
            </div>
            <div className="scores-middle">
              <div className="player-flag" id="third-place"></div>
              <div className="player-name">Omni</div>
            </div>
            <div className="scores-right">
              <span>85</span>
            </div>
          </div>
          <div className="ranking-scores">
            <div className="scores-left">
              <span>4</span>
            </div>
            <div className="scores-middle">
              <div className="player-flag" id="fourth-place"></div>
              <div className="player-name">xImLY</div>
            </div>
            <div className="scores-right">
              <span>82</span>
            </div>
          </div>
          <div className="ranking-scores">
            <div className="scores-left">
              <span>5</span>
            </div>
            <div className="scores-middle">
              <div className="player-flag" id="fifth-place"></div>
              <div className="player-name">Hydra</div>
            </div>
            <div className="scores-right">
              <span>81</span>
            </div>
          </div>
          <div className="ranking-scores">
            <div className="scores-left">
              <span>6</span>
            </div>
            <div className="scores-middle">
              <div className="player-flag" id="sixth-place"></div>
              <div className="player-name">ix4</div>
            </div>
            <div className="scores-right">
              <span>79</span>
            </div>
          </div>
          <div className="ranking-scores">
            <div className="scores-left">
              <span>7</span>
            </div>
            <div className="scores-middle">
              <div className="player-flag" id="seventh-place"></div>
              <div className="player-name">zerq</div>
            </div>
            <div className="scores-right">
              <span>77</span>
            </div>
          </div>
          <div className="ranking-scores">
            <div className="scores-left">
              <span>8</span>
            </div>
            <div className="scores-middle">
              <div className="player-flag" id="eighth-place"></div>
              <div className="player-name">Zoey</div>
            </div>
            <div className="scores-right">
              <span>75</span>
            </div>
          </div>
          <div className="ranking-scores">
            <div className="scores-left">
              <span>9</span>
            </div>
            <div className="scores-middle">
              <div className="player-flag" id="ninth-place"></div>
              <div className="player-name">ScyFy</div>
            </div>
            <div className="scores-right">
              <span>73</span>
            </div>
          </div>
          <div className="ranking-scores">
            <div className="scores-left">
              <span>10</span>
            </div>
            <div className="scores-middle">
              <div className="player-flag" id="teenth-place"></div>
              <div className="player-name">Casual</div>
            </div>
            <div className="scores-right">
              <span>72</span>
            </div>
          </div>

        </div>
      </div> */}
      <div className="main-content">


        <div className="main-left">
          <div className="left-sidebar">
            <div className="left-sidebar-navbar">
              <div className="left-navbar"><p>TAB 1</p></div>
              <div className="left-navbar"><p>TAB 2</p></div>
              <div className="left-navbar"><p>TAB 3</p></div>
              <div className="left-navbar"></div>
              <div className="left-navbar"></div>
              <div className="left-navbar"></div>
            </div>
            <div className="left-sidebar-ranking">
              <div className="left-ranking"></div>
              <div className="left-ranking"></div>
              <div className="left-ranking"></div>
              <div className="left-ranking"></div>
              <div className="left-ranking"></div>
              <div className="left-ranking"></div>
              <div className="left-ranking"></div>
              <div className="left-ranking"></div>
              <div className="left-ranking"></div>
              <div className="left-ranking"></div>
            </div>
          </div>
        </div>
        <div className="mainfeed">
          <div className="mainfeed-top">
            <div className="mainfeed-top-box">
              <div className="event" id="event-left">
                <p id="event-top">Saintz's 2v2 semi-finals</p>
                <p id="event-bottom">MAY 15</p>
              </div>

            </div>
            <div className="mainfeed-top-box">
              <div className="event" id="event-mid">
                <p id="event-top">MISCHIEF MANAGED</p>
                <p id="event-bottom">SEPTEMBER 23, 6PM CET</p></div>
            </div>

            <div className="mainfeed-top-box">
              <div className="event" id="event-right">
                <p id="event-top">HEXA LEAGUE</p>
                <p id="event-bottom">DECEMBER 29</p></div>
            </div>
          </div>
          <div className="mainfeed-bottom">
            <div className="mainfeed-text">
              <div className="mainfeed-text-left">
                <div className="text-generated"></div>
                <div className="text-generated"></div>
                <div className="text-generated"></div>
                <div className="text-generated"></div>
                <div className="text-generated"></div>
                <div className="text-generated"></div>
                <div className="text-generated"></div>
                <div className="text-generated"></div>
                <div className="text-generated"></div>
                <div className="text-generated"></div>
                <div className="text-generated"></div>
                <div className="text-generated"></div>

              </div>
              <div className="mainfeed-text-right">Chat</div>
            </div>

          </div>
        </div>

        <div className="main-right">    </div>
      </div>
      {/* <div className="sidebar-right"></div> */}

    </section>
  );
}



export default Bflag;
