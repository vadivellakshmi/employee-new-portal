import React,{useState} from "react";
import Adminnavbar from "./Adminnavbar";
import axios from "axios"
import {Link} from "react-router-dom";
const Addjobtype = () =>{
    const [userdetails, setUserdetails] = useState(
        {
            jobtypename:''
          
        }
    )

   


    const addjobtype = (e) =>{

        e.preventDefault()
        axios.post('http://localhost:2000/jobtype/insertjobtype',userdetails)
        .then((res) => console.log(res.data)
         )
      
        
        
        }
  
  
    return(
        <div>

<Adminnavbar/>
<div className="container mt-4">
                <div className="row">
                    <div className="col">
                        <h1 className=" fw-bold text-primary fst-italic">Add Job Type</h1>
                        <p>India’s Leading Provider Of Payroll and Compliance Expertise Across Every State. ADP Provides an End-To-End Payroll Outsourcing Solution. Get a Free Price Quote! Local & global payroll. Comprehensive solutions. Timely & accurate. Expert service & support. Save time & costs. Modern payroll tech. Multi-award winning. Global compliance support.</p>
          </div>
          </div>
          </div>






   <div className="container mt-4">
   <div className="row m-auto">
                    <div className="col"> 

                    <form onSubmit ={(e)=>addjobtype(e)}  > 
      <label>Id-Proof Name:</label>  <input type="text" name="idproofName" value={userdetails.jobtypename} onChange={(e)=> setUserdetails({...userdetails, jobtypename:e.target.value  })}/>
           
         <br></br>
         <br></br>  <button className="btn btn-secondary mt-3" type="submit"> submit</button>
              <Link className="btn btn-secondary ms-4 mt-3"  to='/role' > Back Jobtype List</Link>
    
        </form>
                        </div>
                        </div>
       </div>
         
    
       
                
    
            </div>
        )
    }
    

export default Addjobtype;