
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
    <View style={styles.inputContainer}>
      <TextInput placeholder='What&apos;s your tidbit for today?' 
                 style={styles.textInput}/>
      <Button color='#C45071' title='Add Tidbit'/>
    </View>
    <View style={styles.tidbitListContainer}>
      <Text style={styles.testStyle}>List of Tidbits...</Text>
    </View>

    </View>
   
  );
}

const styles = StyleSheet.create({
 appContainer:{
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
 textInput:{
  borderWidth: 2,
  borderColor: '#A63F82',
  width: '70%',
  color: 'white',
  marginRight: 6,
  padding: 8
 },
 tidbitListContainer:{
  flex: 5,
  padding: 5,
  paddingTop: 20
 },
 testStyle:{
  color: 'white'
 }
});
