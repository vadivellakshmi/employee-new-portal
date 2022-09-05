import React ,{useEffect, useState }from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import axios from "axios"
const ForgotPassword = () =>{

  const [userdetails, setUserdetails] = useState(
    {
      EmployeeId:'',
      password:"",
      ConfirmPassword:""

     
    }
)



const getSingleUser = () =>{

   let urlString = window.location.href;
    let urlId = urlString.split('/')[3]
    axios.get('http://localhost:2000/user/'+urlId)
    .then((res) => {setUserdetails({...userdetails, EmployeeId:res.data.EmployeeId, password:res.data.password, ConfirmPassword:res.data.ConfirmPassword})})
    .catch(err => console.log(err))
}
const updateUser = (e) =>{

    e.preventDefault()
    let urlString = window.location.href;
    let urlId = urlString.split('/')[3]
      axios.post('http://localhost:2000/user/update/'+urlId,userdetails)
      .then((res) => console.log(res.data)
       )
    
    
    }

    useEffect(()=>{

        getSingleUser()

    },[])
    return(
        <React.Fragment>
           <Navbar/>
           <div className="container">
<div className="d-flex flex-column justify-content-center login">
<div className="card mb-3 " >
  <div className="row g-0 align-items-center">
    <div className="col-md-4">
      <img src="https://media.istockphoto.com/photos/forgot-your-password-picture-id877878274?k=20&m=877878274&s=612x612&w=0&h=7aHagujuH86iMNxBTr5bCLTXfpwbL-l5mTF_EKg080g=" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8 ">
      <div className="card-body ">
        <h5 className="card-title text-center text-success fs-2 mb-3">CHANGE PASSOWORD</h5>
        <form onSubmit ={(e)=>updateUser(e)} className="m-auto mt-5">
        <div className="mb-3 row">
       <label className="col-md-4">EmployeeId:</label><input type="text" className="col-md-4" placeholder="A0001" name="EmployeeId" value={userdetails.EmployeeId} onChange={(e)=> setUserdetails({...userdetails, EmployeeId:e.target.value})} required/>
       </div>

       <div className="mb-3 row">
       <label className="col-md-4">password:</label><input type="password" className="col-md-4" placeholder="password" name="password" value={userdetails.password} onChange={(e)=> setUserdetails({...userdetails, password:e.target.value})} required/>
       </div>
       
       <div className="mb-3 row">
       <label className="col-md-4">ConfirmPassword:</label><input type="password" className="col-md-4" placeholder="confirmPassword" ame="password" value={userdetails.password} onChange={(e)=> setUserdetails({...userdetails, confirmpassword:e.target.value})}required/>
       </div>

       <div className="mb-3 row">
       <button type="submit" class="btn btn-primary w-25 m-auto">Submit</button>
       </div>
        
       </form>
        <p className="card-text "><Link to={'/'} className="text-muted">EMPLOYEE LOGIN</Link></p>
      </div>
    </div>
  </div>
  </div>
</div>




</div> 



          
        </React.Fragment>
    )
}
export default ForgotPassword;
