import React from 'react';
import './Style.css';
import { Switch,  Route } from 'react-router-dom';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import Login from './Pages/Account/Login';
import SignIn from './Pages/Account/SignIn';
import Dashboard from './Pages/Dashboard';
import AllContactDetailes from './Pages/DataShowTable/AllContactDetailes';
import AllDiseases from './Pages/DataShowTable/AllDiseases';
import AllDoctor from './Pages/DataShowTable/AllDoctor';
import AllFedbacks from './Pages/DataShowTable/AllFedbacks';
import AllQuection from './Pages/DataShowTable/AllQuection';
import AllUser from './Pages/DataShowTable/AllUser';
import Errore from './Pages/Error/Errore';
import DiseaseDetaile from './SubPages/DiseaseDetaile';
import FeedbackDetailes from './SubPages/FeedbackDetailes';
import QuectionDetailes from './SubPages/QuectionDetailes';
import UserProfile from './SubPages/UserProfile';
import { ProfileProvider } from './Pages/Account/Context.Provider';
import AddProfile from './Pages/Profile/AddProfile';
import Logout from './Pages/Account/Logout';
import AdminLogin from './Pages/Account/AdminLogin';

function App() {
  return (
    <ProfileProvider>
      <Switch>
        <Route exact path="/">
            <NavBar path="/"/>
            <Dashboard/>
            <Footer/>
        </Route>
        <Route exact path="/signin">
            <NavBar path="/signin"/>
            <SignIn/>
            <Footer/>
        </Route>
        <Route exact path="/login">
          <NavBar path="/login"/>
          <Login/>
          <Footer/>
        </Route>
        <Route exact path="/adminlogin">
          <NavBar path="/adminlogin"/>
          <AdminLogin/>
          <Footer/>
        </Route>
        <Route exact path="/profile/:id">
          <NavBar path="/profile"/>
          <AddProfile/>
          <Footer/>
        </Route>
        <Route exact path="/alluser">
          <NavBar path="/alluser"/>
          <AllUser/>
          <Footer/>
        </Route>
        <Route exact path="/alluser/:id">
            <NavBar path="/alluser/:id"/>
            <UserProfile/>
            <Footer/>
        </Route>
        <Route exact path="/alldoctors">
          <NavBar path="/alldoctors"/>
          <AllDoctor/>
          <Footer/>
        </Route>
        <Route exact path="/alldiseases">
            <NavBar path="/alldiseases"/>
            <AllDiseases/>
            <Footer/>
        </Route>
        <Route exact path="/alldiseases/:id">
            <NavBar path="/alldiseases/:id"/>
            <DiseaseDetaile/>
            <Footer/>
        </Route>
        <Route exact path="/allquections">
            <NavBar path="/allquections"/>
            <AllQuection/>
            <Footer/>
        </Route>
        <Route exact path="/allquections/:id">
            <NavBar path="/allquections/:id"/>
            <QuectionDetailes/>
            <Footer/>
        </Route>
        <Route exact path="/allfeedbacks">
            <NavBar path="/allfeedbacks"/>
            <AllFedbacks/>
            <Footer/>
        </Route>
        <Route exact path="/allfeedbacks/:id">
            <NavBar path="/allfeedbacks/:id"/>
            <FeedbackDetailes/>
            <Footer/>
        </Route>
        <Route exact path="/allcontacts">
            <NavBar path="/allcontacts"/>
            <AllContactDetailes/>
            <Footer/>
        </Route>
        <Route path='/logout'>
          <Logout/>
        </Route>
        <Route>
          <Errore/>
        </Route>
      </Switch>
    </ProfileProvider>
  );
}

export default App;
