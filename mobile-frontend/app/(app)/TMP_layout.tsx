import { Text, View, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { Redirect, Slot, Stack } from 'expo-router';
import { PaperProvider, useTheme } from "react-native-paper";

// import { useSession } from '../../ctx';

export default function AppLayout() {
    console.log("Rendering App Layout");
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        // simulate auth check (replace with real logic)
        const checkAuth = async () => {
        const loggedInUser = null; // or user object
        setUser(loggedInUser);
        setIsLoading(false);
        };

        checkAuth();
    }, []);

  // You can keep the splash screen open, or render a loading screen like we do here.
  if (isLoading) {
    console.log("App Layout is loading...");
    return <Text>Loading...</Text>;
  }

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (user) {
    console.log("User not authenticated, redirecting to login...");
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/login" />;
  }
  console.log("User authenticated, rendering app layout...");

  // This layout can be deferred because it's not the root layout.
  return (
    <PaperProvider>
      <Slot screenOptions={{ headerShown: false }}/>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
});