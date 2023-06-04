import React from 'react';
import "./loader.scss";
import "./Header.scss";

const Loader = () => {
    return <>

        <div className='loader'>
            <h4>Wait a sec</h4>
            <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>
    </>

};

export default Loader;