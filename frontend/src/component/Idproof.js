import React,{useEffect,useState} from "react";
import Adminnavbar from "./Adminnavbar";
import axios from "axios"
import {Link} from "react-router-dom";
const Idproof = () =>{
    const [userValue, setUserValue] = useState([]);

    const getidproof = () =>{
        axios.get('http://localhost:2000/idproof/get')
        .then((res) => setUserValue(res.data))
        .catch(err => console.log(err))
    }
    
    const deleteidproof = (id) => {
        axios.delete('http://localhost:2000/idproof/'+id)
        .then((res) => {console.log(res)
            getidproof()})
       
        .catch(err => console.log(err))
        
    }
    useEffect(()=> {
    
        getidproof()
    
    },[])
    
    return(
        <React.Fragment>
        <Adminnavbar/>
    
        <div>
        <h1 className="text-center mt-4">ID Proof List</h1>
          <div className="linkuser text-center m-5"><Link  className="adduser" to={'/idproof/addidproof'}>Add Emoloyee Id-Proof</Link></div>
            
        <div className="list">
       
        {userValue.length>0 ? userValue.map((list)=>{
    
            return(
                <div>
                <li className="item"><span className="fw-bold text-capitalize">{list.idproofName} </span>
                <br/>
               
                <br/>
                <div className="linkuser"><Link classname="edit" to={'/idproof/edit/'+list._id}>Edit Id-Proof
                </Link>
                </div>
                <br/>
                <div className="linkuser p-2"> <button className="p-2" onClick={()=>deleteidproof(list._id)}>Remove Id-Proof</button>
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
  

export default Idproof;