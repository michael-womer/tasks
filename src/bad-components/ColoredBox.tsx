import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

interface ColorProps {
    colorIndexValue: number,
    colorIndexSetter: (n:number)=> void
}


function ChangeColor({colorIndexValue, colorIndexSetter}:ColorProps): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                colorIndexSetter((1 + colorIndexValue) % COLORS.length);
            }}
        >
            Next Color
        </Button>
    );
}

function ColorPreview(props: {color:number}): React.JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[props.color],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px",
            }}
        ></div>
    );
}

export function ColoredBox(): React.JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);

    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[DEFAULT_COLOR_INDEX]}</span>
            <div>
                <ChangeColor colorIndexSetter={setColorIndex} colorIndexValue={colorIndex}></ChangeColor>
                <ColorPreview color={colorIndex}></ColorPreview>
            </div>
        </div>
    );
}
