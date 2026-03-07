import React, { useState } from "react";
import { Button } from "react-bootstrap";
// halloween, christmas, thanksgiving, new years eve, easter
// 🎃,🎁,🍗,🪩,🐰

//easter -> halloween -> thanksgiving -> christmas -> new years eve
// christmas -> easter -> halloween -> new years eve -> thanksgiving


type Holiday = "halloween" | "christmas" | "thanksgiving" | "new years eve" | "easter";

const orderRecord:Record<Holiday, Holiday> = {
    "easter" : "halloween",
    "halloween" : "thanksgiving",
    "thanksgiving" : "christmas", 
    "christmas" : "new years eve",
    "new years eve" : "easter"
}

const alphabetRecord:Record<Holiday, Holiday> = {
    "christmas" : "easter",
    "easter" : "halloween",
    "halloween" : "new years eve",
    "new years eve" : "thanksgiving",
    "thanksgiving" : "christmas"
}

const holidayToEmoji: Record<Holiday, string> = {
    easter: "🐰",
    halloween: "🎃",
    thanksgiving: "🍗",
    christmas: "🎁",
    "new years eve": "🪩",
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("easter")
    return (
        <div>
            <p>{"Holiday: " + holidayToEmoji[holiday]}</p>

            <Button onClick={()=>{setHoliday(alphabetRecord[holiday])}}>Advance by Alphabet</Button>
            <Button onClick={()=>{setHoliday(orderRecord[holiday])}}>Advance by Year</Button>
        </div>
    );
}
