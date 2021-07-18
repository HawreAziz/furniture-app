import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ViewStyle, TouchableOpacity } from 'react-native';
import { ScreenProps } from '../types';
import { Header, Quantity } from '../components'
import COLORS from '../consts/colors';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


interface StyleProps {
    imgView: ViewStyle;
    ratingView: ViewStyle;
    priceView: ViewStyle;
    checkout: ViewStyle;
    favorite: ViewStyle;
    checkoutBtn: ViewStyle;
}


const DetailScreen: React.FC<ScreenProps<'Detail'>> = ({ navigation, route }): React.ReactElement | null => {
    const [quantity, setQuantity] = React.useState(1);

    const { furniture } = route.params;
    if (!furniture) {
        return null;
    }
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.white }}>
            <Header goBack={navigation.goBack} />
            <ImageBackground source={furniture.image} style={styles.imgView}>
                <View style={styles.ratingView} >
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name='star' size={20} color={COLORS.yellow} />
                        <Text style={{ fontWeight: 'bold', color: COLORS.white }} >4.0</Text>
                    </View>
                    <Text style={{ fontSize: 10, color: COLORS.white }}>280 Reviewes</Text>
                </View>
            </ImageBackground>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ paddingHorizontal: 20 }} >
                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20 }}>{furniture.name}</Text>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', marginTop: 20 }}>Description</Text>
                    <Text style={{ fontSize: 12, marginTop: 10, marginRight: 10, lineHeight: 22, color: COLORS.dark }}>
                        Designed modern chair with luxury curves in an organic yet
                        structured design that holds the sitting body and provides a feeling
                        of relaxation while offering excellent back support.
                    </Text>
                </View>
                <View style={styles.priceView} >
                    <Text style={{ fontSize: 18, color: COLORS.yellow }}>{furniture.price}</Text>
                    <Quantity
                        quantity={quantity}
                        increase={() => setQuantity(quantity + 1)}
                        decrease={() => {
                            console.log(quantity);
                            if ((quantity - 1) === 0) { return; }
                            setQuantity(quantity - 1);
                        }}
                    />
                </View>
                <View style={styles.checkout}>
                    <View style={styles.favorite}>
                        <Icon name="heart-outline" size={28} />
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => console.log('TODO')}
                        style={styles.checkoutBtn}
                    >
                        <Text style={{ color: COLORS.white }}>Add To Cart</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create<StyleProps>({
    imgView: {
        resizeMode: 'cover',
        height: 300,
        borderRadius: 10,
        overflow: 'hidden',
        marginHorizontal: 20,
        marginVertical: 10
    },
    ratingView: {
        width: 80,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        paddingVertical: 15,
        position: 'absolute',
        bottom: 0,
        right: 0,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    priceView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20,
        paddingHorizontal: 20
    },
    checkout: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 20
    },
    favorite: {
        width: 50,
        height: 50,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
        borderRadius: 30,
        marginRight: 10
    },
    checkoutBtn: {
        flex: 1,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        padding: 15,
        borderRadius: 10
    }
})

export { DetailScreen };