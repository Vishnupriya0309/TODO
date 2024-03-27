import { auth } from './firebase';

export const register = async (email, password) => {
  try {
    await auth.createUserWithEmailAndPassword(email, password);    
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

export const login = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export const logout = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    console.error('Error logging out:', error);
    throw error;
  }
};
