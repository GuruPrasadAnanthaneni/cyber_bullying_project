import React, { useState, useEffect } from "react";
//import "./HistoryRecords.css"; // Add CSS for styling if needed

const HistoryRecords = () => {
  const [historyRecords, setHistoryRecords] = useState([]);

  useEffect(() => {
    // Fetch history records from an API or data source
    fetch("/api/history-records")
      .then((response) => response.json())
      .then((data) => {
        setHistoryRecords(data);
      })
      .catch((error) => {
        console.error("Error fetching history records:", error);
      });
  }, []);

  return (
    <div className="records-display">
      {Array.isArray(historyRecords) && historyRecords.length > 0 ? (
        historyRecords.map((record, index) => (
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
                <b>Attached File:</b>{" "}
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
          </div>
        ))
      ) : (
        <p>No history records to display.</p>
      )}
    </div>
  );
};

export default HistoryRecords;
