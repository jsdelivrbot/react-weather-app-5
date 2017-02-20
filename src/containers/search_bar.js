import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index'

class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            search: "",
        }

        this.setSearch = this.setSearch.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }

    setSearch(e) {
        this.setState({
            search: e.target.value
        })
    }

    onFormSubmit(e) {
        e.preventDefault()
      
        this.props.fetchWeather(this.state.search)
        this.setState({ search: "" })
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Get a five-day forecast in your favorite cities"
                    className="form-control" 
                    onInput={this.setSearch} 
                    value={this.state.search} 
                    type="text" />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">
                        Submit
                    </button>
                </span>
            </form>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)
