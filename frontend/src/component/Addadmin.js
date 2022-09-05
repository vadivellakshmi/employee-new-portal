import React,{useEffect,useState} from "react";
import Adminnavbar from "./Adminnavbar";
import axios from "axios"
import {Link} from "react-router-dom";
const Addadmin = () =>{

  const [userdetails, setUserdetails] = useState(
    {
      EmployeeId:'',
      name:'',
      gender:'',
      companyname:'',
      dateOfJoining:'',
      Department:'',
      profilePictureURL:'',
      levebalance:'',
      leavetaken:'',
      dateOfBirth:'',
      address: "",
      phoneNo:"",
      salary:'',
      Jobtype:'',
      idProofname:'',
      idProof:'',
      jobrole:'',
      isAdmin:'',
      globellevel:'',
      email:'',
      reporteeId:'',
      projectName:'',
      password:'',
      ConfirmPassword:''


    }
)

const [Proof, setProof] = useState([]);
const [role, setRole] = useState([]);
const [jobmode, setJobmode] = useState([]);
const [project, setProject] = useState([]);

const insertuser = (e) =>{

  e.preventDefault()
    axios.post('http://localhost:2000/user/insertuser',userdetails)
    .then((res) => console.log(res.data)
     )
  
  
  }

  const getrole = () =>{
    axios.get('http://localhost:2000/role/get')
    .then((res) => setRole(res.data))
    .catch(err => console.log(err))
}

const getproof = () =>{
  axios.get('http://localhost:2000/idproof/get')
  .then((res) => setProof(res.data))
  .catch(err => console.log(err))
}

const getjobmode = () =>{
  axios.get('http://localhost:2000/jobtype/get')
  .then((res) => setJobmode(res.data))
  .catch(err => console.log(err))
}

const getproject = () =>{
  axios.get('http://localhost:2000/project/getproject')
  .then((res) => setProject(res.data))
  .catch(err => console.log(err))
}
  useEffect(()=>{

   
    getproof()
    getjobmode()
    getproject()
     getrole()

},[])


  
  
    return(
        <React.Fragment>
           <Adminnavbar/>
           {/* <pre>{JSON.stringify(userdetails)}</pre> */}
        
           <div className="container mt-4">
                <div className="row">
                    <div className="col">
                        <h1 className=" fw-bold text-primary fst-italic">ADD EMPLOYEE</h1>
                        <p>India’s Leading Provider Of Payroll and Compliance Expertise Across Every State. ADP Provides an End-To-End Payroll Outsourcing Solution. Get a Free Price Quote! Local & global payroll. Comprehensive solutions. Timely & accurate. Expert service & support. Save time & costs. Modern payroll tech. Multi-award winning. Global compliance support.</p>
          </div>
          </div>
          </div>
          <div className="container p-2">

            <div className="row">
                <div className="col-md-5">

                <form onSubmit={insertuser} className="m-auto mt-5 ">
        <div className="mb-3 row gap-3 ">
       <input type="text" className="form-control col" placeholder="EmployeeId" name="EmployeeId" value={userdetails.EmployeeId} onChange={(e)=> setUserdetails({...userdetails, EmployeeId:e.target.value  })}  required/>
       </div>
       <div className="mb-3 row gap-3 ">
       <input type="text" className="form-control col" placeholder="EmployeeName" name="name" value={userdetails.name} onChange={(e)=> setUserdetails({...userdetails, name:e.target.value  })}  required/>
       </div>
       <div className="mb-3 row gap-3 ">
       <input type="text" className="form-control col" placeholder="email" name="email" value={userdetails.email} onChange={(e)=> setUserdetails({...userdetails, email:e.target.value  })}  required/>
       </div>
       <div className="mb-3 row gap-3 ">
       <input type="text" className="form-control col" placeholder="gender" name="gender" value={userdetails.gender} onChange={(e)=> setUserdetails({...userdetails, gender:e.target.value  })}  required/>
       </div>
        
       <div className="mb-3 row gap-3 ">
       <input type="text" className="form-control col" placeholder="companyname" name="companyname" value={userdetails.companyname} onChange={(e)=> setUserdetails({...userdetails, companyname:e.target.value  })} required/>
       </div>
     
       <div className="mb-3 row gap-3 ">
       Date-of-Joining:-<input type="Date" className="form-control col" placeholder="date-of-joining" name="dateOfJoining" value={userdetails.dateOfJoining} onChange={(e)=> setUserdetails({...userdetails, dateOfJoining:e.target.value  })} required/>
       </div>
     
       
     
       <div className="mb-3 row gap-3 ">
       <input type="text" className="form-control col" placeholder="Department"  name="department" value={userdetails.Department} onChange={(e)=> setUserdetails({...userdetails, Department:e.target.value  })} required/>
       </div>
     
       <div className="mb-3 row gap-3 ">
       <input type="text" className="form-control col" placeholder="profilePictureURL" name="profilePictureURL" value={userdetails.profilePictureURL} onChange={(e)=> setUserdetails({...userdetails, profilePictureURL:e.target.value  })}  required/>
       </div>
   <div className=" row mb-3 ">

    <select className="form-control" name="jobrole" value={userdetails.jobrole} onChange={(e)=> setUserdetails({...userdetails, jobrole:e.target.value  })} required>
  <option >select the job role</option>
  {
    role.length > 0 &&
    role.map((roles) =>{
      return(
        <option key={roles._id} value={roles.roleName}>{roles.roleName}</option>

        
      )
    })
      
    
  }
  
</select>
  </div>
     

       <div className="mb-3 row gap-3 ">
       <input type="text" className="form-control col" placeholder="globellevelgrade" name="globellevel" value={userdetails.globellevel} onChange={(e)=> setUserdetails({...userdetails, globellevel:e.target.value  })}   required/>
       </div>
     
       <div className="mb-3 row gap-3 ">
       Date-of-Birth:-<input type="Date" className="form-control col" placeholder="date-of-Birth" name="dateOfBirth" value={userdetails.dateOfBirth} onChange={(e)=> setUserdetails({...userdetails, dateOfBirth:e.target.value  })}   required/>
       </div>
     
       <div className="mb-3 row gap-3 ">
       <input type="text" className="form-control col" placeholder="Address" name="address" value={userdetails.address} onChange={(e)=> setUserdetails({...userdetails, address:e.target.value  })}   required/>
       </div>
     
       <div className="row mb-3"  >
       <select class="form-control" name="idProofname" value={userdetails.idProofname} onChange={(e)=> setUserdetails({...userdetails, idProofname:e.target.value  })} >
  <option >select the ID proof</option>
  
    {
      Proof.length > 0 &&
      Proof.map((Proofs) =>{
        return(
          <option key={Proofs._id} value={Proofs.idproofName}>{Proofs.idproofName}</option>
  
          
        )
      })
        
      
    }
   
  
</select>
  </div>
     

       <div className="mb-3 row gap-3 ">
       <input type="text" className="form-control col" placeholder="Enter ID Proof number" name="idProof" value={userdetails.idProof} onChange={(e)=> setUserdetails({...userdetails, idProof:e.target.value  })}   required/>
       </div>
     
       <div className="mb-3 row gap-3 ">
       <input type="number" className="form-control col" placeholder="phoneNo" name="phoneNo" value={userdetails.phoneNo} onChange={(e)=> setUserdetails({...userdetails, phoneNo:e.target.value  })}   required/>
       </div>
     

       <div className=" row mb-3 ">
       <select className="form-control" name="Jobtype" value={userdetails.Jobtype} onChange={(e)=> setUserdetails({...userdetails, Jobtype:e.target.value  })} >
  <option >select the Job type</option>
  {
      jobmode.length > 0 &&
      jobmode.map((jobmodes) =>{
        return(
          <option key={jobmodes._id} value={jobmodes.jobtypename}>{jobmodes.jobtypename}</option>
  
          
        )
      })
        
      
    }
</select>
  </div>
  <div className="mb-3 row gap-3 ">
       <input type="number" className="form-control col" placeholder="salary" name="salary" value={userdetails.salary} onChange={(e)=> setUserdetails({...userdetails, salary:e.target.value  })}   required/>
       </div>
       <div className="mb-3 row gap-3 ">
       <input type="text" className="form-control col" placeholder="ReporteeId" name="reporteeId" value={userdetails.reporteeId} onChange={(e)=> setUserdetails({...userdetails, reporteeId:e.target.value  })}  required/>
       </div>
       <div className="mb-3 row gap-3 ">
       Leave-Balance:<input type="number" className="form-control col" placeholder="LeaveBalance" name="levebalance" value={userdetails.levebalance} onChange={(e)=> setUserdetails({...userdetails, levebalance:e.target.value  })}  required/>Days
       </div>
       <div className="mb-3 row gap-3 ">
       Leave-Taken:<input type="number" className="form-control col" placeholder="LeaveTaken" name="leavetaken" value={userdetails.leavetaken} onChange={(e)=> setUserdetails({...userdetails, leavetaken:e.target.value  })}  required/>Days
       </div>
       <div className=" row mb-3 ">
     
       <select className="form-control " name="projectName" value={userdetails.projectName} onChange={(e)=> setUserdetails({...userdetails, projectName:e.target.value  })} >
  <option >Project Details</option>
 {
      project.length > 0 &&
      project.map((projects) =>{
        return(
          <option key={projects._id} value={projects.projectName}>{projects.projectName}</option>
  
          
        )
      })
        
      
    } 
</select>
  </div>

  <div className="mb-3 row gap-3 ">

  <select className="form-control " name="isAdmin" value={userdetails.isAdmin} onChange={(e)=> setUserdetails({...userdetails, isAdmin:e.target.value  })} required>
  <option >isAdmin</option>
  <option value="true" >true</option>
  <option value="false">false</option>
 
</select>
       {/* <input type="text" className="form-control col" placeholder="isAdmin" name="isAdmin" value={userdetails.isAdmin} onChange={(e)=> setUserdetails({...userdetails, isAdmin:e.target.value  })}  required/> */}
       </div>
        
       <div className="mb-3 row gap-3 ">
       <input type="password" className="form-control col" placeholder="password" name="password" value={userdetails.password} onChange={(e)=> setUserdetails({...userdetails, password:e.target.value  })}  required/>
       </div>
       <div className="mb-3 row gap-3 ">
       <input type="password" className="form-control col" placeholder="confirmpassword" name="ConfirmPassword" value={userdetails.ConfirmPassword} onChange={(e)=> setUserdetails({...userdetails, ConfirmPassword:e.target.value  })}   required/>
       </div>
     
        
       <div className="mb-3 row">
       <button type="submit" class="btn btn-primary w-25 m-auto">Submit</button>
       <Link to={'/employeeDashbord'} className="btn btn-primary w-25 m-auto ">Clear</Link>
       </div>


       </form>
                </div>

              

              
          </div>
          </div>
     
        </React.Fragment>
    )
}
export default Addadmin;
