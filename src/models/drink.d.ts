import { ImageSourcePropType } from 'react-native';

interface IDrinkItem {
    id: number;
    name: string;
    icon: ImageSourcePropType;
    volume: number;
    isActive: boolean;
};