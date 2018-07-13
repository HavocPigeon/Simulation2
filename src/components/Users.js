import React, {Component} from 'react';
import axios from 'axios';

export default class Users extends Component {
    constructor(){
        super()
        this.state = {
            lastInput: '',
            users: [],
            inputTwo: ''
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
    addColumn = () => {
        axios.get('/api/addinfo').then(res => {
            this.setState({users: res.data})
        })
    }
    updateLastInput = (input) => {
        this.setState({
            lastInput: input
        })
    }
    addName = () => {
        axios.post('/api/addlastname', {lastname: this.state.lastInput}).then((res => {
            this.setState({
                users: res.data})
        }))
    }
    changeInput2 = (input) => {
        this.setState({
            inputwo: input
        })
    }
    updateColor = () => {
        axios.put('/api/changecolor', {color: this.state.inputTwo}).then((res => {
            console.log(res)
            this.setState({
                users: res.data
            })
        }))
    }
    render(){
        const showUserInfo = this.state.users.map((e,i) => {return <div key={i}>{e.name} {e.color} {e.age}</div>})
        return (
            <div><h2>Users</h2>
            <h4> Relevant Info </h4>
            {showUserInfo}
            <div></div>
            <button onClick={() => this.showAge()}>Show all info</button>
            <h4> Add User Info </h4>
            <button onClick={() => this.addColumn()}>Add Last Name Field</button>
            <input onChange={e => this.updateLastInput(e.target.value)} placeholder='Last Name To Be Added'></input>
            <button onClick={() => this.addName()}>Add Name Info</button>
            <div>
            <h4> Edit User Info </h4>
            <input onChange={e => this.changeInput2(e.target.value)} placeholder='Edit color'></input>
            <button onClick={() => this.updateColor(this.state.users.map(e => e.id))}>Edit User Color</button>
            </div>
            </div>
        )
    }
}