import { useState } from 'react';
import { FlatList, StyleSheet, TextInput, View } from 'react-native';
import CustomButton from './components/CustomButton.js';
import TidbitItem from './components/TidbitItem.js';
import TidbitInput from './components/TidbitInput.js';

export default function App() {
  const [enteredTidbitText, setEnteredTidbitText] = useState('');
  const [tidbitItems, setTidbitItems] = useState([]);

  function tidbitInputHandler(enteredText) {
    console.log(enteredText);
    setEnteredTidbitText(enteredText);
  };

  function addTidbitHandler() {
    setTidbitItems(currentTidbit => [...currentTidbit,
    { text: enteredTidbitText, key: Math.random().toString() }]);
    console.log("entered text is " + JSON.stringify(tidbitItems));
  };

  return (
    <View style={styles.appContainer}>
      <TidbitInput getInput={tidbitInputHandler} value={enteredTidbitText}
        addItem={addTidbitHandler} />
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
