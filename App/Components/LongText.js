import {Text, View} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';

const LongText = (props) => {
    const [textShown, setTextShown] = useState(false); 
    const [lengthMore,setLengthMore] = useState(false);
    const toggleNumberOfLines = () => { 
        setTextShown(!textShown);
    }

    const onTextLayout = useCallback(e =>{
        setLengthMore(e.nativeEvent.lines.length >=4); 
    },[]);

    return (
        <View style={{marginStart:5, marginEnd:5}}>
            <Text
                onTextLayout={onTextLayout}
                numberOfLines={textShown ? undefined : 2}
                style={{  color:"white" }}>{props.props}</Text>

            {
                lengthMore ? <Text
                        onPress={toggleNumberOfLines}
                        style={{color:"white" }}>{textShown ? 'Read less...' : 'Read more...'}</Text>
                    :null
            }
        </View>)
}



export default LongText;
