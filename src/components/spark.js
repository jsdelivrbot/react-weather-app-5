import React, { Component } from 'react'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';


function getAvg(data) {
    return (data.reduce((acc, temp) => { return acc + temp}, 0) / data.length).toFixed()
}

export default (props) => {

    return (
        <td>
            <div>
                <Sparklines height={120} width={180} data={props.data}>
                    <SparklinesLine color={props.color} />
                    <SparklinesReferenceLine type="avg" />
                </Sparklines>
                <div>{getAvg(props.data)}</div>
            </div>
        </td>
    )

}