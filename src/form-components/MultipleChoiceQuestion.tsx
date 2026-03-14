import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [currentAnswer, setCurrentAnswer] = useState<string>(options[0]);
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="multipleChoiceGroup">
                <Form.Select
                    value={currentAnswer}
                    onChange={(e) => {
                        setCurrentAnswer(e.target.value);
                    }}
                >
                    {options.map((option:string)=><option key={option} value={option}>{option}</option>)}
                </Form.Select>
            </Form.Group>
            {currentAnswer === expectedAnswer ?
                <p>✔️</p>
            :   <p>❌</p>}
        </div>
    );
}
