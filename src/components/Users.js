import React, {Component} from 'react';
import axios from 'axios';

export default class Users extends Component {
    constructor(){
        super()
        this.state = {
            userInput: '',
            users: [],
        }
    }
    componentDidMount(){
    axios.get('/api/users').then(res => {
        this.setState({users: res.data})
    })
}
    showAge = () => {
        axios.get('/api/getage').then(res => {
            this.setState({users: res.data})
    })
}
    // addColumn = () => {
    //     axios.get('/api/addinfo').then(res => {
    //         this.setState({users: res.data})
    //     })
    // }
    render(){
        const showUserInfo = this.state.users.map((e,i) => {return <div key={i}>{e.name} {e.color} {e.age}</div>})
        return (
            <div><h2>Users</h2>
            <h4> Relevant Info </h4>
            {showUserInfo}
            <div></div>
            <button onClick={() => this.showAge()}>Show all info</button>
            <h4> Edit User Info </h4>
            <button onClick={() => this.addColumn()}>Add</button>
            </div>
        )
    }
}