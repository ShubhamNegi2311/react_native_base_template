import {Dispatch} from '@reduxjs/toolkit';
import {AxiosError} from 'axios';
import {Alert, AlertButton, AlertOptions} from 'react-native';
import Toast, {ToastType} from 'react-native-toast-message';
import {userLogin, userLogout} from 'store/slices/login_slice';
import {TValidateLoginDetailResponse} from 'types/api_response_data_models';

/**
 * Function to display an alert dialog with a message and an optional title.
 * The alert provides important information or feedback to the user.
 * @param message (string) The message to be displayed in the alert.
 * @param title (string) [Optional] The title of the alert. Defaults to "CWC" if not provided.
 * @returns {void}.
 *
 * Example Usage:
 * showAlert("Are you sure you want to delete this item?");
 * showAlert("An error occurred while processing your request", "Error");
 */
export const showAlert = (
  message: string,
  title?: string,
  alertButtons?: AlertButton[],
  options?: AlertOptions,
): void => {
  return Alert.alert(title ?? 'CWC', message, alertButtons, options);
};

/**
 * Function to display a toast notification with a message and type.
 * The toast appears for a specific duration and provides feedback to the user.
 * @param message (string) The message to be displayed in the toast.
 * @param type (ToastType) The type of toast to display (e.g., "success", "error", etc.).
 * @returns void.
 *
 * Example Usage:
 * showToast("Data saved successfully", "success");
 * showToast("An error occurred", "error");
 */
export const showToast = (message: string, type: ToastType) => {
  return Toast.show({
    text1: message,
    type: type,
    visibilityTime: 2500,
  });
};

/**
 * Function to check if the entered email address is valid or not.
 * Rule for email validation: Must follow the standard email format (e.g., "user@example.com").
 * - The email should contain:
 *   - No spaces or invalid characters before the "@" symbol.
 *   - A valid domain structure after the "@" symbol, including at least one period (".").
 * @param email (string) accepts the string value of the email address.
 * @returns {boolean} value based on email validation.
 */
export const validateEmail = (email: string): boolean => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

/**
 * Function to check if enetered password is valid or not.
 * Rule for password validation: Minimum eight characters, at least one uppercase letter,
 * one lowercase letter, one number and one special character.
 * @param value (string) accepts string value of the password
 * @returns {boolean} value based on password validation
 */
export const validatePassword = (value: string): boolean => {
  const regularExpression = /^(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
  return regularExpression.test(value);
};

/**
 * Function to check if enetered mobile number is valid or not.
 * Rule for mobile number validation: Must be of length 10,
 * @param value (string) accepts string value of the mobile number
 * @returns {boolean} value based on mobile number validation
 */
export const validateMobileNumber = (value: string): boolean => {
  return value.trim().length === 10;
};

/**
 * Handles API errors by displaying a toast notification.
 * @param {AxiosError} error - The Axios error object from the failed API request.
 * @returns {void}
 */
export const onApiError = (error: AxiosError): void => {
  showToast(error?.message ?? 'Server Error!', 'error');
};

/**
 * Dispatches the user login action with the provided login response data.
 * @param {Dispatch} dispatch - The Redux dispatch function to send actions to the store.
 * @param {TValidateLoginDetailResponse} loginResponse - The response object containing user login details.
 * @returns {Promise<void>} - A promise that resolves when the login actions are dispatched.
 */
export const loginUser = async (
  dispatch: Dispatch,
  loginResponse: TValidateLoginDetailResponse,
): Promise<void> => {
  dispatch(userLogin(loginResponse));
};

/**
 * Logs out the user by dispatching the logout action and clearing application data.
 * @param {Dispatch} dispatch - The Redux dispatch function to send actions to the store.
 * @returns {Promise<void>} - A promise that resolves when the logout actions are dispatched.
 */
export const logoutUser = async (dispatch: Dispatch): Promise<void> => {
  dispatch(userLogout());
};
