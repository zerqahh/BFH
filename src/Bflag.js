import "./App.scss";
import "./Bflag.scss";
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';



function Bflag() {

  // Wstawianie tekstu generujac div w feedzie 
  const [inputText, setInputText] = useState('');
  const [generatedText, setGeneratedText] = useState([]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };


  const handleButtonClick = () => {
    const id = uuidv4();
    const post = { id, text: inputText };
    setGeneratedText((prevGeneratedText) => [post, ...prevGeneratedText]);
    setInputText('');
  };

  return (
    <section className="main-container">

      <div className="main-content">


        <div className="main-left">
          <div className="left-sidebar">
            <div className="left-sidebar-navbar">
              <div className="left-navbar"><p>TAB 1</p></div>
              <div className="left-navbar"><p>TAB 2</p></div>
              <div className="left-navbar"><p>TAB 3</p></div>
              <div className="left-navbar"><p>TAB 4</p> </div>
              <div className="left-navbar"><p>TAB 5</p></div>
              <div className="left-navbar"><p>TAB 6</p></div>
            </div>
            <div className="left-sidebar-ranking">
              <div className="left-ranking">1</div>
              <div className="left-ranking">2</div>
              <div className="left-ranking">3</div>
              <div className="left-ranking">4</div>
              <div className="left-ranking">5</div>
              <div className="left-ranking">6</div>
              <div className="left-ranking">7</div>
              <div className="left-ranking">8</div>
              <div className="left-ranking">9</div>
              <div className="left-ranking">10</div>
            </div>
          </div>
        </div>
        <div className="mainfeed">

          <div className="mainfeed-container">
            <div className="mainfeed-text">
              <div className="mainfeed-top">

              </div>
              <div className="mainfeed-bottom">
                <div className="mainfeed-post"><p>STATUS UPDATE</p>
                  <div className="mainfeed-post-input">
                    <input value={inputText} onChange={handleInputChange} maxLength={1000} />
                    <button onClick={handleButtonClick} disabled={inputText.trim() === ''}>STATUS UPDATE</button>
                  </div>
                </div>
                <div className="mainfeed-view">
                  <div className="mainfeed-view-title">
                    <p>BATTLEFEED</p>
                  </div>

                  {generatedText.map((post) => (
                    <div className="mainfeed-view-generated" key={post.id}>
                      <p id="nick">name</p>
                      <p>{post.text}</p>
                      {/* <a href={`https://bflaghub.com/posts/${post.id}`}>Przejdź do postu</a> */}



                    </div>
                  ))}

                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="main-right">    </div>
      </div>


    </section>
  );
}



export default Bflag;
