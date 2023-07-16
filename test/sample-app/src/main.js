import {useState,useEffect} from 'react'
import FormDisplay from './form2'


const Main = () => {
    const [ isSubmitted , setIsSubmitted] = useState(false)
    const [ form , setForm ] = useState({
        company:"",
        username : "",
        email : "",
        firstName : "",
        lastName : "",
        address : "",
        city : "",
        country : "",
        postalCode : "",
        aboutName : "",
        profile:""
    })
    const onChange = (e) =>{
        setForm({
           ...form,
           [e.target.name] : e.target.value
        })
        
    }
     useEffect(()=>{
         setIsSubmitted(false)
       },[form])
  
       const onSubmit = () =>{
          setIsSubmitted(true)
       }
  
    return <div class="main">
        <div class="content">
            
                <div class="form1">
                    <h3>Edit profile</h3>
                    <div class="row">
                        <div class="column">
                            <label><a>company</a></label>
                            <input class="company_input" type="text"name="company" onChange={onChange} value={form.company}  />
                        </div>
                        <div class="column">
                            <label><a>username</a></label>
                            <input class="user_input" type="text"name="username"onChange={onChange} value={form.username}  />
                        </div>
                        <div class="column">
                            <label><a>email</a></label>
                            <input class="email_input" type="text"name="email" value={form.email} onChange={onChange} />
                        </div>
                    </div>
                    <div class="row">
                        <div class="column">
                            <label> <a>First name</a></label>
                            <input class="first_input" type="text"name="firstName" value={form.firstName} onChange={onChange}/>

                        </div>
                        <div class="column">
                            <label><a>Last name</a></label>
                            <input class="first_input" type="text" name="lastName" value={form.lastName}onChange={onChange} />
                        </div>
                    </div><div class="row">
                        <div class="column">
                            <label> <a>Address</a></label>
                            <input class="address_input" type="text"name="address" value={form.address}onChange={onChange}/>
                        </div></div>
                    <div class="row">
                        <div class="column">
                            <label><a>City</a></label>
                            <input class="city_input" type="text" name="city" value={form.city} onChange={onChange}/>
                        </div>
                        <div class="column">
                            <label><a> Country</a></label>
                            <input class="city_input" type="text"name="country" value={form.country}onChange={onChange}/>

                        </div>
                        <div class="column">
                            <label><a> postal code</a></label>
                            <input class="city_input" type="number"name="postalcode" value={form.postalcode} />
                        </div>
                    </div>
                    <div class="column"></div>
                    <label><a>about me</a></label>
                    <textarea class=" about_input"name="aboutname" value={form.aboutname} onChange={onChange}> Lamborghini Mercy,Your she so thirsty,I"m in the two seat Lambo.</textarea>
                    <div  >
                    <input type="file" id="myFile" name="filename"onChange={onChange} value={form.profile}/>
                        <input class="update"  onClick={onSubmit} type="submit" value="Update profile" />
                    </div>
                </div>
            

           
        </div>
        
      {isSubmitted &&  <FormDisplay formData={form} />}
    </div>
}
export default Main;