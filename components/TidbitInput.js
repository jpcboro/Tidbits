import { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import CustomButton from './CustomButton';

function TidbitInput(props) {
    const { onAddItem } = props;
    const [enteredTidbitText, setEnteredTidbitText] = useState('');
   
    function tidbitInputHandler(enteredText) {
        console.log(enteredText);
        setEnteredTidbitText(enteredText);
      };
    
      function addTidbitHandler(){
        onAddItem(enteredTidbitText);
        setEnteredTidbitText('');
      };

    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder='What&apos;s your tidbit?'
                placeholderTextColor='#B7B1AE'
                value={enteredTidbitText}
                onChangeText={tidbitInputHandler}
                style={styles.textInput} />
            <CustomButton title='Add Tidbit' color='#C45071'
                onPress={addTidbitHandler} />
        </View>
    );
};

export default TidbitInput;

const styles = StyleSheet.create({
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
});