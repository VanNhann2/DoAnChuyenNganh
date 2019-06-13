import React, { Component } from 'react';
import './search.css'
import { connect } from 'react-redux'
import { actSearch } from '../../../../actions/index'

class Search extends Component {

    constructor(props) {
        super(props)
        this.state = {
            keywork: ''
        }
    }

    onHandleChange = (even) => {
        this.setState({
            keywork: even.target.value
        })
    }

    render() {
        return (
            <div>
                <form className="form-actsearch">
                    <input className="me-input" type="text" placeholder="Search" aria-label="Search" value={this.state.keywork} onChange={this.onHandleChange} />
                    <button className="me-button" type="button" onClick={this.onSearch}>Search</button>
                </form>

            </div>
        );
    }

    onSearch = () => {
        this.props.onSearch(this.state.keywork) //dishpatch actSearch
    }
}


const mapDispatchToProps = (dispatch, props) => {
    return {
        onSearch: (keywork) => {
            dispatch(actSearch(keywork))
        },
    }
}
export default connect(null, mapDispatchToProps)(Search);