import React from "react";

class Appp extends React.Component{
    constructor () {
        super();
        this.state = {
            users:null
        }
    }
    componentDidMount()
    {
        fetch('https://reqres.in/api/users').then((response) => {
            response.json().then((result) => {
                console.log(result.data)
                this.setState({users:result.data})
            })
        })
    }
    render() {
        return (
            <>
                <div>
                    <h1>Fetch Api Data</h1>
                    {
                        this.state.users ? 
                        this.state.users.map((item,i)=>
                        <div><p>{i+1} --- 
                        {item.first_name}
                        {item.last_name}
                        ---
                        {item.email}</p></div>
                        )
                        :
                        null
                    }
                </div>
            </>
        )
    }
}

export default Appp