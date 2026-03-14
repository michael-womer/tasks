import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [studentName, setStudentName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);


    return (
        <div>
            <h3>Edit Mode</h3>

                {editMode ?
                    <Form.Group controlId="changeStateForm">
                        <Form.Control
                            value={studentName}
                            onChange={(event) => {
                                setStudentName(event.target.value);
                            }}
                        ></Form.Control>
                        <Form.Check
                            type="checkbox"
                            label="Is a student?"
                            id="student"
                            checked={isStudent}
                            onChange={(event) => {
                                setIsStudent(event.target.checked);
                            }}
                        ></Form.Check>
                    </Form.Group>
                :   <p>{studentName + " is " + (isStudent ? "" : "not") + " a student."}</p>
                }

            <Form.Group controlId="editModeForm">
                <Form.Check
                    type="switch"
                    label="Edit Mode"
                    checked={editMode}
                    onChange={(event) => {
                        setEditMode(event.target.checked);
                    }}
                ></Form.Check>
            </Form.Group>
        </div>
    );
}
