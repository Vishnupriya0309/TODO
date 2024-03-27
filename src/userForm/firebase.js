import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBh2YCdlqy0o5a89adfrZ9sLzpsvhGbMA4",
    authDomain: "todoapp-7e1d2.firebaseapp.com",
    projectId: "todoapp-7e1d2",
    storageBucket: "todoapp-7e1d2.appspot.com",
    messagingSenderId: "221527277301",
    appId: "1:221527277301:web:c906d575d861afc37b0fbc"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  
  export const register = async (email, password) => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      throw error;
    }
  };
  
  export const login = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      throw error;
    }
  };
  
  export const logout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      throw error;
    }
  };
