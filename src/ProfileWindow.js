import React from 'react';
import "./Bflag.scss"

function ProfileWindow({ toggleProfileVisibility }) {
    return (
        <div className='profile-container scale-up-ver-top   '>
            <div className='profile-avatar-and-description'>
                <div className='profile-avatar-container'>
                    <div className='profile-avatar'></div>
                </div>
            </div>
            <div className="profile-data-container">
                <div className='profile-data-content'>
                    <div className='profile-nickname'><h1>zerqPROSPIELER</h1></div>
                    <button onClick={toggleProfileVisibility} >Powrót</button>
                </div>
            </div>
        </div>
    )


}

export default ProfileWindow;