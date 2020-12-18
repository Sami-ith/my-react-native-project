import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
export default function Card(props) {
  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <Text style={styles.title}>{props.title}:</Text>
        <Text>{props.item.replace(/\"/g, '')}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    width: '80%'
  },
  content: {
    marginHorizontal: 18,
    marginVertical: 10
  },
  title: {
    fontWeight: 'bold'
  }
})
