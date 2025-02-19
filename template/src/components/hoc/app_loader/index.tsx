import PrivacyGuardModal from 'components/modals/privacy_guard_modal';
import {LoaderComponent} from 'components/molecules/loader_component';
import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from 'store';
import {style} from './style';

type AppLoaderCompProps = {
  children: React.ReactNode;
};

const AppLoaderComp: React.FC<AppLoaderCompProps> = props => {
  const {children} = props;
  const isLoading = useSelector((state: RootState) => state.appData.showLoader);
  const showPrivacyGuardModal = useSelector(
    (state: RootState) => state.appData.showPrivacyGuard,
  );

  return (
    <View style={style.mainContainer}>
      {children}
      {isLoading && <LoaderComponent />}
      {showPrivacyGuardModal && (
        <PrivacyGuardModal visible={showPrivacyGuardModal} />
      )}
    </View>
  );
};

const AppLoader = React.memo(AppLoaderComp);
export default AppLoader;
