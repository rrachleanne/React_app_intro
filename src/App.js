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
<Jumbotron >
        <div className="container" >
            <h1 id="wrapper">
                {HappyMessage()}
            </h1>
        </div>        

  
        <Button onClick={ButtonMessage} variant="primary">New Quote</Button>{''}
    </Jumbotron>
    </div>
}


export default App