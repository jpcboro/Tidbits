import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import TidbitItem from './components/TidbitItem.js';
import TidbitInput from './components/TidbitInput.js';

export default function App() {
  const [tidbitItems, setTidbitItems] = useState([]);
  
  function addTidbitHandler(enteredTidbitText) {
    setTidbitItems(currentTidbit => [...currentTidbit,
    { text: enteredTidbitText, key: Math.random().toString() }]);
    console.log("entered text is " + JSON.stringify(tidbitItems));
  };

  return (
    <View style={styles.appContainer}>
      <TidbitInput
        onAddItem={addTidbitHandler} />
      <View style={styles.tidbitListContainer}>
        <FlatList data={tidbitItems} renderItem={(tidbitItemData) => {
          return <TidbitItem itemText={tidbitItemData.item.text} />
        }}
          keyExtractor={(item, index) => {
            return item.key
          }}
        />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 30,
    backgroundColor: '#224573'
  },
  tidbitListContainer: {
    flex: 5,
    padding: 5,
    paddingTop: 0
  },
});
