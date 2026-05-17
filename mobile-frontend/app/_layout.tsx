import { Slot, Stack } from 'expo-router';
import { Text, View, StyleSheet } from 'react-native';
import { PaperProvider, useTheme } from "react-native-paper";
import { SessionProvider, useSession } from './ctx';
import { SplashScreenController } from './splash';

export default function Root() {
  console.log("Rendering Root Layout");
  // Set up the auth context and render your layout inside of it.
  return (
    <SessionProvider>
      <SplashScreenController />
      <RootNavigator />
    </SessionProvider>
  );
}

// Create a new component that can access the SessionProvider context later.
function RootNavigator() {
  console.log("Rendering Root Navigator");
  const { session } = useSession();

  return (
    <Stack>
      <Text style={styles.text}>User Session: {session ? "Authenticated" : "Not Authenticated"}</Text>
    </Stack>
  );
}

// export default function Root() {
//   // Set up the auth context and render our layout inside of it.
//   return (
//       <PaperProvider>
//         <Slot screenOptions={{ headerShown: false }} />
//       </PaperProvider>
//   );
// }

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