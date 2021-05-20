import React, {useState} from 'react'
import {Menu} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SortMenu = ({sortByPriceDesc, sortByPriceAsc, sortBySurfaceDesc}) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  return (
    <Menu
      visible={menuVisible}
      onDismiss={closeMenu}
      anchor={
        <Icon name="sort" size={34} onPress={openMenu} color="#d1d1d1" />
      }>
      <Menu.Item disabled={true} title="Sortowanie" />
      <Menu.Item
        onPress={() => {
          sortByPriceAsc();
          setMenuVisible(false);
        }}
        title="Cena: od najniższej"
      />
      <Menu.Item
        onPress={() => {
          sortByPriceDesc();
          setMenuVisible(false);
        }}
        title="Cena: od najwyższej"
      />
      <Menu.Item onPress={() => {
          sortBySurfaceDesc();
          setMenuVisible(false);
        }} title="Powierzchnia: od najwyższej" />
    </Menu>
  );
};

export default SortMenu;