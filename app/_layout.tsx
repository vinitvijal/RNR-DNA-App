import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';


import { useColorScheme } from '@/hooks/useColorScheme';
import { useAuth } from '../hooks/useAuth';
import HomeScreen from './home';
import LoginScreen from './login';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  const { user, loading } = useAuth();

  if (!loaded || loading) {
    // Async font loading only occurs in development.
    return null;
  }

  if (!user) {
    return <LoginScreen />;
  }

  // Show HomeScreen after login
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <HomeScreen />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
