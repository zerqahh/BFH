import React, { useState } from 'react';
import "./FormPopup.scss";

function FormPopup({ onSave }) {
    const [username, setUsername] = useState('');
    const [avatar, setAvatar] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(username, avatar);
    };

    return (
        <div className='setnickname-form'>
            <form onSubmit={handleSubmit}>
                <div className='form-set-box'>
                    <div className='form-set-container'>
                        <h3>Set your username</h3>
                        <input type="text" value={username} minLength={3} maxLength={17} placeholder="Reveal yourself" onChange={(e) => setUsername(e.target.value)} />
                    </div>

                    <div className='form-set-container'>
                        <h3>Set direct link to your avatar </h3>
                        <input type="text" value={avatar} placeholder="Direct URL link" minLength={3} onChange={(e) => setAvatar(e.target.value)} />
                    </div></div>
                <div className='form-button'>
                    <button type="submit">Save</button>
                </div>
            </form></div>
    );
}

export default FormPopup;
