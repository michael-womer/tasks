import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    
    const colors:string[] = [
        "white", "magenta", "red", "blue", "green", "orange", "cyan", "purple"
    ]

    const [color, setColor] = useState<string>(colors[0]);
    
    return (
        <div>
            <h3>Change Color</h3>
            <Form.Group>
            {colors.map((c:string)=>
            <Form.Check type="radio" id={c} name={c + "radio"} label={c} inline={true} style={{backgroundColor:c}} checked={color === c} onChange={()=>{setColor(c)}} key={c}></Form.Check>
            )}        
            </Form.Group>

            <p data-testid="colored-box" style={{backgroundColor:color}}>{color} on</p>

        </div>
    );
}
