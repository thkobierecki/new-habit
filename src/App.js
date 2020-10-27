import React from "react";
import "./App.css";

const App = () => {
  const handleGetCSV = async () => {
    const res = await fetch(
      "https://my.api.mockaroo.com/csv.json?key=291a3730",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const blob = await res.blob();

    // Create blob link to download
    const url = window.URL.createObjectURL(new Blob([blob]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `FileName.csv`);

    // Append to html link element page
    document.body.appendChild(link);

    // Start download
    link.click();

    // Clean up and remove the link
    link.parentNode.removeChild(link);
  };
  return (
    <div className="App">
      <button onClick={() => handleGetCSV()}>get csv</button>
    </div>
  );
};

export default App;
