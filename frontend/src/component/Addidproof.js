import React,{useState} from "react";
import Adminnavbar from "./Adminnavbar";
import axios from "axios"
import {Link} from "react-router-dom";
const Addidproof = () =>{
    const [userdetails, setUserdetails] = useState(
        {
            idproofName:''
          
        }
    )

   


    const addidproof = (e) =>{

        e.preventDefault()
        axios.post('http://localhost:2000/idproof/insertidproof',userdetails)
        .then((res) => console.log(res.data)
         )
      
        
        
        }
  
  
    return(
        <div>

<Adminnavbar/>
<div className="container mt-4">
                <div className="row">
                    <div className="col">
                        <h1 className=" fw-bold text-primary fst-italic">Add Id-Proof</h1>
                        <p>India’s Leading Provider Of Payroll and Compliance Expertise Across Every State. ADP Provides an End-To-End Payroll Outsourcing Solution. Get a Free Price Quote! Local & global payroll. Comprehensive solutions. Timely & accurate. Expert service & support. Save time & costs. Modern payroll tech. Multi-award winning. Global compliance support.</p>
          </div>
          </div>
          </div>






   <div className="container mt-4">
   <div className="row m-auto">
                    <div className="col"> 

                    <form onSubmit ={(e)=>addidproof(e)}  > 
      <label>Id-Proof Name:</label>  <input type="text" name="idproofName" value={userdetails.idproofName} onChange={(e)=> setUserdetails({...userdetails, idproofName:e.target.value  })}/>
           
         <br></br>
         <br></br>  <button className="btn btn-secondary mt-3" type="submit"> submit</button>
              <Link className="btn btn-secondary ms-4 mt-3"  to='/role' > Back id-proof List</Link>
    
        </form>
                        </div>
                        </div>
       </div>
         
    
       
                
    
            </div>
        )
    }
    
   

export default Addidproof;