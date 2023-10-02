
import { View, Text, StyleSheet } from "react-native";

function TidbitItem(props) {
    const tidbitItemText = props.itemText;

    console.log(props);
    console.log(tidbitItemText);
    return (
        <View style={styles.tidbitItemContainer}>
            <Text style={styles.textStyle}>
                {tidbitItemText}
            </Text>
        </View>
    );
};

export default TidbitItem;

const styles = StyleSheet.create({
    tidbitItemContainer: {
        backgroundColor: '#2398d2',
        borderRadius: 6,
        paddingTop: 10,
        paddingLeft: 10,
        paddingBottom: 10,
        marginTop: 10
      },
      textStyle: {
        color: 'white',
        fontSize: 18,
      }
});