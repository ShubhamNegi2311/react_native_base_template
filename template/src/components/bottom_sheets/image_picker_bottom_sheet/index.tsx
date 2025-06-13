import {BottomSheetModal, BottomSheetView} from '@gorhom/bottom-sheet';
import BaseBottomSheetModal from 'components/base_components/base_bottom_sheet_modal';
import BaseText from 'components/base_components/base_text';
import BounceView from 'components/molecules/bounce_view';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Asset,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import {MD3CustomTheme, useTheme} from 'react-native-paper';
import {ms} from 'utilities/scale_utils';

type ImagePickerBottomSheetProps = {
  reff: React.RefObject<BottomSheetModal | null>;
  onImageSelected: (image: Asset) => void;
};

const ImagePickerBottomSheetComp: React.FC<
  ImagePickerBottomSheetProps
> = props => {
  const {reff, onImageSelected} = props;
  const theme = useTheme();
  const styles = getStyles(theme);

  const handleCameraPress = React.useCallback(() => {
    launchCamera({mediaType: 'photo'}, response => {
      if (response.assets && response.assets.length > 0) {
        onImageSelected(response.assets[0]);
        reff?.current?.dismiss();
      }
    });
  }, [onImageSelected]);

  const handleGalleryPress = React.useCallback(() => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.assets && response.assets.length > 0) {
        onImageSelected(response.assets[0]);
        reff?.current?.dismiss();
      }
    });
  }, [onImageSelected]);

  return (
    <BaseBottomSheetModal reff={reff}>
      <BottomSheetView style={styles.bottomSheetView}>
        <BaseText style={styles.titleText}>{'Select Image'}</BaseText>
        <View style={styles.row}>
          <BounceView onPress={handleCameraPress}>
            <View style={styles.iconContainer}>
              <BaseText style={styles.icon}>📷</BaseText>
            </View>
            <BaseText style={styles.labelText}>{'Camera'}</BaseText>
          </BounceView>
          <BounceView onPress={handleGalleryPress}>
            <View style={styles.iconContainer}>
              <BaseText style={styles.icon}>🖼️</BaseText>
            </View>
            <BaseText style={styles.labelText}>{'Gallery'}</BaseText>
          </BounceView>
        </View>
      </BottomSheetView>
    </BaseBottomSheetModal>
  );
};

const ImagePickerBottomSheet = React.memo(ImagePickerBottomSheetComp);
export default ImagePickerBottomSheet;

const getStyles = (theme: MD3CustomTheme) =>
  StyleSheet.create({
    bottomSheetView: {
      padding: ms(20),
      paddingBottom: ms(40),
    },
    titleText: {
      fontSize: ms(18),
      fontWeight: 'bold',
      marginBottom: ms(16),
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    iconContainer: {
      alignItems: 'center',
      backgroundColor: theme.colors.card.cardBackground,
      borderRadius: ms(18),
      width: ms(70),
      height: ms(70),
      justifyContent: 'center',
      marginBottom: ms(6),
    },
    icon: {
      fontSize: ms(32),
    },
    labelText: {
      color: 'gray',
      marginTop: ms(4),
      textAlign: 'center',
    },
  });
