import React,{useEffect , useState} from "react";
import Adminnavbar from "./Adminnavbar";
import axios from "axios"
import {Link} from "react-router-dom";
const Viewadmin = () =>{

    const [userdetails, setUserdetails] = useState(
        {
            EmployeeId:'',
            name:'',
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
          

        }
    )
    const getSingleUser = () =>{

        let urlString = window.location.href;
         let urlId = urlString.split('/')[4]
         axios.get('http://localhost:2000/user/'+urlId)
         .then((res) => setUserdetails({...userdetails,  
            EmployeeId : res.data.EmployeeId, 
            name:res.data.name,
            gender:res.data.gender,
            companyname:res.data.companyname,
            dateOfJoining:res.data.dateOfJoining,
            Department:res.data.Department,
            profilePictureURL:res.data.profilePictureURL,
            levebalance:res.data.levebalance,
            leavetaken:res.data.leavetaken,
            dateOfBirth:res.data.dateOfBirth,
            address: res.data.address,
            phoneNo:res.data.phoneNo,
            salary:res.data.salary,
            Jobtype:res.data.Jobtype,
            idProofname:res.data.idProofname,
            idProof:res.data.idProof,
            jobrole:res.data.jobrole,
            isAdmin:res.data.isAdmin,
            globellevel:res.data.globellevel,
            email:res.data.email,
            reporteeId:res.data.reporteeId,
            projectName:res.data.projectName,      }))
         .catch(err => console.log(err))
     }

     useEffect(()=>{

        getSingleUser()

    },[])
    return(
        <React.Fragment>
           <Adminnavbar/>
              {/* <pre>{JSON.stringify(userdetails)}</pre> */}
           <div className="container p-2">
                <div className="row">
                    <div className="col">
                        <h1 className=" fw-bold text-primary fst-italic">VIEW USER</h1>
                        <p>India’s Leading Provider Of Payroll and Compliance Expertise Across Every State. ADP Provides an End-To-End Payroll Outsourcing Solution. Get a Free Price Quote! Local & global payroll. Comprehensive solutions. Timely & accurate. Expert service & support. Save time & costs. Modern payroll tech. Multi-award winning. Global compliance support.</p>
          </div>
          </div>
          </div>
         
          
                        <div className="container - p-3">

                         <div className="row align-items-center">
                             <div className="col-md-4">
                             <img src={userdetails.profilePictureURL} className="img-fluid"/>
                          </div>
                          <div className="col-md-8">
                                 <ul className="list-group">
            
                               
                                     <li className="list-group-item">EmployeeId:-<span>{userdetails.EmployeeId}</span></li>
                                     <li className="list-group-item">Name:-<span>{userdetails.name}</span></li>
                                     <li className="list-group-item">Gender:-<span>{userdetails.gender}</span></li>
                                     <li className="list-group-item">Date-of-Birth:-<span>{userdetails.dateOfBirth}</span></li>
                                     <li className="list-group-item">Company name:-<span>{userdetails.companyname}</span></li>
                                     <li className="list-group-item">Date-of-Joining:-<span>{userdetails.dateOfJoining}</span></li>

                                     <li className="list-group-item">Address:-<span>{userdetails.address}</span></li>
                                     <li className="list-group-item">Mobile number:-<span>{userdetails.phoneNo}</span></li>
                                     <li className="list-group-item">Email:-<span>{userdetails.email}</span></li>
                                     <li className="list-group-item">IdProofname:-<span>{userdetails.idProofname}</span></li>
                                     <li className="list-group-item">IdProofnumber:-<span>{userdetails.idProof}</span></li>
                                     <li className="list-group-item">Department:-<span>{userdetails.Department}</span></li>

                                     <li className="list-group-item">Salary:-<span>{userdetails.salary}</span></li>
                                     <li className="list-group-item">Leavebalance:-<span>{userdetails.levebalance}</span></li>
                                     <li className="list-group-item">Leavetaken:-<span>{userdetails.leavetaken}</span></li>
                                     <li className="list-group-item">JobType:-<span>{userdetails.Jobtype}</span></li>
                                     <li className="list-group-item">Role:-<span>{userdetails.jobrole}</span></li>
                                     <li className="list-group-item">Globellavelgrade:-<span>{userdetails.globellevel}</span></li>
                                     <li className="list-group-item">ReporteeId:-<span>{userdetails.reporteeId}</span></li>
                                     <li className="list-group-item">ProjectName:-<span>{userdetails.projectName}</span></li>
                      </ul>
                        </div>
                        </div>
                                
                        <div className="row ">
                           <div className="col d-flex justify-content-center ">
                           <Link to={'/employeeDashbord'} className="btn btn-primary w-25 m-auto mt-5 ">Back To Dashboard</Link>
                           </div>
                        </div>
                        </div>
                       
                  
              
            
         

        </React.Fragment>
    )
}
export default Viewadmin;
