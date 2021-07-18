import React from 'react';
import { View, TextInput, StyleSheet, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';


interface StyleProps {
    searchView: ViewStyle;
    tuneView: ViewStyle;
}

const Search: React.FC = (): React.ReactElement => {
    return (
        <View style={{ flexDirection: 'row', paddingHorizontal: 20, marginTop: 10 }} >
            <View style={styles.searchView}>
                <Icon name='search' size={25} />
                <TextInput placeholder="Search furniture" />
            </View>
            <View style={styles.tuneView}>
                <Icon name='tune' size={25} color={COLORS.white} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create<StyleProps>({
    searchView: {
        flexDirection: 'row',
        flex: 3,
        alignItems: 'center',
        backgroundColor: COLORS.light,
        borderRadius: 10,
        marginRight: 10,

    },
    tuneView: {
        backgroundColor: COLORS.primary,
        padding: 10,
        borderRadius: 10
    }
})

export { Search };
