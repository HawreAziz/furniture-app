import { NavigationProp, RouteProp } from '@react-navigation/native';

export interface FurnitureProps {
    id: string;
    name: string;
    price: string;
    image: any;
    liked: boolean;

}

export type NavigationParamList = {
    Home: undefined;
    Detail: { furniture: FurnitureProps };
}


export type ScreenProps<T extends keyof NavigationParamList> = {
    navigation: NavigationProp<NavigationParamList, T>,
    route: RouteProp<NavigationParamList, T>
}