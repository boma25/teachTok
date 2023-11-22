import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './bottomTabNavigator';

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

export default AppNavigation;
