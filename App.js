import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Main from './src/navigation/main'; // Import the main component of your app

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <Main />
      </PaperProvider>
    </SafeAreaProvider>
  );
}
