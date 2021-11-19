import react, { Component } from 'react';



class states extends Component {
    constructor() {
        super()
        this.state = {
            message: 'welcome user'
        }
    }

    onChange(){
        this.setState({
            message: 'thanks for subscribe'
        })
    }

    render(){
    return (
        <div>
            <div><h1>{this.state.message}</h1></div>
            <div><button onClick={onChange()}>Click me</button></div>
        </div>
    )
    }
}

export default states