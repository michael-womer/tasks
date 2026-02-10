import React from "react";
import "./App.css";
import {Button, Container, Row, Col} from 'react-bootstrap';
import forestImg from './assets/forest.jpg'


function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript.  This is a message from Michael
            </header>


            <h1 style={ {backgroundColor:"green"}}>Header 1</h1>
            <Container>
            <Row>
            <img src={forestImg} alt="An illustration of a village in a forest" style={ {height:'500px'}}></img>
            <Col>
                <p>My top three favorite colors:</p>
                <ol>
                    <li>Purple</li>
                    <li>Red</li>
                    <li>Green</li>
                </ol>
                <div style={{width:"100px", height:"50px", backgroundColor:"red"}}></div>
            </Col>
            <Col>
                <Button onClick={()=>{console.log("Hello World!")}}>Log Hello World</Button>
                <div style={{width:"100px", height:"50px", backgroundColor:"red"}}></div>

            </Col>
            <Col>
                <p> 
                    Hello World!
                    Edit <code>src/App.tsx</code> and save. This page will
                    automatically reload.
                </p>
                <div style={{width:"100px", height:"50px", backgroundColor:"red"}}></div>

            </Col>
            </Row>
            </Container>
        </div>
    );
}

export default App;
