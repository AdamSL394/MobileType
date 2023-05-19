import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Details } from './screens/Details';
import { HomeScreen } from './screens/Home';

export type RootStackParamList = {
  Home: undefined;
  Details: { productId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App(): JSX.Element {
  
  const Stack = createNativeStackNavigator();
  

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home'
        component={HomeScreen}
        options={{
        title:"Note Script"
        }}
        />
        <Stack.Screen name='Details'
        component={Details}
        options={{
          title:"Note"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

