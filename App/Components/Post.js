import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

const Post = () => {


    return (
        <View style={{flex: 1, backgroundColor: 'black', 
            justifyContent: 'center',alignItems:"center",
        }}>
            <Text
                style={{fontSize:16, color:"white"}}>
                Post - Coming Soon...
            </Text>
        </View>
    );
};

export default Post;
