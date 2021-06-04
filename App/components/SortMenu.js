import React, {useState} from 'react'
import {Menu} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SortMenu = ({sortByPriceDesc, sortByPriceAsc, sortBySurfaceDesc}) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  return (
    <Menu accessibilityLabel={`sort-menu22`} testID={`sort-menu22`}
      visible={menuVisible}
      onDismiss={closeMenu}
      anchor={
        <Icon name="sort" size={34} onPress={openMenu} color="#d1d1d1" />
      }>
      <Menu.Item disabled={true} title="Sortowanie" accessibilityLabel={`sort-menu-sort`} testID={`sort-menu-sort`} />
      <Menu.Item accessibilityLabel={`sort-menu-price`} testID={`sort-menu-price`}
        onPress={() => {
          sortByPriceAsc();
          setMenuVisible(false);
        }}
        title="Cena: od najniższej"
      />
      <Menu.Item accessibilityLabel={`sort-menu-price2`} testID={`sort-menu-price2`}
        onPress={() => {
          sortByPriceDesc();
          setMenuVisible(false);
        }}
        title="Cena: od najwyższej"
      />
      <Menu.Item
          accessibilityLabel={`sort-menu-surface`} testID={`sort-menu-surface`}
          onPress={() => {
          sortBySurfaceDesc();
          setMenuVisible(false);
        }} title="Powierzchnia: od najwyższej" />
    </Menu>
  );
};

export default SortMenu;
