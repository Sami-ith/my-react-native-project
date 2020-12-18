import * as React from 'react'
import { View, Image } from 'react-native'
import Card from './Card.js'
import HomeScreen from './HomeScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

function DetailsScreen({ route, navigation }) {
  const { country } = route.params

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        source={{
          uri:
            'https://flagcdn.com/h240/' +
            country.alpha2Code.toLowerCase() +
            '.png'
        }}
        style={{ width: 100, height: 100 }}
      />
      <Card item={JSON.stringify(country.name)} title="Name" />
      <Card item={JSON.stringify(country.region)} title="Region" />
      <Card item={JSON.stringify(country.area)} title="Area" />
      <Card item={JSON.stringify(country.population)} title="Population" />
      <Card item={JSON.stringify(country.capital)} title="Capital" />
    </View>
  )
}

const Stack = createStackNavigator()
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#16a596'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home'
          }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
