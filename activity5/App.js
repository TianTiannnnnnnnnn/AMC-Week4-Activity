import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

// Function to generate random colors
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const App = () => {
  const [selectedItem, setSelectedItem] = useState(null); // State to keep track of selected item

  const morningActivities = ['Taking bath', 'Breakfast', 'Toothbrush', 'Social media', 'Play games'];
  const afternoonActivities = ['Taking bath', 'Breakfast', 'Toothbrush', 'Social media', 'Play games'];
  const eveningActivities = ['Taking bath', 'Dinner', 'Toothbrush', 'Relax'];

  const handlePress = (activity) => {
    setSelectedItem(activity === selectedItem ? null : activity); // Toggle selection
    console.log(activity); // You can also perform any action on press here
  };

  // Function to determine the background color of the item
  const getItemStyle = (item) => {
    const color = getRandomColor();
    if (item === selectedItem) {
      return { backgroundColor: color, borderWidth: 2, borderColor: 'black' }; // Highlight selected item
    }
    return { backgroundColor: color }; // Default color for unselected items
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.sectionHeader}>MORNING</Text>
        <FlatList
          data={morningActivities}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handlePress(item)}>
              <View style={[styles.itemContainer, getItemStyle(item)]}>
                <Text style={styles.textBold}>
                  <Text style={styles.textItalic}>{item}</Text>
                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />

        <Text style={styles.sectionHeader}>AFTERNOON</Text>
        <FlatList
          data={afternoonActivities}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handlePress(item)}>
              <View style={[styles.itemContainer, getItemStyle(item)]}>
                <Text style={styles.textBold}>
                  <Text style={styles.textItalic}>{item}</Text>
                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />

        <Text style={styles.sectionHeader}>EVENING</Text>
        <FlatList
          data={eveningActivities}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handlePress(item)}>
              <View style={[styles.itemContainer, getItemStyle(item)]}>
                <Text style={styles.textBold}>
                  <Text style={styles.textItalic}>{item}</Text>
                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#f0f0f0",
  },
  container: {
    borderWidth: 1,
    padding: 20,
    backgroundColor: "#9DC08B",
  },
  sectionHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
    color: '#333',
  },
  textBold: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: 'bold',
  },
  textItalic: {
    fontStyle: "italic",
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: "#000",
    marginBottom: 10,
    padding: 10,
  },
});

export default App;
