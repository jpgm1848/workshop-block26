import { useEffect, useState } from "react";

function SelectedContact({ selectedContactId, setSelectedContactId }) {
  const [singleContact, setSingleContact] = useState(null);
  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${selectedContactId}`
        );
        const result = await response.json();
        setSingleContact(result);
      } catch (error) {
        console.log(error);
      }
    }
    fetchContact();
  }, [selectedContactId]);
  return (
    <>
      {singleContact === null ? (
        <div>No contact selected</div>
      ) : (
        <div>
          <p>{singleContact.name}</p>
          <p>{singleContact.email}</p>
          <p>{singleContact.phone}</p>
          <p>{singleContact.website}</p>
          <button onClick={() => setSelectedContactId(null)}>
            Back to List
          </button>
        </div>
      )}
    </>
  );
}

export default SelectedContact;
