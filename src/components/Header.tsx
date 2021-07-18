import React from 'react'
import { View, Text, StyleSheet, ViewStyle, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';
import { FurnitureProps } from '../types';


interface StyleProps {
    header: ViewStyle;
    icon: ViewStyle;
}

interface HeaderProps {
    goBack: () => void;
}

const Header: React.FC<HeaderProps> = ({ goBack }) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.icon}
                onPress={goBack}
            >
                <Icon name='arrow-back-ios' size={20} />
            </TouchableOpacity>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Detail</Text>
            <TouchableOpacity activeOpacity={0.8} style={styles.icon} onPress={() => console.log('TODO')}>
                <Icon name='more-vert' size={20} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create<StyleProps>({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    icon: {
        backgroundColor: COLORS.light,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        borderRadius: 10
    }
})

export { Header };
