import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import "./global.css";
import Navigation from './navigation';
import { Provider } from 'react-redux';
import { store } from './store';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
<Navigation />
      </ThemeProvider>     
    </Provider>
  );
}