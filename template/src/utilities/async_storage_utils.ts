// Async Storage Utils for maintaining any operation and functions related to it.
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * function SaveDataToAsyncStorage: it will store any value that is provided, with key mentioned into Async Storage.
 * @param {string} key : key defines key that is used for storing data, keys are mentioned in Constants under SK.
 * @param {Any} value : value can be anything as we have not mentioned any specific type here.
 * @returns : does not return anything.
 */
export const SaveDataToAsyncStorage = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    // error in saving data to async storage.
  }
};

/**
 * function DeleteDataFromAsyncStorage: it will delete the value associated with the provided key from Async Storage.
 * @param {string} key : key defines the identifier for the data to be removed, keys are mentioned in Constants under SK.
 * does not return anything.
 */
export const DeleteDataFromAsyncStorage = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    // error in deleting data from async storage.
  }
};

/**
 * function ReadDataFromAsyncStorage: it will retrieve the value associated with the provided key from Async Storage.
 * @param {String} key : key defines the identifier for the data to be retrieved, keys are mentioned in Constants under SK.
 * @returns {String | null} : returns the stored value if found, or null if the key does not exist or an error occurs.
 */
export const ReadDataFromAsyncStorage = async (key: string) => {
  let value: string | null = null;
  try {
    value = await AsyncStorage.getItem(key);
  } catch (error) {
    // error in getting data from async storage.
  }
  return value;
};

/**
 * function ClearDataFromAsyncStorage: it will clear all data from Async Storage, removing all key-value pairs.
 * @returns : does not return anything.
 */
export const ClearDataFromAsyncStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    // error in deleting data from async storage.
  }
};
