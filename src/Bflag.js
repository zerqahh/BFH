import "./App.scss";
import "./Bflag.scss";
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import supabase from "./supabase.js";
import LeftSidebar from './LeftSidebar';
import MyProfileWindow from './MyProfileWindow';
import RightSidebar from './RightSidebar';
import MainFeedComponent from "./MainFeed";
import { useStoreActions, useStoreState } from 'easy-peasy';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import FriendProfile from "./FriendProfile";

function Bflag() {

  const user = useStoreState((state) => state.user.user); // Pobierz użytkownika z magazynu
  const isProfileVisible = useStoreState((state) => state.profile.isProfileVisible); // MOJ PROFIL!!!


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
    const author = user.id;
    const avatar = user.user_metadata.avatar_url;
    const username = user.user_metadata.full_name;


    const postWithAuthor = { ...post, author, avatar, username };

    const { data, error } = await supabase.from('posts').insert([postWithAuthor]);
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
        {isProfileVisible ? <MyProfileWindow /> : (
          <Routes>
            <Route path="/" element={<MainFeedComponent
              inputText={inputText}
              handleInputChange={handleInputChange}
              handleButtonClick={handleButtonClick}
              generatedText={generatedText}
            />} />
            <Route path="/friends/:friendId" element={<FriendProfile />} />
          </Routes>
        )}
        <RightSidebar />
      </div>
    </section>
  );
}



export default Bflag;
