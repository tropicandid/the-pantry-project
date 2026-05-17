import { Organization } from '../../types/organization';
import React, { useEffect, useState } from 'react';
import { Link, RelativePathString, useRouter } from "expo-router";
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import { Avatar, Button, Card, Searchbar } from 'react-native-paper';
import { fetchOrganizations } from '../../services/api';

const OrganizationList = () => {
  const router = useRouter();
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = (query: string) => setSearchQuery(query);

  useEffect(() => {
      const loadOrganizations = async () => {
        try {
          const data = await fetchOrganizations();
          setOrganizations(data);
        } catch (err) {
          console.error('Error fetching organizations:', err);
        } finally {
          setLoading(false);
        }
      };
  
      loadOrganizations();
    }, []);
  
    if (loading) return <Text>Loading blogs...</Text>;
    if (error) return <Text>Error loading blogs</Text>;
  
    return (
      <View>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />

        <FlatList
          data={organizations}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (

            <Card style={{ margin: 10 }} onPress={() => router.push(`/organization/${item.id}`)}>
              <Card.Cover source={{ uri: item.logo }} />
    
              <Card.Title title={item.name} subtitle={`${item.city}, ${item.state}`} />
              <Card.Content>
                <Text>{item.address}</Text>
                <Text>{item.email}</Text>
                <Text>{item.phone_number}</Text>
                <Text>{item.website}</Text>
              </Card.Content>
            </Card>

          )}
        />
      </View>
    );
}

export default OrganizationList