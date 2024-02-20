import "./App.css";
import ContactList from "./components/ContactList.jsx";
import { useState } from "react";
import SelectedContact from "./components/SelectedContact.jsx";

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  return (
    <>
      <SelectedContact selectedContactId={selectedContactId} />
      <ContactList setSelectedContactId={setSelectedContactId} />
    </>
  );
}

export default App;
