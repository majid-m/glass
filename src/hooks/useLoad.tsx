import AsyncStorage from '@react-native-async-storage/async-storage';

interface IProps {
    key: string;
};

const useLoad = async ({ key }: IProps) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {

    };
};

export default useLoad;