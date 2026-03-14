import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsRequested, setAttemptsRequested] = useState<number>(0);

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Number of attempts left: {attemptsLeft}</p>
            <Form.Group>
                <Form.Control 
                type="number"
                value={attemptsRequested}
                onChange={(event)=>{setAttemptsRequested(
                    isNaN(parseInt(event.target.value)) ? 0 : (
                        parseInt(event.target.value)
                    ),
                );}}
                ></Form.Control>
            </Form.Group>
            <Button
                onClick={() => {
                    setAttemptsLeft(attemptsLeft - 1);
                }}
                disabled={attemptsLeft === 0}
            >
                use
            </Button>
            <Button
                onClick={() => {
                    setAttemptsLeft(attemptsRequested + attemptsLeft);
                }}
            >
                gain
            </Button>
        </div>
    );
}
