import "./App.scss";
import "./Bflag.scss";
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import supabase from "./supabase.js";
import LeftSidebar from './LeftSidebar';
import ProfileWindow from './ProfileWindow';
import RightSidebar from './RightSidebar';




function Bflag(props) {
  const { user, isProfileVisible, toggleProfileVisibility } = props;


  useEffect(() => {
    console.log('Aktualny stan isProfileVisible:', isProfileVisible);
  }, [isProfileVisible]);

  // Wstawianie tekstu generujac div w feedzie 
  const [inputText, setInputText] = useState('');
  const [generatedText, setGeneratedText] = useState([]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };


  // Pobieranie postów z bazy danych
  const fetchPosts = async () => {
    const { data, error } = await supabase.from('posts').select('*');
    if (error) {
      console.error('Error fetching posts:', error);
    } else {
      setGeneratedText(data ? data.reverse() : []);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);




  // Zapisywanie posta do bazy danych
  const savePostToDatabase = async (post) => {
    const { data, error } = await supabase.from('posts').insert([post]);
    if (error) {
      console.error('Error saving post:', error);
    } else {

      fetchPosts();
    }
  };


  // Obsługa przycisku "STATUS UPDATE"
  const handleButtonClick = () => {
    const id = uuidv4();
    const post = { id, text: inputText };
    setGeneratedText((prevGeneratedText) => [post, ...prevGeneratedText]);
    setInputText('');

    savePostToDatabase(post);
  };


  return (
    <section className="main-container">

      <div className="main-content">
        <LeftSidebar />


        {isProfileVisible ? <ProfileWindow toggleProfileVisibility={toggleProfileVisibility} /> : <div className="mainfeed slide-fwd-center ">

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
                      <div className="generated-container">
                        <>
                          <img src={user.user_metadata.avatar_url} alt="Avatar" style={{ width: "4.5vmin", height: "4.5vmin" }} />
                        </>
                        <div className="generated-post">
                          <p id="nick">{user.user_metadata.full_name}:</p>
                          <p>{post.text}</p>
                          {/* <a href={`https://bflaghub.com/posts/${post.id}`}>Przejdź do postu</a> */}
                        </div>
                      </div>

                    </div>
                  ))}

                </div>
              </div>
            </div>

          </div>
        </div>}



        <RightSidebar />
      </div>


    </section >
  );
}



export default Bflag;
