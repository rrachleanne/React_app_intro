import React from 'react';

import HappyMessage from "./msg"
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron'
// const App = () =>{
//     return <>
//    < HappyMessage />
//     </>
// };


function ButtonMessage() {
    let message = document.getElementById("wrapper");
    message.innerHTML = HappyMessage();
}

const App = () => {
    
    return <div>
        <div class="header"></div>
            <div class="bg">
                <Jumbotron >
                     <div className="container" >
                        <h1 id="wrapper">
                        {HappyMessage()}
                        </h1>
                    </div>  
               </Jumbotron>     
            </div>      
        <div class="buttons">
            <Button onClick={ButtonMessage} variant="outline-secondary">New Quote</Button>{''}
            </div>
    </div>
}


export default App