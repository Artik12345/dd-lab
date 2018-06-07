import React, {Component} from 'react'
import {render} from 'react-dom'
import DataList from './DataList'
import ActiveUser from './ActiveUser'
import SearchInput from './SearchInput'
import '../scss/main.scss'

import users from '../data/users.json'


export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            originalData: users,
            data: users,
            active: null
        }
    }

    updateData = (new_data) => {
        this.setState({data: new_data})
    }

    updateActiveUser = (index) => {
        this.setState({active: index - 1})
    }

    render() {
        return (
            <div className="main">
                <div className=" main__left-content">
                    <SearchInput originalData={this.state.originalData} data={this.state.data  } updateData={this.updateData.bind(this)} />
                    <DataList data={this.state.data} updateActive={this.updateActiveUser.bind(this)} />
                </div>
                <div className=" main__right-content">
                    <ActiveUser activeUser={this.state.originalData[this.state.active]} />
                </div>
            </div>
        )
    }

}