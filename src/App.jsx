import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Contacts from "./components/Contacts/Contacts";
import FindContact from "./components/FindContact/FindContact";
import PrivateRoute from "./components/PrivateRoute"; 
import ContactsList from "./components/ContactsList/ContactsList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Section from "./components/Section/Section";
import { addContact, fetchContacts } from "./redux/slices/contactsSlice";
import Navigation from "./components/Navigation/Navigation"; 

function App() {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector((state) => state.contacts);
  const { isAuthenticated } = useSelector((state) => state.auth); 

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchContacts()); 
    }
  }, [dispatch, isAuthenticated]);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  const handleAddContact = (name, number) => {
    dispatch(addContact({ name, number }));
  };

  return (
    <Router>
      <Navigation />
      <Routes>
        {/* Rute publice */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Ruta privată pentru contacte */}
        <Route
          path="/contacts"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Section title="PhoneBookApp">
                <Contacts onAddContact={handleAddContact} error={error} />
              </Section>
              <Section title="Find contact by name">
                <FindContact />
              </Section>
              <Section title="Contacts">
                {isLoading && <p>Loading...</p>}
                {items.length === 0 && !isLoading ? (
                  <p>No contacts available.</p>
                ) : (
                  <ContactsList
                    contacts={items}
                    onDeleteContact={handleDelete}
                  />
                )}
              </Section>
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
