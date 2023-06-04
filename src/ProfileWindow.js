import React from 'react';
import "./ProfileWindow.scss"

function ProfileWindow({ toggleProfileVisibility }) {
    return (
        <div className='profile-container scale-up-ver-top   '>
            <div className='profile-avatar-and-description'>
                <div className='profile-avatar-container'>
                    <div className='profile-avatar'></div>
                </div>
                <div className="profile-description-container">
                    <div className='profile-description-content'>
                        <div className='profile-membership'>
                            <h6>MEMBER OF</h6>
                            <div className='profile-group'>
                                <div className='profile-group-logo'></div>
                                <h5>2023 5v5 mix by zerq </h5>
                            </div>

                            <div className='profile-group'>
                                <div className='profile-group-logo'></div>
                                <h5>Mischief Managed</h5>
                            </div>
                            <div className='profile-group'>
                                <div className='profile-group-logo'></div>
                                <h5>Blitz</h5>
                            </div>
                        </div>
                        <div className='profile-skillcheck'>
                            <h6>SKILLCHECK</h6>
                            <div className='profile-skillcheck-container'></div>
                        </div>



                        {/* <div className='profile-description-contactlist'>
                            <h6>CONTACT</h6>
                            <div className='profile-description-contactlist-item'><h4>Discord</h4></div>
                            <div className='profile-description-contactlist-item'>Battlelog</div>

                        </div> */}
                    </div>
                </div>
            </div>


            <div className="profile-data-container">

                <div className='profile-data-content'>
                    <div className='profile-nickname'>
                        <><h1>zerqPROSPIELER</h1></>
                        <><button onClick={toggleProfileVisibility} >HOME</button></>
                    </div>


                </div>
            </div>
        </div>
    )


}

export default ProfileWindow;