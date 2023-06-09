import "./App.scss";
import "./Header.scss";
import React, { useState, useEffect } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { NavLink } from 'react-router-dom';


function Header() {
  const user = useStoreState((state) => state.user.user);
  const signOutUser = useStoreActions((actions) => actions.user.signOutUser);
  const setProfileVisibilityFalse = useStoreActions(actions => actions.profile.setProfileVisibilityFalse);

  const toggleProfileVisibility = useStoreActions(
    actions => actions.profile.toggleProfileVisibility
  );
  const handleProfileToggle = () => {
    toggleProfileVisibility(false);
  };



  const myProfileOff = () => {
    setProfileVisibilityFalse();
  };
  console.log("user.avatar", user.avatar)
  console.log("user.nickname", user.nickname)
  return (
    <header className="App-header">
      <div className="header-content">

        <NavLink to="/bf3" className="header-logo" onClick={myProfileOff}>
          <div className="logo-container">
            <div className="logo-top">B-FLAG</div>
            <div className="logo-bottom">BLITZ</div>
          </div>
        </NavLink>

        <div className="header-nav">
          <div className="nav-menu">
            <div className="nav-icons">

              <NavLink to={"/bf3"} className="icon" id="home-icon" onClick={myProfileOff}>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" /></svg>
              </NavLink>


              <div className="icon" id="community-icon" >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" ><path d="M480 48c0-26.5-21.5-48-48-48H336c-26.5 0-48 21.5-48 48V96H224V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V96H112V24c0-13.3-10.7-24-24-24S64 10.7 64 24V96H48C21.5 96 0 117.5 0 144v96V464c0 26.5 21.5 48 48 48H304h32 96H592c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48H480V48zm96 320v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM240 416H208c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16zM128 400c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zM560 256c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32zM256 176v32c0 8.8-7.2 16-16 16H208c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM112 160c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32zM256 304c0 8.8-7.2 16-16 16H208c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zM112 320H80c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16zm304-48v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM400 64c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h32zm16 112v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16z" /></svg>
              </div>
              <div className="icon" id="blitz-icon" >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" id="not"><path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z" /></svg>
              </div>

            </div>
          </div>

        </div>


        <div className="nav-login">


          <div className="login-name">
            <span>{user.nickname}</span>


          </div>

          <div className="login-avatar">
            <img src={user.avatar} alt="Avatar" style={{ width: "4.5vmin", height: "4.5vmin", borderRadius: "5vmin" }} /></div>

          <ul>
            <li>
              <button onClick={handleProfileToggle}>
                <span>PROFILE</span>
              </button>
               {/* <button >
                <span>SETTINGS</span>
              </button> */}


              <button onClick={signOutUser}>
                <span>SIGN OUT</span>
              </button>

            </li>
          </ul>

        </div>
      </div>
    </header>
  );
}



export default Header;


