import AsyncStorage from '@react-native-async-storage/async-storage';

interface IProps {
    key: string;
    value: any;
};

const useSave = async ({ key, value }: IProps) => {
    try {
        const currentData = await AsyncStorage.getItem(key);
        const jsonValue = JSON.stringify(value);
        if (!!currentData) {
            await AsyncStorage.mergeItem(key, value);
        } else {
            await AsyncStorage.setItem(key, jsonValue);
        };
    } catch (e) {

    }
};

export default useSave;