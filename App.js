import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
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
import RootScreen from './screens/RootScreen';
import DetailScreen from './screens/DetailScreen';

export default function App() {
    let [fontsLoaded] = useFonts({
        OpenSans_300Light,
        OpenSans_400Regular,
        OpenSans_600SemiBold,
        OpenSans_700Bold,
        OpenSans_800ExtraBold,
      });

    const Tab = createBottomTabNavigator();

    const Stack = createStackNavigator();

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <SafeAreaProvider>
                <Provider store={store}>
                    <NavigationContainer>
                        <Stack.Navigator initialRouteName="root" screenOptions={{headerShown: false}}>
                            <Stack.Screen name="root" component={RootScreen} />
                            <Stack.Screen name="details" component={DetailScreen} />
                        </Stack.Navigator>
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
