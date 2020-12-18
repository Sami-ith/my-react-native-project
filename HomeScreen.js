import React from 'react'
import { useState } from 'react'
import { StyleSheet, View, TextInput, Alert } from 'react-native'

export default function HomeScreen({ navigation }) {
  const [name, setName] = useState('')
  var country

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold'
      }}
    >
      <TextInput
        style={styles.searchBox}
        placeholder="🔍  Type country name  "
        onChangeText={(text) => setName(text)}
        onSubmitEditing={() => {
          fetch('https://restcountries.eu/rest/v2/name/' + name)
            .then((response) => response.json())
            .then((result) => {
              country = result[0]
              if (!country) {
                alert('Not found try again')
                setName('')
              } else {
                navigation.navigate('Details', {
                  country: country
                })
                setName('')
              }
            })
        }}
        value={name}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  searchBox: {
    borderRadius: 50,
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    width: '80%',
    height: 50,
    textAlign: 'center'
  }
})
