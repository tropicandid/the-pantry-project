import { Tabs } from 'expo-router';
import { Icon } from 'react-native-paper';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="favorites"
        options={{
          title: 'Favorites',
          tabBarIcon: ({ color }) => <Icon source="heart-multiple" color={color} size={20} />,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <Icon source="corn" color={color} size={20} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <Icon source="account-outline" color={color} size={20} />,
        }}
      />
    </Tabs>
  );
}