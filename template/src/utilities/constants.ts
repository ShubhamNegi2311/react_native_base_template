import {Dimensions, Platform} from 'react-native';

export const IS_ANDROID = Platform.OS === 'android';
export const IS_IOS = Platform.OS === 'ios';

export const SCREEN_HEIGHT = Dimensions.get('screen').height;
export const SCREEN_WIDTH = Dimensions.get('screen').width;
export const WINDOW_HEIGHT = Dimensions.get('window').height;
export const WINDOW_WIDTH = Dimensions.get('window').width;

export const ETHER_SCAN_API_KEY = 'RVQYPQVV2SMA4DRXUUMU6E3N2RVN8BFMKB';
export const BASE_URL = 'https://tasty.p.rapidapi.com/';
export const PAGE_SIZE = 15;

export const FONT_REGULAR = 'Roboto-Regular';
export const FONT_SEMI_BOLD = 'Roboto-Medium';
export const FONT_BOLD = 'Roboto-Bold';
