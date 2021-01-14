import React from 'react';
import Routing from './../Routing';
import {Provider} from 'react-redux';
import {store} from './Store';

const App = () => {
    return (
        <Provider store={store}>
            <Routing/>
        </Provider>
    );
};

export default App;
