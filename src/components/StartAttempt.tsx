import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);
    
    function startQuiz() {
        setAttempts(attempts - 1);
        setInProgress(true)
    }
    
    return <div>
        <p>Number attempts: {attempts}</p>
        <Button onClick={startQuiz} disabled={inProgress || attempts === 0}>Start Quiz</Button>
        <Button onClick={()=>{setInProgress(false)}} disabled={!inProgress}>Stop Quiz</Button>
        <Button onClick={()=>{setAttempts(attempts + 1)}} disabled={inProgress}>Mulligan</Button>

    </div>;
}
