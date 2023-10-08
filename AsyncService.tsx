import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key: string, value: any) => {
    try {
        const stringValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, stringValue);
    } catch (e: any) {
        console.error(e.message);
    }
}

export const getData = async (key: string) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            const data = JSON.parse(value);
            return data;
        }
    } catch (e: any) {
        console.log(e.message);
    }
};

export const removeData = async (key: string) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (e: any) {
        console.error(e.message);
    }
};

export const containsKey = async (key: string) => {
    try {
        const keys = await AsyncStorage.getAllKeys();
        return keys.includes(key);
    } catch (e: any) {
        console.error(e.message);
    }
};

export const clearAll = async () => {
    try {
        await AsyncStorage.clear();
    } catch (e: any) {
        console.log(e.message);
    }
};

export const getAllKeys = async () => {
    let keys: any = []
    try {
      keys = await AsyncStorage.getAllKeys()
    } catch (e: any) {
        console.error(e.message);
    }

    console.log(keys);
}