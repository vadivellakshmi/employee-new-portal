import React,{useEffect,useState} from "react";
import Adminnavbar from "./Adminnavbar";
import axios from "axios"
import {Link} from "react-router-dom";
const Editproject = () =>{

    const [userdetails, setUserdetails] = useState(
        {
            projectName:'',
            projectdetails:'',
            projectduration:''
        }
    )

   

    const getSingleproject = () =>{

       let urlString = window.location.href;
        let urlId = urlString.split('/')[5]
        axios.get('http://localhost:2000/project/'+urlId)
        .then((res) => {setUserdetails({...userdetails, projectName:res.data.projectName, projectdetails:res.data.projectdetails, projectduration:res.data.projectduration})})
        .catch(err => console.log(err))
    }
    const updateproject = (e) =>{

        e.preventDefault()
        let urlString = window.location.href;
        let urlId = urlString.split('/')[5]
          axios.post('http://localhost:2000/project/update/'+urlId,userdetails)
          .then((res) => console.log(res.data)
           )
        
        
        }
  
        useEffect(()=>{

            getSingleproject()
    
        },[])
    return(
        <div>

<Adminnavbar/>
<div className="container mt-4">
                <div className="row">
                    <div className="col">
                        <h1 className=" fw-bold text-primary fst-italic">Edit Project</h1>
                        <p>India’s Leading Provider Of Payroll and Compliance Expertise Across Every State. ADP Provides an End-To-End Payroll Outsourcing Solution. Get a Free Price Quote! Local & global payroll. Comprehensive solutions. Timely & accurate. Expert service & support. Save time & costs. Modern payroll tech. Multi-award winning. Global compliance support.</p>
          </div>
          </div>
          </div>






   <div className="container mt-4">
   <div className="row m-auto">
                    <div className="col"> 

                    <form onSubmit ={(e)=>updateproject(e)}  > 
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

export default Editproject;