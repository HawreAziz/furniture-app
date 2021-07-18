import React from 'react'
import { View, Text, StyleSheet, ViewStyle, ImageBackground, ImageStyle, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../consts/colors';
import { FurnitureProps } from '../types';

interface CardProps {
    furniture: FurnitureProps;
    goToDetail: () => void;
}

interface StyleProps {
    container: ViewStyle;
    imgView: ImageStyle;
    favorite: ViewStyle;
    price: ViewStyle;
    textView: ViewStyle;
}

const Card: React.FC<CardProps> = ({ furniture, goToDetail }): React.ReactElement | null => {
    if (!furniture) {
        return null;
    }
    return (
        <Pressable onPress={goToDetail}>
            <View style={styles.container}>
                <ImageBackground source={furniture.image} style={styles.imgView}>
                    <View style={styles.favorite}>
                        <Icon name='heart' size={15} color={furniture.liked ? COLORS.red : COLORS.dark} />
                    </View>
                </ImageBackground>
                <Text style={{ marginTop: 10, ...styles.textView }}>{furniture.name}</Text>
                <View style={styles.price}>
                    <Text style={styles.textView}>{furniture.price}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name='star' size={20} color={COLORS.yellow} />
                        <Text>5.0</Text>
                    </View>
                </View>
            </View>
        </Pressable>

    )
}


const styles = StyleSheet.create<StyleProps>({
    container: {
        height: 200,
        width: 180,
        padding: 10,
        marginLeft: 20,
        marginVertical: 20,
        elevation: 10,
        backgroundColor: COLORS.white,
        borderRadius: 10
    },
    imgView: {
        flex: 1,
        borderRadius: 10,
        overflow: 'hidden',
    },
    favorite: {
        height: 25,
        width: 25,
        backgroundColor: COLORS.white,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
        position: 'absolute',
        right: 5,
        top: 4
    },
    price: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    textView: {
        fontSize: 12,
        fontWeight: 'bold',
    }
})

export { Card };
