import { useState } from 'react';
import { FlatList, StyleSheet, TextInput, View } from 'react-native';
import CustomButton from './components/CustomButton.js';
import TidbitItem from './components/TidbitItem.js';

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
      <View style={styles.inputContainer}>
        <TextInput placeholder='What&apos;s your tidbit?'
          placeholderTextColor='#B7B1AE'
          onChangeText={tidbitInputHandler}
          style={styles.textInput} />
        <CustomButton title='Add Tidbit' color='#C45071' onPress={addTidbitHandler} />
      </View>
      <View style={styles.tidbitListContainer}>
        <FlatList data={tidbitItems} renderItem={(tidbitItemData) => {
          return <TidbitItem itemText={tidbitItemData.item.text}/>
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
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 3,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 2,
    borderColor: '#A63F82',
    width: '70%',
    color: 'white',
    marginRight: 6,
    padding: 8,
    fontSize: 18
  },
  tidbitListContainer: {
    flex: 5,
    padding: 5,
    paddingTop: 0
  },
});
