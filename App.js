import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import ListTab from './tabs/ListTab';
import MapTab from './tabs/MapTab';
import FavouritesTab from './tabs/FavouritesTab';
import SettingsTab from './tabs/SettingsTab';
import { Ionicons } from '@expo/vector-icons';
import { 
    OpenSans_300Light,
    OpenSans_300Light_Italic,
    OpenSans_400Regular,
    OpenSans_400Regular_Italic,
    OpenSans_600SemiBold,
    OpenSans_600SemiBold_Italic,
    OpenSans_700Bold,
    OpenSans_700Bold_Italic,
    OpenSans_800ExtraBold,
    OpenSans_800ExtraBold_Italic, 
    useFonts
  } from '@expo-google-fonts/open-sans'
import { AppLoading } from 'expo';
import { colors } from './styles/Global';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import store from './state/store';

export default function App() {
    let [fontsLoaded] = useFonts({
        OpenSans_300Light,
        OpenSans_400Regular,
        OpenSans_600SemiBold,
        OpenSans_700Bold,
        OpenSans_800ExtraBold,
      });

    const Tab = createBottomTabNavigator();

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <SafeAreaProvider>
                <Provider store={store}>
                    <NavigationContainer>
                        <Tab.Navigator
                            backBehavior="history"
                            screenOptions={({ route }) => ({
                                tabBarIcon: ({ focused, color, size }) => {
                                    let iconName;

                                    if (route.name === 'List') {
                                        iconName = focused ? 'ios-list-box' : 'ios-list';
                                    } else if (route.name === 'Map') {
                                        iconName = 'ios-map';
                                    } else if (route.name === 'Favourites') {
                                        iconName = focused ? 'ios-star' : 'ios-star-outline';
                                    } else if (route.name === 'Settings') {
                                        iconName = 'ios-settings';
                                    }
                                    return <Ionicons name={iconName} size={size} color={color} />;
                                },
                            })}
                            tabBarOptions={{
                                activeTintColor: colors.white,
                                inactiveTintColor: colors.white,
                                activeBackgroundColor: colors.primary,
                                inactiveBackgroundColor: colors.primary,
                                showLabel: false

                            }}
                        >
                            <Tab.Screen name="List" title="Events" component={ListTab} tabBarTestID="1" initialParams={{ title: "Events" }}/>
                            <Tab.Screen name="Map" title="Karte" component={MapTab} tabBarTestID="2" initialParams={{ title: "Karte" }}/>
                            <Tab.Screen name="Favourites" title="Favoriten" component={FavouritesTab} tabBarTestID="3" initialParams={{ title: "Favoriten" }}/>
                            <Tab.Screen name="Settings" title="Einstellungen" component={SettingsTab} tabBarTestID="4" initialParams={{ title: "Einstellungen" }}/>
                        </Tab.Navigator>
                    </NavigationContainer>
                </Provider>
            </SafeAreaProvider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
