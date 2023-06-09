import { createStore, action, thunk } from 'easy-peasy';
import supabase from './supabase';

const store = createStore({
    user: {
        user: {
            nickname: localStorage.getItem('nickname') || 'default nickname',
            avatar: localStorage.getItem('avatar') || 'default avatar',
        },
        setUser: action((state, payload) => {
            state.user = { ...state.user, ...payload };
            localStorage.setItem('nickname', payload.nickname);
            localStorage.setItem('avatar', payload.avatar);
        }),
        // Funkcja wylogowania użytkownika
        signOutUser: thunk(async (actions) => {
            const { error } = await supabase.auth.signOut();
            if (!error) {
                actions.setUser({}); // Wyczyść dane użytkownika
                window.location.href = '/'; // Przekierowanie do strony logowania
            } else {
                console.log('Błąd podczas wylogowywania:', error);
            }
        }),
    },

    navigation: {
        showGoHome: false,
        setShowGoHome: action((state, payload) => {
            state.showGoHome = payload;
        }),
    },

    loader: {
        isLoaded: false,
        setIsLoaded: action((state, payload) => {
            state.isLoaded = payload;
        }),
    },

    profile: {
        isProfileVisible: false,

        toggleProfileVisibility: action(state => {
            state.isProfileVisible = !state.isProfileVisible;
        }),

        setProfileVisibilityFalse: action(state => {
            state.isProfileVisible = false;

        }),
    },

    friends: {
        friends: [], // Początkowo pusta tablica znajomych
        setFriends: action((state, payload) => {
            state.friends = payload; // Ustawienie wartości tablicy znajomych
        }),
    },


});

export default store;