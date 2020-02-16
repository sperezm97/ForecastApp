import { AsyncStorage } from "react-native";

export const verifyExceedLimit = (items, item) => {
  if (items.length >= 5) {
    return [item, ...items.splice(0, items.length - 1)];
  }
  return [item, ...items];
};

export const getItem = async key => {
  const item = await AsyncStorage.getItem(key);
  return JSON.parse(item);
};

export const setItem = async (key, data) => {
  let items = await getItem(key);
  if (items != null) {
    items = verifyExceedLimit(items, data);
    await AsyncStorage.setItem(key, JSON.stringify(items));
  }
};

export const removeItem = async removeIndex => {
  let items = await getItem("list");
  items = items.filter((item, index) => index != removeIndex);
  await AsyncStorage.setItem("list", JSON.stringify(items));
};

export const clear = async () => {
  await AsyncStorage.clear();
};
