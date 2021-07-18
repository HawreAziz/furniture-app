import React from 'react';
import { SafeAreaView, Text, StyleSheet, View, ViewStyle, StatusBar, ScrollView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Card, Categories, LandscapeCard, Search } from '../components';
import COLORS from '../consts/colors';
import furnitures from '../consts/furnitures';
import { ScreenProps } from '../types';


interface StyleProps {
    headerView: ViewStyle;
}

const HomeScreen: React.FC<ScreenProps<'Home'>> = ({ navigation }): React.ReactElement => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <StatusBar barStyle='light-content' />
            <View style={styles.headerView}>
                <Icon name="sort-variant" size={28} />
                <Icon name="cart-outline" size={28} />
            </View>
            <View style={{ paddingHorizontal: 20, marginBottom: 10 }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Best Furniture</Text>
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>For Your Home</Text>
            </View>
            <ScrollView >
                <Search />
                <Categories />
                <View>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 20 }}>Top Furniture</Text>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={furnitures}
                        renderItem={({ item }) => {
                            return <Card furniture={item} key={item.id} goToDetail={() => {
                                navigation.navigate('Detail', { furniture: item });
                            }} />
                        }}
                    />
                </View>
                <View style={{ padding: 20 }} >
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={furnitures}
                        renderItem={({ item }) => {
                            return <LandscapeCard key={item.id} furniture={item} goToDetail={() => navigation.navigate('Detail', { furniture: item })} />
                        }}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create<StyleProps>({
    headerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
    }
})

export { HomeScreen };