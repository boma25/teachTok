import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {Pressable, View} from 'react-native';
import HomeSvg from '../assets/navigation/homeSvg';
import DiscoverSvg from '../assets/navigation/discoverSvg';
import ClockSvg from '../assets/clockSvg';
import BookmarksSvg from '../assets/navigation/bookmarksSvg';
import ProfileSvg from '../assets/navigation/profileSvg';
import styles from './styles';
import {colors} from '../utils/colors';
import HomeScreen from '../screens/home';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator screenOptions={screenOptions}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => <HomeSvg />,
          tabBarButton: ({children, ...props}) => (
            <Pressable {...props} style={styles.tabBarButton}>
              {children}
            </Pressable>
          ),
        }}
      />
      <BottomTab.Screen
        name="Discover"
        component={View}
        options={{
          tabBarIcon: () => <DiscoverSvg />,
          tabBarButton: ({children, ...props}) => (
            <Pressable disabled {...props} style={styles.tabBarButton}>
              {children}
            </Pressable>
          ),
        }}
      />
      <BottomTab.Screen
        name="Activity"
        component={View}
        options={{
          tabBarIcon: () => <ClockSvg />,
          tabBarButton: ({children, ...props}) => (
            <Pressable disabled {...props} style={styles.tabBarButton}>
              {children}
            </Pressable>
          ),
        }}
      />
      <BottomTab.Screen
        name="Bookmarks"
        component={View}
        options={{
          tabBarIcon: () => <BookmarksSvg />,
          tabBarButton: ({children, ...props}) => (
            <Pressable disabled {...props} style={styles.tabBarButton}>
              {children}
            </Pressable>
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={View}
        options={{
          tabBarIcon: () => <ProfileSvg />,
          tabBarButton: ({children, ...props}) => (
            <Pressable disabled {...props} style={styles.tabBarButton}>
              {children}
            </Pressable>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

const screenOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarStyle: styles.tabBar,
  tabBarLabelStyle: styles.tabBarLabel,
  tabBarActiveTintColor: colors.white,
  tabBarInactiveTintColor: colors.grey_03,
};

export default BottomTabNavigator;
