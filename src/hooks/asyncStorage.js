import { AsyncStorage } from "react-native";

export const getItem = async key => {
  const item = await AsyncStorage.getItem(key);
  return item;
};

export const setItem = async (key, data) => {
  await AsyncStorage.setItem(key, data);
};

export const removeItem = async key => {
  await AsyncStorage.removeItem(key);
};

export const clear = async () => {
  await AsyncStorage.clear();
};

export const getAllKeys = async () => {
  const items = await AsyncStorage.getAllKeys();
  return items;
};
