import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [currentAnswer, setCurrentAnswer] = useState<string>("");
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="checkAnswerForm">
                <Form.Control
                value={currentAnswer}
                onChange={(event)=>{setCurrentAnswer(event.target.value)}}
                ></Form.Control>

            </Form.Group>
            <p>{currentAnswer === expectedAnswer ? "✔️" : "❌"}</p>
        </div>
    );
}
