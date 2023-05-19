import React from 'react';
import { Button, Text, StyleSheet } from 'react-native';

export const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Sign into Note Script"
      onPress={() => navigation.navigate('Details', { title: 'Note' })}
    />
  );
};
const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallText: {
    color: '#000000',
  },
});
