import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListTab from '../tabs/ListTab';
import MapTab from '../tabs/MapTab';
import FavouritesTab from '../tabs/FavouritesTab';
import SettingsTab from '../tabs/SettingsTab';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../styles/Global';

export default function RootScreen() {

    const Tab = createBottomTabNavigator();

    return (
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
    );
}
