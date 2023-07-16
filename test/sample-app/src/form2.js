import { useEffect ,useState } from 'react'
const FormDisplay = ({formData}) => {

    const [ emailName , setEmailName ] = useState("")

    //If you need to update state on value change.
     useEffect(()=>{
         setEmailName(formData.username + " : " + formData.email)
     },[formData.username, formData.email])
    
    // //Will called on every form change
    // useEffect(()=>{
    //     setEmailName(formData.username + " : " + formData.email)
    // },[formData])
    
    // // Called when component is mounted(visibled)
    // useEffect(()=>{
    //     console.log("Is called on mount")
    // },[])

 //  useEffect(()=>{
 //   console.log("Is called on everyvalue change")
//})
return <><div>
    <div class="form2">
        <div class="background">
        </div>
        <div class="profile_image">
              <img src ="../images/flu.jpg" alt="profile" class="profile"></img>
        </div>
        <div class="overview">
          <div><b><name> {formData.username}</name></b></div>
            <div class="id"> {formData.email}</div>
        </div>
        <pre>
            "Lamborghini Mercy<br />
            Your she so thirsty<br />
            I"m in the two seat Lambo"
        </pre>
        <div class="hr1"><hr /> </div>
        <div class="icon">
            <div>
                <img src="../images/facebook.png" class="facebook"  alt="facebook"/></div>
            <div>
                <img src="../images/twitter.png" class="twitter"alt="twitter" /></div>
            <div>
                <img src="../images/google.png" class="google"alt="google" /></div>
        </div>
    </div>
</div><div>
        <img src="../images/settings.jpg" alt="settings"class="settings" />
    </div></>   

}
export default  FormDisplay;