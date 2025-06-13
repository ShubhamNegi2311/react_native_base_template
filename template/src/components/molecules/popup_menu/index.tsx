import BaseText from 'components/base_components/base_text';
import React from 'react';
import {Menu, useTheme} from 'react-native-paper';
import {ms} from 'react-native-size-matters';
import BounceView from '../bounce_view';

export type TPopupMenuListItem = {
  title: string;
  onPress: () => void;
};

type TPopupMenuProps = {
  menuList: TPopupMenuListItem[];
  anchor: React.ReactNode;
};

const PopupMenuComp: React.FC<TPopupMenuProps> = props => {
  const {menuList, anchor} = props;
  const [showMenu, setShowMenu] = React.useState<boolean>(false);
  const theme = useTheme();

  const openMenu = () => setShowMenu(true);
  const closeMenu = () => setShowMenu(false);

  return (
    <BounceView onPress={openMenu} style={{}}>
      <Menu
        anchor={anchor}
        onDismiss={() => closeMenu()}
        mode={'elevated'}
        anchorPosition={'top'}
        theme={theme}
        visible={showMenu}>
        {menuList.map((item, index) => (
          <Menu.Item
            key={index}
            title={
              <BaseText
                style={[theme.fonts.semiBold, {fontSize: ms(14)}]}
                children={item?.title}
              />
            }
            dense
            onPress={() => {
              item?.onPress();
              closeMenu();
            }}
          />
        ))}
      </Menu>
    </BounceView>
  );
};

const PopupMenu = React.memo(PopupMenuComp);
export default PopupMenu;
