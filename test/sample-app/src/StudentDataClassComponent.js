import React from "react";


class StudentDataClassComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username : "",
            password : ""
        }
    }
    componentDidMount(){
        console.log("IS component mounted.")
        // Can be called to use any intial data API.
    }
    componentWillUnmount(){
        console.log("Component is unmounted")
    } 
    
    componentDidUpdate(prevProps, prevState){
        console.log("IS component updated.",prevProps, prevState)

        if(prevState.username !== this.state.username){
            console.log("Called only if username is updated")
        } 
    }

    static getDerivedStateFromProps(props, state){ 
      return {
        content : "This is Password : " + state.password
      }
    }
    onChangeUsername = (e) => {
        this.setState({
            username : e.target.value
        })
    }

    onChangePassword = (e) =>{
       this.setState({
           password : e.target.value
       })
    }
    
    render() {
        console.log(this.state)
        return <div class="main">
            <h2 class="heading">Login</h2>
            <div class="inputusername">
                <label>UserName</label><br />
                <input  id="username" value={this.state.username} onChange={this.onChangeUsername} class="input-field" />
            </div>
            <div class="inputusername">
                <label>Password</label><br />
                <input  id="password" value={this.state.password} onChange={this.onChangePassword} class="input-field" />
            </div>
            <div class="pass">Forget Password ?</div>
            <button class="btn" >Submit</button>
        </div>
    }
}

export default StudentDataClassComponent;