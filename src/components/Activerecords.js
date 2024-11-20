import React, { useState, useEffect } from "react";

const ActiveRecords = () => {
  // State to store active records
  const [activeRecords, setActiveRecords] = useState([]);

  useEffect(() => {
    // Fetch records from an API or any data source
    fetch("/api/records")
      .then((response) => response.json())
      .then((data) => {
        setActiveRecords(data);
      })
      .catch((error) => {
        console.error("Error fetching records:", error);
      });
  }, []);

  const deleteRecord = (id) => {
    // Delete the record using an API call
    fetch(`/api/records/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          // Update state to remove the deleted record
          setActiveRecords((prevRecords) =>
            prevRecords.filter((record) => record._id !== id)
          );
          alert("Record deleted successfully.");
        } else {
          alert("Failed to delete the record.");
        }
      })
      .catch((error) => {
        console.error("Error deleting record:", error);
      });
  };

  return (
    <div className="records-display">
      {Array.isArray(activeRecords) && activeRecords.length > 0 ? (
        activeRecords.map((record, index) => (
          <div key={index} className="record">
            <p className="record-title">
              <b>Record ID: </b>
              {record._id}
            </p>
            <p>
              <b>Description:</b> {record.text}
            </p>
            {record.file && (
              <p>
                <b>Attached File:</b>
                <a
                  href={record.file}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View File
                </a>
              </p>
            )}
            <p>
              <b>Status: </b>
              {record.isActive ? "Active" : "Inactive"}
            </p>
            <p>
              <b>Created At: </b>
              {new Date(record.createdAt).toLocaleString()}
            </p>
            <button
              onClick={() => deleteRecord(record._id)}
              style={{ cursor: "pointer" }}
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p>No active records to display.</p>
      )}
    </div>
  );
};

export default ActiveRecords;
