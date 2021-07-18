import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageStyle,
    ViewStyle,
    Pressable,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../consts/colors'
import { FurnitureProps } from '../types';

interface StyleProps {
    container: ViewStyle;
    imgView: ImageStyle;
    header: ViewStyle;
    favorite: ViewStyle;
}

interface LandscapeProps {
    furniture: FurnitureProps;
    goToDetail: () => void;
}

const LandscapeCard: React.FC<LandscapeProps> = ({ furniture, goToDetail }): React.ReactElement | null => {
    if (!furniture) {
        return null;
    }
    return (
        <Pressable onPress={goToDetail}>
            <View style={styles.container}>
                <Image source={furniture.image} style={styles.imgView} />
                <View style={styles.header}>
                    <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{furniture.name}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 80, marginTop: 10 }}>
                        <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{furniture.price}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name="star" color={COLORS.yellow} size={15} />
                            <Text style={{ fontSize: 12, fontWeight: 'bold' }} >4.0</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.favorite}>
                    <Icon name='heart' color={furniture.liked ? COLORS.yellow : COLORS.dark} />
                </View>
            </View >
        </Pressable>
    )
}


const styles = StyleSheet.create<StyleProps>({
    container: {
        flex: 1,
        flexDirection: 'row',
        width: 300,
        backgroundColor: COLORS.white,
        borderRadius: 10,
        elevation: 10,
        marginRight: 20,
        marginBottom: 20,
    },
    imgView: {
        width: 100,
        height: 90,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    favorite: {
        width: 20,
        height: 20,
        backgroundColor: COLORS.white,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 8,
        margin: 10
    }
})


export { LandscapeCard };
