import React ,{useState,useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios"
import { useNavigate} from "react-router-dom";
import {setAuthentication,isAuthenticated} from "./Auth"





const Login = () =>{



    const [error, setError] = useState("")
  
    let navigate = useNavigate();
    const [userdetails, setUserdetails] = useState(
        {
            EmployeeId:'',
            password:'',
        
        }
    )
   
        useEffect(()=>{

          if(isAuthenticated() && isAuthenticated().isAdmin === true){
            navigate ('/admindashbord/'+isAuthenticated()._id)
          }
          else if(isAuthenticated() && isAuthenticated().isAdmin === false){
            navigate ('/userdashboard/'+isAuthenticated()._id)
          }


        },[navigate])

    const handlesubmit = (e) =>{

        e.preventDefault()

    
        axios.post("http://localhost:2000/login", userdetails)

      
       
        .then((res) => {setAuthentication(res.data.token, res.data.user)
        if(isAuthenticated() && isAuthenticated().isAdmin === true){
          navigate ('/admindashbord/'+isAuthenticated()._id)
        }
        else{
          navigate ('/userdashboard/'+isAuthenticated()._id)
        }
        
        })
        .catch(err => setError("Invalid Employeeid or Password" , err))
        
  
       
      

       
        

       
      }
      

   



    return(
        <React.Fragment>
            <Navbar/>
            <div className="container mt-5">
<div className="d-flex flex-column justify-content-center login">
<div className="card mb-3 " >
  <div className="row g-0 ">
    <div className="col-md-4">
      <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8 ">
      <div className="card-body ">
        <h5 className="card-title text-center text-success fs-2 mb-3">EMPLOYEE PORTAL LOGIN</h5> 

        <form className="m-auto mt-5" onSubmit={handlesubmit}>
        <div className="mb-3 row">
       <label className="col-md-4">EmployeeId:</label><input type="text" className="col-md-4" placeholder="A001" name="EmployeeId" value={userdetails.EmployeeId} onChange={(e)=>{setUserdetails({...userdetails, EmployeeId:e.target.value})}} required/>
       </div>
       
      
       
       <div className="mb-3 row">
       <label className="col-md-4">password:</label><input type="password" className="col-md-4" placeholder="password"  name="password" value={userdetails.password} onChange={(e)=>{setUserdetails({...userdetails, password:e.target.value})}} required/>
       </div>
       <h1>{error}</h1>
       <div className="mb-3 row">
       <button type="submit" class="btn btn-primary w-25 m-auto">Submit</button>
       </div>
        
        </form>
        

{/* <p className="card-text "><Link to={'/forgotpassword/id'} className="text-muted">FORGOT PASSWORD</Link></p>  */}
        
      </div>
    </div>
  </div>
  </div>
  </div>
  </div>





          
        </React.Fragment>
    )
}
export default Login;
