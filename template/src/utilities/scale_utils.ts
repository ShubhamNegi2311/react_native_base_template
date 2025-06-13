import {Dimensions, PixelRatio, ScaledSize} from 'react-native';

// Types
type ScreenSize = {
  width: number;
  height: number;
};

// Get initial screen size
let {width, height} = Dimensions.get('window');
let shortDimension = Math.min(width, height);
let longDimension = Math.max(width, height);

// Determine adaptive guideline sizes based on device type
let guidelineBaseWidth = 390;
let guidelineBaseHeight = 844;

function setAdaptiveGuidelines({width, height}: ScreenSize) {
  const aspectRatio = height / width;

  if (width >= 600) {
    // Tablet / Foldable open
    guidelineBaseWidth = 600;
    guidelineBaseHeight = 960;
  } else if (aspectRatio < 1.6) {
    // Landscape or foldable
    guidelineBaseWidth = 480;
    guidelineBaseHeight = 800;
  } else {
    // Regular phone (portrait)
    guidelineBaseWidth = 390;
    guidelineBaseHeight = 844;
  }
}

// Call initially
setAdaptiveGuidelines({width, height});

// Scale functions
export const scale = (size: number): number =>
  PixelRatio.roundToNearestPixel((shortDimension / guidelineBaseWidth) * size);

export const verticalScale = (size: number): number =>
  PixelRatio.roundToNearestPixel((longDimension / guidelineBaseHeight) * size);

export const moderateScale = (size: number, factor = 0.5): number =>
  size + (scale(size) - size) * factor;

export const moderateVerticalScale = (size: number, factor = 0.5): number =>
  size + (verticalScale(size) - size) * factor;

// Aliases
export const s = scale;
export const vs = verticalScale;
export const ms = moderateScale;
export const mvs = moderateVerticalScale;

// Update on orientation/fold change
function updateDimensions(window: ScaledSize) {
  width = window.width;
  height = window.height;
  shortDimension = Math.min(width, height);
  longDimension = Math.max(width, height);
  setAdaptiveGuidelines({width, height});
}

Dimensions.addEventListener('change', ({window}) => updateDimensions(window));
