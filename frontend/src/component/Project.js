import React,{useEffect,useState} from "react";
import Adminnavbar from "./Adminnavbar";
import axios from "axios"
import {Link} from "react-router-dom";
const Project = () => {
   

        const [userValue, setUserValue] = useState([]);

const getproject = () =>{
    axios.get('http://localhost:2000/project/getproject')
    .then((res) => setUserValue(res.data))
    .catch(err => console.log(err))
}

const deleteproject = (id) => {
    axios.delete('http://localhost:2000/project/'+id)
    .then((res) => {console.log(res)
        getproject()})
   
    .catch(err => console.log(err))
    
}
useEffect(()=> {

getproject()

},[])

return(
    <React.Fragment>
    <Adminnavbar/>

    <div>
    <h1 className="text-center mt-4">Project List</h1>
      <div className="linkuser text-center m-5"><Link  className="adduser" to={'/project/addproject'}>Addproject</Link></div>
        
    <div className="list">
   
    {userValue.length>0 ? userValue.map((list)=>{

        return(
            <div>
            <li className="item"><span className="fw-bold text-capitalize">{list.projectName} </span>
            <br/>
            <span className="fst-italic text-capitalize">{list.projectdetails}   </span><br/> 
            <span className="fw-lighter text-capitalize">{list.projectduration} </span>
            <br/>
            <div className="linkuser"><Link classname="edit" to={'/project/edit/'+list._id}>Editproject
            </Link>
            </div>
            <br/>
            <div className="linkuser p-2"> <button className="p-2" onClick={()=>deleteproject(list._id)}>Remove project</button>
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
export default Project;
