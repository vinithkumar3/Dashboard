import { useNavigate } from 'react-router-dom';
import "./oddo_style.css"
import axios from 'axios';
import { useEffect,useState } from 'react';
const LogIn = () => {
    const navigate = useNavigate();
    const [ userName , setUserName ] = useState("");
    const [ password , setPassword ] = useState("");
    const onSubmit = () =>{
        axios.post("https://dummyjson.com/auth/login",{
            username : userName, //kminchelle
            password               //0lelplR
        }).then(res => {
            navigate("/navigation")
        }).catch(err => {
            alert("Not a valid credentials")
        })
    }
    function yesAction(){
        console.log ("yes");
    }
     function noAction(){
    console.log ("no")
     }
    return <div class="body">
        <div class="form">
            <h1>oddo</h1>
            <p>Login Here</p>



            <div class="io">
                <br /><input type="email" id="email" name="email" value={userName} onChange={(e) =>setUserName(e.target.value)}  placeholder="Email Address" />
                <img src="../images/msg.png" class="em" />
                <br />
            </div>
            <div class="in">
                <br /><input type="text" id="number" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <img src="../images/password.png" class="ps" /></div><br />
            <div >
                <input type="checkbox" /><label for="box"> I agree to terms of service</label><br />
            </div>

            <br /> <input 
            
                id="registor" onClick={onSubmit}  type="submit" value="Signin" /><br />

            <br /><div class="line"><hr />
                <div class="lo">Or Login within</div>
            </div>

            <br /> <input id="facebook" type="submit" value="Facebook" />
            <input id="twitter" type="submit" value="twitter" />
            <input id="google" type="submit" value="Google" />
            <p>Already a member?Login here </p>
            <button onClick="yesAction()">yes</button> 
                                   <button onClick="noAction()">No</button> 

        </div>
    </div>

}



export default LogIn;