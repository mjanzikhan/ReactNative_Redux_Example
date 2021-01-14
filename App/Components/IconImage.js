import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';

const IconImage = (props) => {
    
    return (
        <TouchableOpacity>


            <Image
                style={{
                    margin: 5, width: 20, height: 20,
                    resizeMode: 'contain', tintColor: 'white',
                }}
                source={props.Image}
            />
        </TouchableOpacity>);
};


export default IconImage;
