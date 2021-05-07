import React from "react";
import { useHistory } from "react-router-dom";
import { Pie } from '@ant-design/charts';
import db from "../data/pageone.json";
import "../style/pagetwo.css"
import PageOne from "./PageOne";

const PageTwo = () => {
    let history = useHistory();
    console.log(history);
    const handle = () => {
        history.push('/pageone')
    }
    const data = [
        {
            country: 'Asia',
            year: '1750',
            value: 502
        },
        {
            country: 'Asia',
            year: '1800',
            value: 635
        },
        {
            country: 'Europe',
            year: '1750',
            value: 163
        },
        {
            country: 'Europe',
            year: '1800',
            value: 203
        }
    ];
    const config = {
        data,
        meta: {
            country: {
                alias: '国家',
                range: [
                    0,
                    1
                ]
            },
            value: {
                alias: '数量',
                formatter: v => {
                    return `${v}个`;
                }
            }
        },
        angleField: 'value',
        colorField: 'country'
    };
    return (
        <div>
            <div className="page_header">User is on page 2</div>
            <button type="button" onClick={handle}>Go to page 1</button>
            <Pie {...config} />
        </div >
    )
}
export default PageTwo;