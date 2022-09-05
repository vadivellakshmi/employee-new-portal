import React,{useState} from "react";
import Adminnavbar from "./Adminnavbar";
import axios from "axios"
import {Link} from "react-router-dom";
const Addproject = () =>{

   

        const [userdetails, setUserdetails] = useState(
            {
                projectName:'',
                projectdetails:'',
                projectduration:''
            }
        )
    
       
    
    
        const addproject = (e) =>{
    
            e.preventDefault()
            axios.post('http://localhost:2000/project/insertproject',userdetails)
            .then((res) => console.log(res.data)
             )
          
            
            
            }
      
      
        return(
            <div>
    
    <Adminnavbar/>
    <div className="container mt-4">
                    <div className="row">
                        <div className="col">
                            <h1 className=" fw-bold text-primary fst-italic">Add Project</h1>
                            <p>India’s Leading Provider Of Payroll and Compliance Expertise Across Every State. ADP Provides an End-To-End Payroll Outsourcing Solution. Get a Free Price Quote! Local & global payroll. Comprehensive solutions. Timely & accurate. Expert service & support. Save time & costs. Modern payroll tech. Multi-award winning. Global compliance support.</p>
              </div>
              </div>
              </div>
    
    
    
    
    
    
       <div className="container mt-4">
       <div className="row m-auto">
                        <div className="col"> 
    
                        <form onSubmit ={(e)=>addproject(e)}  > 
          <label>projectName:</label>  <input type="text" name="projectName" value={userdetails.projectName} onChange={(e)=> setUserdetails({...userdetails, projectName:e.target.value  })}/>
               
             <br></br>
          
          <label>projectdetails:</label>  <input type="text" name="projectdetails" value={userdetails.projectdetails} onChange={(e)=> setUserdetails({...userdetails, projectdetails:e.target.value  })}/>
          <br></br> 
          <label>projectduration:</label>  <input type="text" name="projectduration" value={userdetails.projectduration} onChange={(e)=> setUserdetails({...userdetails, projectduration:e.target.value  })}/>
    
              <br></br>  <button className="btn btn-secondary mt-3" type="submit"> submit</button>
              <Link className="btn btn-secondary ms-4 mt-3"  to='/project' > Back Project List</Link>
    
        </form>
                        </div>
                        </div>
       </div>
         
    
       
                
    
            </div>
        )
    }
    
   

export default Addproject;