import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../consts/colors';


interface StyleProps {
    container: ViewStyle;
    category: ViewStyle;
}

interface CategoryProps {
    title: string;
    iconName: string;
    selected: boolean;
    onPress: () => void;
}

const Categories: React.FC = (): React.ReactElement => {
    const [selectedCategory, setSelectedCategory] = React.useState(0);
    const categories = [
        { title: "Chair", iconName: "seat-outline" },
        { title: "Table", iconName: "table-furniture" },
        { title: "Cupboard", iconName: "cupboard-outline" },
        { title: "Bed", iconName: "bed-queen-outline" },
    ]

    const Category: React.FC<CategoryProps> = ({ title, iconName, onPress, selected }): React.ReactElement => {
        const bgColor = selected ? COLORS.primary : COLORS.light;
        const fgColor = selected ? COLORS.light : COLORS.primary;
        return (
            <TouchableOpacity
                activeOpacity={0.7}
                style={{ backgroundColor: bgColor, ...styles.category }}
                onPress={onPress}>
                <Icon name={iconName} size={20} color={fgColor} />
                <Text style={{ fontWeight: 'bold', color: fgColor, marginLeft: 5 }}>{title}</Text>
            </TouchableOpacity>
        );
    }

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                Categories
            </Text>
            <View style={styles.container}>
                {
                    categories.map((category, index) => {
                        return <Category
                            key={index}
                            title={category.title}
                            selected={selectedCategory === index}
                            iconName={category.iconName}
                            onPress={() => setSelectedCategory(index)}
                        />
                    })
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create<StyleProps>({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    category: {
        flexDirection: 'row',
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export { Categories };