import { DarkModeContext } from 'context/darkMode';
import AuthLayout from 'layout/AuthLayout';
import PrivateLayout from 'layout/PrivateLayout';
import Publiclayout from 'layout/PublicLayout';
import Clientes from 'pages/admin/Clientes';
import Admin from 'pages/admin/Index';
import Vehiculos from 'pages/admin/Vehiculos';
import Index from 'pages/Index';
import Login from 'pages/Login';
import Registro from 'pages/Registro';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'styles/App.css';
import { useState, useEffect } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(()=>{
    console.log('Modo dark:' ,darkMode)
  },[darkMode])
  return (


      <DarkModeContext.Provider value={{darkMode,setDarkMode}} > 
      <Router>
        <Switch>
          <Route path = {['/admin','/admin/vehiculos','/admin/clientes']}>
            <PrivateLayout>
              <Switch>
                <Route path='/admin/vehiculos'>
                  <Vehiculos></Vehiculos>
                </Route>
                <Route path='/admin/clientes'>
                  <Clientes></Clientes>
                </Route>
                <Route path = "/admin">
                  <Admin></Admin>
                </Route>
              </Switch>
            </PrivateLayout>
          </Route>
          <Route path = {['/login', '/registro']}> 
            <AuthLayout>
              <Switch>
              <Route path = "/login">
                <Login></Login>
              </Route>
              <Route path = '/registro'>
                <Registro></Registro>
              </Route>
              </Switch>

            </AuthLayout>
          </Route>
          <Route path = {['/']}>
            <Publiclayout>
              <Switch>
                <Route path = "/">
                  <Index></Index>
                </Route>
              </Switch>

            </Publiclayout>
          </Route>
        </Switch>
      </Router>
      </DarkModeContext.Provider>
  );
}

export default App;
