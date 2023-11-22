import {Platform, StyleSheet} from 'react-native';
import {colors} from '../utils/colors';
import {widthPercentageToDP} from '../helpers/responsiveness.helpers';

export default StyleSheet.create({
  tabBar: {
    backgroundColor: colors.black,
  },
  tabBarLabel: {
    marginBottom: Platform.OS === 'android' ? 5 : undefined, //needs to be done here, not on the tabBar itself, because safe area view will get messed up on iOS if done on the tabBar
  },
  tabBarButton: {
    width: widthPercentageToDP(20),
  },
});
