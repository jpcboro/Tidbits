import { View, TextInput, StyleSheet } from 'react-native';
import CustomButton from './CustomButton';

function TidbitInput(props) {
    const { getInput, value, addItem } = props;

    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder='What&apos;s your tidbit?'
                placeholderTextColor='#B7B1AE'
                value={value}
                onChangeText={getInput}
                style={styles.textInput} />
            <CustomButton title='Add Tidbit' color='#C45071'
                onPress={addItem} />
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