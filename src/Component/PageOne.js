import React from "react";
import { useHistory } from "react-router-dom";
import { Bootstrap } from 'bootstrap/dist/css/bootstrap.min.css';
import db from "../data/pageone.json";
import { Table } from "react-bootstrap";
import "../style/pageone.css";
const PageOne = () => {
    let history = useHistory();
    console.log(history);
    const handle = () => {
        history.push('/')
    }

    const table_header = [
        {
            "id": "ID",
            "name": "NAME",
            "address": "ADDRESS",
            "mobile": "MOBILE NO."
        }
    ]
    return (
        <div>
            <div className="page_header">User is on page 1</div>
            <button type="button" onClick={handle}> Go to page 2</button>

            {table_header.map((e) =>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>{e.id}</th>
                            <th>{e.name}</th>
                            <th>{e.address}</th>
                            <th>{e.mobile}</th>
                        </tr>
                    </thead>
                    {db.map((e) =>
                        <tbody>
                            <tr>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.address}</td>
                                <td>{e.mobile}</td>
                            </tr>
                        </tbody>
                    )}
                </Table>
            )}
        </div >
    )
}
export default PageOne;