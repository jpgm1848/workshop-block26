function SelectedContact({ selectedContactId }) {
  console.log(selectedContactId);
  return (
    <>
      {selectedContactId === null ? (
        <div>No contact selected</div>
      ) : (
        <div>{selectedContactId}</div>
      )}
    </>
  );
}

export default SelectedContact;
