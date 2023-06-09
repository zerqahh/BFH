import React from 'react';
import "./Bflag.scss";



const MainFeedComponent = ({ inputText, handleInputChange, handleButtonClick, generatedText }) => {
    return (
        <div className="mainfeed slide-fwd-center">
            <div className="mainfeed-container">
                <div className="mainfeed-text">
                    <div className="mainfeed-top"></div>
                    <div className="mainfeed-bottom">
                        <div className="mainfeed-post">
                            <p>STATUS UPDATE</p>
                            <div className="mainfeed-post-input">
                                <input value={inputText} onChange={handleInputChange} maxLength={1000} />
                                <button onClick={handleButtonClick} disabled={inputText.trim() === ''}>
                                    STATUS UPDATE
                                </button>
                            </div>
                        </div>
                        <div className="mainfeed-view">
                            <div className="mainfeed-view-title">
                                <p>BATTLEFEED</p>
                            </div>
                            {generatedText.map((post) => {
                                const { avatar, username } = post;
                                return (
                                    <div className="mainfeed-view-generated" key={post.id}>
                                        <div className="generated-container">
                                            <img
                                                src={avatar}
                                                alt="Avatar"
                                                style={{ width: '4.5vmin', height: '4.5vmin' }}
                                            />
                                            <div className="generated-post">
                                                <p id="nick">{username} said:</p>
                                                <p>{post.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainFeedComponent;