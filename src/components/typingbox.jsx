import React, { useRef } from "react";
import "../styles/typingbox.css";
const TypingBox = ({                            }) => {
     


    
    

 




    return (
        <div className="typing-box"     >
            <div className="inside-box">
                <div className="typing-code">       </div>
                <input
                    



                />
                <div className="typing-highlights">
                     





                </div>
            </div>
            
                <button className="start-button" onClick={startPractice}>
                    Start
                </button>
            
            
                <button className="start-button" onClick={startPractice}>
                    Restart
                </button>
            
            
        </div>
    );
};

export default TypingBox;
