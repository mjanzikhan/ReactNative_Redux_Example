import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, ActivityIndicator, Image, Dimensions, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import apiCall from './../ApiActionCreator';
import Assets from './../Assets';
import LongText from './../Components/LongText';
import IconImage from './../Components/IconImage';


const Home = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.apiReducer.data);
    const loading = useSelector((state) => state.apiReducer.loading);
    useEffect(() => {
        dispatch(apiCall('https://my-json-server.typicode.com/mjanzikhan/fakeJson/db'));
    }, []);


    return (
        <View style={{flex: 1, backgroundColor: 'black', justifyContent: 'center'}}>
            {loading ? (
                <ActivityIndicator size="large" color="red"/>
            ) : (
                <FlatList
                    contentContainerStyle={{width: '100%', alignItems: 'center'}}
                    data={data}
                    renderItem={renderItems}
                    keyExtractor={(item, index) => index.toString()}
                />
            )}
        </View>
    );
};

const renderItems = ({item}) => {
    let deviceWidth = Dimensions.get('window').width;

    return (
        <View
            style={{flexDirection: 'column', marginTop: 10, marginBottom: 10, alignItems: 'center'}}>
            {/*Item Header*/}
            <View
                style={{width: '100%', padding: 15, flexDirection: 'row', alignItems: 'center'}}>

                <View
                    style={{
                        flexDirection: 'row', alignItems: 'center',
                        position: 'absolute', left: 15, top: 5, bottom: 5,
                    }}>
                    <Image
                        style={{
                            margin: 0, width: 30, height: 30,
                            resizeMode: 'contain', tintColor: 'white',
                        }}
                        source={Assets.icons.Profile}
                    />

                    <Text
                        style={{color: 'white', marginStart: 10}}>
                        {item.username}
                    </Text>
                </View>

                <View
                    style={{
                        flexDirection: 'row', alignItems: 'center',
                        position: 'absolute', right: 15, top: 5, bottom: 5,
                    }}>
                    <IconImage
                        Image={Assets.icons.ThreeDots}/>

                </View>

            </View>

            {/*Main Image*/}
            <Image
                style={{
                    margin: 10, width: deviceWidth, height: undefined,
                    aspectRatio: 1, resizeMode: 'cover', transform: [{scale: 1}],
                }}
                source={{uri: item.image}}
            />

            {/*Like - Comment - Share - Bookmark*/}
            <View
                style={{width: '100%', padding: 15, flexDirection: 'row', alignItems: 'center'}}>

                <View
                    style={{
                        flexDirection: 'row', alignItems: 'center',
                        position: 'absolute', left: 15, top: 5, bottom: 5,
                    }}>
                    <IconImage
                        Image={Assets.icons.Heart}/>

                    <IconImage
                        Image={Assets.icons.Post}/>

                    <IconImage
                        Image={Assets.icons.Search}/>


                </View>

                <View
                    style={{
                        flexDirection: 'row', alignItems: 'center',
                        position: 'absolute', right: 15, top: 5, bottom: 5,
                    }}>

                    <IconImage
                        Image={Assets.icons.Heart}/>

                </View>

            </View>

            {/*Description*/}
            <View
                style={{padding: 15}}>
                <LongText
                    props={item.description}
                />

            </View>

            {/*Comments*/}


        </View>


    );

};


export default Home;
