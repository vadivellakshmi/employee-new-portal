import React,{useEffect,useState} from "react";
import Adminnavbar from "./Adminnavbar";
import axios from "axios"
import {Link} from "react-router-dom";
const Jobtype = () =>{
    const [userValue, setUserValue] = useState([]);

    const getjobtype = () =>{
        axios.get('http://localhost:2000/jobtype/get')
        .then((res) => setUserValue(res.data))
        .catch(err => console.log(err))
    }
    
    const deletejobtype = (id) => {
        axios.delete('http://localhost:2000/jobtype/'+id)
        .then((res) => {console.log(res)
            getjobtype()})
       
        .catch(err => console.log(err))
        
    }
    useEffect(()=> {
    
        getjobtype()
    
    },[])
    
    return(
        <React.Fragment>
        <Adminnavbar/>
    
        <div>
        <h1 className="text-center mt-4">Job Type List</h1>
          <div className="linkuser text-center m-5"><Link  className="adduser" to={'/jobtype/addjobtype'}>Add Emoloyee Job Type</Link></div>
            
        <div className="list">
       
        {userValue.length>0 ? userValue.map((list)=>{
    
            return(
                <div>
                <li className="item"><span className="fw-bold text-capitalize">{list.jobtypename} </span>
                <br/>
               
                <br/>
                <div className="linkuser"><Link classname="edit" to={'/jobtype/edit/'+list._id}>Edit Job type
                </Link>
                </div>
                <br/>
                <div className="linkuser p-2"> <button className="p-2" onClick={()=>deletejobtype(list._id)}>Remove job type</button>
                </div>
                </li>
                
                </div>
            )
        }):
      
        (<h2>no-data</h2>)
    
    }
      </div>
    </div>
    
            </React.Fragment>
        )
    }
  


export default Jobtype;