import React, {Component} from 'react'
import {connect} from 'react-redux'
import Spark from '../components/spark'


class SearchList extends Component {
    constructor(props) {
        super(props)
    }

    renderWeather(cityData) {
        const name = cityData.city.name
        const temps = cityData.list.map(weather => weather.main.temp)
        const pressure = cityData.list.map(weather => weather.main.pressure)
        const humidity = cityData.list.map(weather => weather.main.humidity)
        return (
            <tr key={name}>
                <td><strong>{name}</strong></td>
                <Spark data={temps} color={"red"} />
                <Spark data={pressure} color={"green"} />
                <Spark data={humidity} color={"blue"} />
            </tr>
        )
    }
    render() {
        if (this.props.weather.length === 0) return <div>Please enter a city</div>
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({ weather }) {
    return { weather }
}

export default connect(mapStateToProps)(SearchList)