import React from 'react'
import { View, Text, StyleSheet, ViewStyle, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Foundation';
import COLORS from '../consts/colors';

interface QuantityProps {
    quantity: number;
    increase: () => void;
    decrease: () => void;
}


interface StyleProps {
    container: ViewStyle;
    quantity: ViewStyle;
}


const Quantity: React.FC<QuantityProps> = ({ quantity, increase, decrease }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.8} style={styles.quantity} onPress={increase} >
                <Icon name='plus' size={18} color={COLORS.dark} />
            </TouchableOpacity>
            <Text style={{ color: COLORS.white, fontSize: 20, fontWeight: 'bold' }}>{quantity}</Text>
            <TouchableOpacity activeOpacity={0.8} style={styles.quantity} onPress={decrease} >
                <Icon name='minus' size={18} color={COLORS.dark} />
            </TouchableOpacity>
        </View >
    )
}


const styles = StyleSheet.create<StyleProps>({
    container: {
        width: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: COLORS.primary,
        padding: 5,
        borderRadius: 10
    },
    quantity: {
        height: 25,
        width: 25,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    }
});

export { Quantity };
