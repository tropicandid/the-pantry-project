import { View, Text, StyleSheet } from 'react-native';
import OrganizationList from '../../components/organization';

export default function Tab() {
  console.log("Rendering Home Screen of Tabs");
  return (
    <View style={styles.container}>
      <OrganizationList />
      <Text style={styles.text}>Home Screen of Tabs</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});