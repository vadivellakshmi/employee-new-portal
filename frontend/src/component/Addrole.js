import React,{useState} from "react";
import Adminnavbar from "./Adminnavbar";
import axios from "axios"
import {Link} from "react-router-dom";
const Addrole = () =>{
   
    const [userdetails, setUserdetails] = useState(
        {
            roleName:''
          
        }
    )

   


    const addrole = (e) =>{

        e.preventDefault()
        axios.post('http://localhost:2000/role/insertrole',userdetails)
        .then((res) => console.log(res.data)
         )
      
        
        
        }
  
  
    return(
        <div>

<Adminnavbar/>
<div className="container mt-4">
                <div className="row">
                    <div className="col">
                        <h1 className=" fw-bold text-primary fst-italic">Add Role</h1>
                        <p>India’s Leading Provider Of Payroll and Compliance Expertise Across Every State. ADP Provides an End-To-End Payroll Outsourcing Solution. Get a Free Price Quote! Local & global payroll. Comprehensive solutions. Timely & accurate. Expert service & support. Save time & costs. Modern payroll tech. Multi-award winning. Global compliance support.</p>
          </div>
          </div>
          </div>






   <div className="container mt-4">
   <div className="row m-auto">
                    <div className="col"> 

                    <form onSubmit ={(e)=>addrole(e)}  > 
      <label>RoleName:</label>  <input type="text" name="roleName" value={userdetails.roleName} onChange={(e)=> setUserdetails({...userdetails, roleName:e.target.value  })}/>
           
         <br></br>
         <br></br>  <button className="btn btn-secondary mt-3" type="submit"> submit</button>
              <Link className="btn btn-secondary ms-4 mt-3"  to='/role' > Back Role List</Link>
    
        </form>
                        </div>
                        </div>
       </div>
         
    
       
                
    
            </div>
        )
    }
    
   


export default Addrole;