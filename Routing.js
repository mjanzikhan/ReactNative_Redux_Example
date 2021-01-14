import React from 'react';
import {Image, StatusBar} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';


import Assets from './App/Assets';
import Home from './App/Components/Home';
import Favs from './App/Components/Favs';
import Post from './App/Components/Post';
import Profile from './App/Components/Profile';
import Search from './App/Components/Search';


import * as Preference from 'react-native';

const UserBottomTab = createBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: ({navigation}) => ({
                title: 'Home',
                tabBarOnPress: () => {

                     navigation.navigate('Home')

                },
            }),
        },
        Search: {
            screen: Search,
            navigationOptions: ({navigation}) => ({
                title: 'Search',
                tabBarOnPress: () => {

                    navigation.navigate('Search')

                },
            }),
        },
        Post: {
            screen: Post,
            navigationOptions: ({navigation}) => ({
                title: 'Post',
                tabBarOnPress: () => {

                    navigation.navigate('Post')

                },
            }),
        },
        Favs: {
            screen: Favs,
            navigationOptions: ({navigation}) => ({
                title: 'Favs',
                tabBarOnPress: () => {

                    navigation.navigate('Favs')

                },
            }),
        },
        Profile: {
            screen: Profile,
            navigationOptions: ({navigation}) => ({
                title: 'Profile',
                tabBarOnPress: () => {

                    navigation.navigate('Profile')

                },
            }),
        },

    },
    {
        tabBarOptions: {
            showLabel: true,
            activeTintColor: "red",
            inactiveTintColor: "white",
            keyboardHidesTabBar: true,
            pressColor: 'gray',
            style: {
                padding: 5,
                backgroundColor: "black",
                borderTopWidth: 0,
            },
        },
        initialRouteName: 'Home',
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const {routeName} = navigation.state;
                if (routeName === 'Home'  ) {
                    return <Image source={focused ? Assets.icons.Home : Assets.icons.Home}
                                  style={{
                                      resizeMode: 'contain',
                                      height: focused ? 18 : 18,
                                      width: focused ? 18 : 18,
                                      tintColor:focused ? "red" : "white",
                                      marginTop: 5,
                                  }}/>;

                } else if (routeName === 'Search') {
                    return <Image source={focused ? Assets.icons.Search : Assets.icons.Search} style={{
                        resizeMode: 'cover',
                        height: focused ? 18 : 18,
                        width: focused ? 18 : 18,
                        tintColor:focused ? "red" : "white",
                        marginTop: 5,
                    }}/>;
                } else if (routeName === 'Post') {
                    return <Image source={focused ? Assets.icons.Post : Assets.icons.Post}
                                  style={{
                                      resizeMode: 'contain',
                                      height: focused ? 18 : 18,
                                      width: focused ? 18 : 18,
                                      tintColor:focused ? "red" : "white",
                                      marginTop: 5,
                                  }}/>;
                }else if (routeName === 'Favs') {
                    return <Image source={focused ? Assets.icons.Heart : Assets.icons.Heart}
                                  style={{
                                      resizeMode: 'contain',
                                      height: focused ? 18 : 18,
                                      width: focused ? 18 : 18,
                                      tintColor:focused ? "red" : "white", 
                                      marginTop: 5,
                                  }}/>;
                }else if (routeName === 'Profile') {
                    return <Image source={focused ? Assets.icons.Profile : Assets.icons.Profile}
                                  style={{
                                      resizeMode: 'contain',
                                      height: focused ? 18 : 18,
                                      width: focused ? 18 : 18,
                                      tintColor:focused ? "red" : "white",
                                      marginTop: 5,
                                  }}/>;
                }
            },
        }),
    },
);

const AppNavigator = createStackNavigator({

        UserBottomTab: UserBottomTab,


    },
    {

        initialRouteName: 'UserBottomTab',
        headerMode: 'none',

    },
);




export default createAppContainer(AppNavigator);
