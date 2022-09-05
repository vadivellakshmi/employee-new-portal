
import './App.css';
import Admin from './component/Admin';
import {Routes, Route} from 'react-router-dom'
import Editadmin from './component/Editadmin';
import Addadmin from './component/Addadmin';
import Viewadmin from './component/Viewadmin';
// import Adminnavbar from './component/Adminnavbar';
import Logout from './component/Logout';
import Project from './component/Project';
import Login from './component/Login';
// import Navbar from './component/Navbar';
import ForgotPassword from './component/Forgotpassword';
import Editproject from './component/EditProject';
import Addproject from './component/AddProject';
import Role from './component/Role';
import Editrole from './component/Editrole';
import Addrole from './component/Addrole';
import Idproof from './component/Idproof';
import Editidproof from './component/Editidproof';
import Addidproof from './component/Addidproof';
import Jobtype from './component/Jobtype';
import Editjobtype from './component/Editjobtype';
import Addjobtype from './component/Addjobtype';
import Userdashboard from './component/Userdashboard';
import Admindashboard from './component/Admindashboard';


function App(prop) {
  return (
    <div>
      {/* <Adminnavbar/> */}
      {/* <Navbar/> */}
     <Routes>
      
        <Route path='employee-new-portal/' element={<Login/>}></Route>
        <Route path='/admindashbord/:id' element={<Admindashboard/>}></Route>
        <Route path='/employeeDashbord' element={<Admin/>}></Route>
        <Route path='/userdashboard/:id' element={<Userdashboard/>}></Route>
        <Route path='/Adduser' element={<Addadmin/>}></Route>
        <Route path='/edit/:id' element={<Editadmin/>}></Route>
        <Route path='/view/:id' element={<Viewadmin/>}></Route>
        <Route path='/logout' element={<Logout/>}></Route>
        <Route path='/project' element={<Project/>}></Route>
        <Route path='/project/edit/:id' element={<Editproject/>}></Route>
        <Route path='/project/addproject' element={<Addproject/>}></Route>
        <Route path='/forgotpassword/:id' element={<ForgotPassword/>}></Route>
        <Route path='/role' element={<Role/>}></Route>
        <Route path='/role/edit/:id' element={<Editrole/>}></Route>
        <Route path='/role/addrole' element={<Addrole/>}></Route>
        <Route path='/idproof' element={<Idproof/>}></Route>
        <Route path='/idproof/edit/:id' element={<Editidproof/>}></Route>
        <Route path='/idproof/addidproof' element={<Addidproof/>}></Route>
        <Route path='/jobtype' element={<Jobtype/>}></Route>
        <Route path='/jobtype/edit/:id' element={<Editjobtype/>}></Route>
        <Route path='/jobtype/addjobtype' element={<Addjobtype/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
