import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { CheckBox, Icon } from 'react-native-elements';


function Checkbox({ item, onButtonPress }) {

    const [checked, setChecked] = useState(false);

    return (
        <View style={styles.Container}>
            <CheckBox
                key={item._id}
                title={item.title}
                containerStyle={styles.checkboxContainer}
                textStyle={styles.checkbox}
                checkedColor='#7159c1'
                checked={checked}
                onPress={() => setChecked(!checked)}
            />

            <TouchableOpacity style={styles.button} onPress={() => onButtonPress(item._id)}>
                <Icon iconStyle={styles.icon} name="delete" />
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({

    Container: {
        flexDirection: 'row',
        alignItems: 'center', 
    },

    checkbox: {
        color: '#7159c1',
        fontSize: 18,
    },

    checkboxContainer: {
        justifyContent:'center',
        backgroundColor: '#fff',
        height: 60,
        width: 320,
        borderWidth: 0
    },

    button: {
        right:11,
        alignItems: 'center',
        justifyContent:'center',
        height: 60,
        width: 60,
        backgroundColor: '#fff'
    },

    icon: {  
        color: '#f05a5b'
    },

})

export default Checkbox