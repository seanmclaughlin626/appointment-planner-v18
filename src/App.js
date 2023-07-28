import React, {useState} from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [appointments, setAppointments] = useState([]);
  const [contacts, setContacts] = useState([]);

  const handleNewContact = (newName, newPhone, newEmail) => {
    setContacts((prev) => [{name: newName, phone: newPhone, email: newEmail}, ...prev])
  }
  const handleNewAppointment = (newName, newContact, newDate, newTime) => {
    setAppointments((prev) => [{name: newName, contact: newContact, date: newDate, time: newTime}, ...prev])
  }  

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contacts = {contacts} handleNewContact = {handleNewContact} />  }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage contacts = {contacts} appointments = {appointments} handleNewAppointment = {handleNewAppointment} />  }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
