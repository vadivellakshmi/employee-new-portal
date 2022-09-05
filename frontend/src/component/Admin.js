import React, { useEffect, useState } from "react";
import Adminnavbar from "./Adminnavbar";
import axios from "axios"
import { Link } from "react-router-dom";
const Admin = () =>{
    const [userValue, setUserValue] = useState([]);
    const getuser = () =>{
        axios.get('http://localhost:2000/user/getuser')
        .then((res) => setUserValue(res.data))
        .catch(err => console.log(err))
    }

    useEffect(()=>{

        getuser()

    },[])

    const deleteUser = (id) =>{

        axios.delete('http://localhost:2000/user/'+id)
        .then((res) => {console.log(res)
            getuser()})
       
        .catch(err => console.log(err))
    }

    return(
        <React.Fragment>
            <Adminnavbar/>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="fw-bold text-primary fst-italic">EMPLOYEE PORTAL</h1>
                        <p>India’s Leading Provider Of Payroll and Compliance Expertise Across Every State. ADP Provides an End-To-End Payroll Outsourcing Solution. Get a Free Price Quote! Local & global payroll. Comprehensive solutions. Timely & accurate. Expert service & support. Save time & costs. Modern payroll tech. Multi-award winning. Global compliance support.</p>
                       <Link to='/Adduser' className="btn btn-primary"> ADD EMPLOYEE  </Link>
                        <table class="table table-success table-striped mt-5">
                        <thead>
                        <tr>
                        <th scope="col">EMP ID</th>
                        <th scope="col">EMP NAME</th>
                         <th scope="col">EMAIL</th>
                         <th scope="col">GENDER</th>
                         <th scope="col">PHONE NUMBER</th>
                         <th scope="col">DESIGNATION</th>
                         <th scope="col">DEPARTMENT</th>
                         <th scope="col">EMP. UPDATE</th>
                         
                        </tr>
                        </thead>
                        <tbody>
                            {userValue.length>0? userValue.map((user) =>{

                                return(
                                    <tr key={user._id}>
                                    <th scope="row">{user.EmployeeId}</th>
                                  <td>{user.name}</td>
                                  <td>{user.email}</td>
                                  <td>{user.gender}</td>
                                  <td>{user.phoneNo}</td>
                                  <td>{user.jobrole}</td>
                                  <td>{user.Department}</td>
                                  <td>
                                  <Link to={'/view/'+user._id} ><i class="fa-solid fa-eye-slash"></i></Link>&nbsp;&nbsp;
                                  <Link to={'/edit/'+user._id}> <i class="fa-solid fa-user-pen"></i></Link>&nbsp;&nbsp;
                                  <button className= "btn btn-link" onClick={()=>deleteUser(user._id)}> <i class="fa-solid fa-trash"></i></button>

                                  </td>
                                
                                 </tr>    
                                )
                            }): (<h2>no-data</h2>)}
                       
                       </tbody>
                           
                            
                        </table>
                    </div>

                </div>
              </div>  
           
                
          
        </React.Fragment>
    )
}
export default Admin;
