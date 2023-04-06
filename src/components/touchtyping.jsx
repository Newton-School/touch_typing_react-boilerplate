import React, { Component } from 'react';
import '../styles/touchtyping.css';
import Keyboard from './keyboard';
import TypingBox from './typingbox';
import Results from './results';



class TouchTypingApp extends Component {
    constructor(props) {

        
        
    }
    render() {
        

        return (
            <div className='wrapper'>
                <Keyboard                />
                <TypingBox
                    



                />
                <Results                             />
            </div>
        );
    }
}

export default TouchTypingApp;
