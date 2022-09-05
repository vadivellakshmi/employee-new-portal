import React,{useEffect,useState} from "react";
import Adminnavbar from "./Adminnavbar";
import axios from "axios"
import {Link} from "react-router-dom";
const Editidproof = () =>{
    
        const [userdetails, setUserdetails] = useState(
            {
                idproofName:''
            }
        )
    
       
    
        const getSingleidproof = () =>{
    
           let urlString = window.location.href;
            let urlId = urlString.split('/')[5]
            axios.get('http://localhost:2000/idproof/'+urlId)
            .then((res) => {setUserdetails({...userdetails, idproofName:res.data.idproofName})})
            .catch(err => console.log(err))
        }
        const updateidproof = (e) =>{
    
            e.preventDefault()
            let urlString = window.location.href;
            let urlId = urlString.split('/')[5]
              axios.post('http://localhost:2000/idproof/update/'+urlId,userdetails)
              .then((res) => console.log(res.data)
               )
            
            
            }
      
            useEffect(()=>{
    
                getSingleidproof()
        
            },[])
        return(
            <div>
    
    <Adminnavbar/>
    <div className="container mt-4">
                    <div className="row">
                        <div className="col">
                            <h1 className=" fw-bold text-primary fst-italic">Edit Id-Proof</h1>
                            <p>India’s Leading Provider Of Payroll and Compliance Expertise Across Every State. ADP Provides an End-To-End Payroll Outsourcing Solution. Get a Free Price Quote! Local & global payroll. Comprehensive solutions. Timely & accurate. Expert service & support. Save time & costs. Modern payroll tech. Multi-award winning. Global compliance support.</p>
              </div>
              </div>
              </div>
    
    
    
    
    
    
       <div className="container mt-4">
       <div className="row m-auto">
                        <div className="col"> 
    
                        <form onSubmit ={(e)=>updateidproof(e)}  > 
          <label>Id-proof Name :</label>  <input type="text" name="idproofName" value={userdetails.idproofName} onChange={(e)=> setUserdetails({...userdetails, idproofName:e.target.value  })}/>
               
       
          
         
    
              <br></br>  <button className="btn btn-secondary mt-3" type="submit"> submit</button>
              <Link className="btn btn-secondary ms-4 mt-3"  to='/idproof' > Back Id-proof List</Link>
    
        </form>
                        </div>
                        </div>
       </div>
         
    
       
                
    
            </div>
        )
    }

export default Editidproof;