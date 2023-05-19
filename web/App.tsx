import { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MyStack } from './Mystack';

import { HomeScreen } from './screens/Home';
import { Details } from './screens/Details';

export type RootStackParamList = {
  Home: undefined;
  Details: { productId: string };
};

export default function App() {
  const [notes, setNotes] = useState();
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    getNotes();
  }, []);
  const getNotes = async () => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    } as RequestInit;

    const recentlyUpdatedNotes = await fetch(
      process.env.API_URL,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((error) => console.log('error', error));
    setNotes(JSON.parse(recentlyUpdatedNotes as string));
  };

  const DATA = [
    {
      star: 'false',
      edit: false,
      look: true,
      gym: true,
      weed: false,
      code: true,
      read: false,
      eatOut: false,
      medal: false,
      king: false,
      'date/smoosh': false,
      basketball: false,
      updatedAt: '2023-05-15T14:24:28.753Z',
      _id: '64625fcb89f35c0030cffaa6',
      text: 'Call mom grandma & Dad \nDrive home\nGym \nLeetcode test w/ Bryce -- Passed\n3 Youtube shorts',
      date: '2023-05-14',
      userId: '112890888052131625129000',
      __v: 0,
    },
    {
      _id: '58694a0f-3da1-471f-bd96-145571e29d72',
      text: 'Third Item',
    },
  ];

  const Item = ({ text }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{text}</Text>
    </View>
  );

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar/>
        <SafeAreaView style={styles.container}>
          <FlatList
            data={notes}
            renderItem={({ item }) => <Item text={item.text} />}
            keyExtractor={(item) => item._id}
          />
        </SafeAreaView>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  item: {
    backgroundColor: 'light grey',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 12,
  },
});
