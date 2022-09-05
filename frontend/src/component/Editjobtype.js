import React,{useEffect,useState} from "react";
import Adminnavbar from "./Adminnavbar";
import axios from "axios"
import {Link} from "react-router-dom";
const Editjobtype = () =>{
    const [userdetails, setUserdetails] = useState(
        {
            jobtypename:''
        }
    )

   

    const getSinglejobtype = () =>{

       let urlString = window.location.href;
        let urlId = urlString.split('/')[5]
        axios.get('http://localhost:2000/jobtype/'+urlId)
        .then((res) => {setUserdetails({...userdetails, jobtypename:res.data.jobtypename})})
        .catch(err => console.log(err))
    }
    const updatejobtype = (e) =>{

        e.preventDefault()
        let urlString = window.location.href;
        let urlId = urlString.split('/')[5]
          axios.post('http://localhost:2000/jobtype/update/'+urlId,userdetails)
          .then((res) => console.log(res.data)
           )
        
        
        }
  
        useEffect(()=>{

            getSinglejobtype()
    
        },[])
    return(
        <div>

<Adminnavbar/>
<div className="container mt-4">
                <div className="row">
                    <div className="col">
                        <h1 className=" fw-bold text-primary fst-italic">Edit Job Type</h1>
                        <p>India’s Leading Provider Of Payroll and Compliance Expertise Across Every State. ADP Provides an End-To-End Payroll Outsourcing Solution. Get a Free Price Quote! Local & global payroll. Comprehensive solutions. Timely & accurate. Expert service & support. Save time & costs. Modern payroll tech. Multi-award winning. Global compliance support.</p>
          </div>
          </div>
          </div>






   <div className="container mt-4">
   <div className="row m-auto">
                    <div className="col"> 

                    <form onSubmit ={(e)=>updatejobtype(e)}  > 
      <label>Job Type Name :</label>  <input type="text" name="jobtypename" value={userdetails.jobtypename} onChange={(e)=> setUserdetails({...userdetails, jobtypename:e.target.value  })}/>
           
   
      
     

          <br></br>  <button className="btn btn-secondary mt-3" type="submit"> submit</button>
          <Link className="btn btn-secondary ms-4 mt-3"  to='/idproof' > Back Job Type List</Link>

    </form>
                    </div>
                    </div>
   </div>
     

   
            

        </div>
    )
}

export default Editjobtype;