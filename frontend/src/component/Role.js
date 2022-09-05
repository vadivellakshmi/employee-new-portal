import React,{useEffect,useState} from "react";
import Adminnavbar from "./Adminnavbar";
import axios from "axios"
import {Link} from "react-router-dom";
const Role = () =>{
  
    const [userValue, setUserValue] = useState([]);

    const getrole = () =>{
        axios.get('http://localhost:2000/role/get')
        .then((res) => setUserValue(res.data))
        .catch(err => console.log(err))
    }
    
    const deleterole = (id) => {
        axios.delete('http://localhost:2000/role/'+id)
        .then((res) => {console.log(res)
            getrole()})
       
        .catch(err => console.log(err))
        
    }
    useEffect(()=> {
    
    getrole()
    
    },[])
    
    return(
        <React.Fragment>
        <Adminnavbar/>
    
        <div>
        <h1 className="text-center mt-4">Role List</h1>
          <div className="linkuser text-center m-5"><Link  className="adduser" to={'/role/addrole'}>Add Emoloyee Role</Link></div>
            
        <div className="list">
       
        {userValue.length>0 ? userValue.map((list)=>{
    
            return(
                <div>
                <li className="item"><span className="fw-bold text-capitalize">{list.roleName} </span>
                <br/>
               
                <br/>
                <div className="linkuser"><Link classname="edit" to={'/role/edit/'+list._id}>Editrole
                </Link>
                </div>
                <br/>
                <div className="linkuser p-2"> <button className="p-2" onClick={()=>deleterole(list._id)}>Remove Role</button>
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
  
    
export default Role;