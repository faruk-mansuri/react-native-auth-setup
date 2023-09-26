import { Slot, useRouter, useSegments } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';

const InitialLayout = () => {
  const segment = useSegments();
  const router = useRouter();
  console.log(1);

  useEffect(() => {
    const checkLoginStatus = async () => {
      console.log(2);
      try {
        const token = await AsyncStorage.getItem('token');

        console.log(segment);
        console.log(token);
        if (
          (token && segment[0] === '(public)') ||
          (token && segment.length === 0)
        ) {
          router.replace('/home');
        } else if (!token) {
          router.replace('/login');
        }
      } catch (error) {
        console.log('error', error);
      }
    };

    checkLoginStatus();
  }, []);

  return <Slot />;
};

const Layout = () => {
  return <InitialLayout />;
};
export default Layout;
