import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface DoubleHalfProps {
    dhSetter: (n:number)=> void,
    dhValue: number
}

function Doubler({dhSetter, dhValue}:DoubleHalfProps): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                dhSetter(2 * dhValue);
            }}
        >
            Double
        </Button>
    );
}

function Halver({dhSetter, dhValue}:DoubleHalfProps): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                dhSetter(0.5 * dhValue);
            }}
        >
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler dhSetter={setDhValue} dhValue={dhValue}></Doubler>
            <Halver dhSetter={setDhValue} dhValue={dhValue}></Halver>
        </div>
    );
}
