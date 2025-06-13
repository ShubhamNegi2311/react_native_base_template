import {Dimensions, Platform} from 'react-native';
import {ms} from './scale_utils';

export const IS_ANDROID = Platform.OS === 'android';
export const IS_IOS = Platform.OS === 'ios';

export const {height: SCREEN_HEIGHT, width: SCREEN_WIDTH} =
  Dimensions.get('screen');
export const {height: WINDOW_HEIGHT, width: WINDOW_WIDTH} =
  Dimensions.get('window');

export const BASE_URL = '';
export const PAGE_SIZE = 15;

export const FONT_REGULAR = 'Roboto-Regular';
export const FONT_SEMI_BOLD = 'Roboto-Medium';
export const FONT_BOLD = 'Roboto-Bold';

export const BottomTabBarIconSize = ms(24);
export const BottomTabBarLabelSize = ms(12);

export const MaterialIcon = {
  TICK: 'tick',
  SEARCH: 'magnify',
  USER: 'account',
  USER_OUTLINE: 'account-outline',
  HOME: 'home',
  HOME_OUTLINE: 'home-outline',
  CLIPBOARD: 'clipboard',
  CLIPBOARD_OUTLINE: 'clipboard-outline',
  PASSWORD_VISIBLE: 'eye',
  PASSWORD_HIDDEN: 'eye-off',
  MAP_MARKER: 'map-marker',
  MAP_MARKER_OUTLINE: 'map-marker-outline',
  CHEVRON_UP: 'chevron-up',
  CHEVRON_DOWN: 'chevron-down',
  CHEVRON_LEFT: 'chevron-left',
  CHEVRON_RIGHT: 'chevron-right',
  EMAIL_OUTLINE: 'email-outline',
  CLOCK_8_OUTLINE: 'clock-time-eight-outline',
  CLOCK_3_OUTLINE: 'clock-time-three-outline',
  CELLPHONE_CHECK: 'cellphone-check',
  PENCIL_OULINE: 'pencil-outline',
  FACE_AGENT: 'face-agent',
  QUESTION_OUTLINE: 'help-circle-outline',
  SETTINGS: 'cog',
  SETTINGS_OUTLINE: 'cog-outline',
  BRIGHTNESS: 'brightness-6',
  CREDIT_CARD_OUTLINE: 'credit-card-outline',
  STAR_OUTLINE: 'star-outline',
  MEDAL_OUTLINE: 'medal-outline',
  WALLET_OUTLINE: 'wallet-outline',
  TEXT_BOX_OUTLINE: 'text-box-outline',
  DELETE: 'delete',
  SHARE_VARIANT: 'share-variant',
  EYE: 'eye',
  EYE_OFF: 'eye-off',
  FILE_SEARCH_OUTLINE: 'file-search-outline',
  CHECK_BOLD: 'check-bold',
  ALERT_CIRCLE_OUTLINE: 'alert-circle-outline',
  INFORMATION_OUTLINE: 'information',
  ACCOUNT: 'account',
  ACCOUNT_OUTLINE: 'account-outline',
  CART_OUTLINE: 'cart-outline',
  MAGNIFY: 'magnify',
  DIRECTIONS: 'directions',
  ADD: 'plus',
  CLOSE: 'close',
  THREE_DOTS_VERTICAL: 'dots-vertical',
  MOBILE: 'phone-outline',
  CALENDAR_MONTH: 'calendar-month',
  CHECKBOX_BLANK: 'checkbox-blank-outline',
  CHECKBOX_MARKED: 'checkbox-marked',
  DOWNLOAD: 'download',
  NEWSPAPER_VARIENT: 'newspaper-variant',
  TRUCK_CHECK: 'truck-check',
  PACKAGE_CHECK_CLOSED: 'package-variant-closed',
  HOME_ACCOUNT: 'home-account',
  CANCEL: 'cancel',
  TIMER_SAND: 'timer-sand',
  PROGRESS_CLOCK: 'progress-clock',
};
