import logo from './logo.svg';
import Navbar from './Navbar/Navbar';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { ROUTES } from './constants';
import Home from "./Pages/Home"
import StomatoloskeUsluge from './Pages/StomatoloskeUsluge';
import Onama from "./Pages/O_nama"
import Kontakt from './Pages/Kontakt';
import Cjenovnik from './Pages/Cjenovnik';
import Footer from './Footer/Footer';
import "./App.css"
import Admin from "./Pages/Admin"
import UpdateAppointment from './Pages/UpdateAppointment';
import AdminMessages from "./Pages/AdminMessages"
import RegisterPage from './Pages/RegisterPage';
import LoginPage from './Pages/LoginPage';

const App=()=> {
return <BrowserRouter>
<Navbar/>
<Routes>
  <Route path={ROUTES.HOME} element={<Home/>}/>
  <Route path={ROUTES.STOMATOLOSKE_USLUGE} element={<StomatoloskeUsluge/>}/>
  <Route path={ROUTES.FALLBACK} element={<div>Error 404 Page Not Found</div>}/>
  <Route path={ROUTES.O_NAMA} element={<Onama/>}/>
  <Route path={ROUTES.KONTAKT} element={<Kontakt/>}/>
  <Route path={ROUTES.CJENOVNIK} element={<Cjenovnik/>}/>
  <Route path={ROUTES.ADMIN} element={<Admin/>}/>
  <Route path={ROUTES.APPOINTMENT_ID}  element={<UpdateAppointment/>}/>
  <Route path={ROUTES.ADMIN_MESSAGES}  element={<AdminMessages/>}/>
  <Route path={ROUTES.REGISTER}  element={<RegisterPage/>}/>
  <Route path={ROUTES.REGISTER}  element={<RegisterPage/>}/>
  <Route path={ROUTES.LOGIN}  element={<LoginPage/>}/>





</Routes>

</BrowserRouter>


}
export default App;
