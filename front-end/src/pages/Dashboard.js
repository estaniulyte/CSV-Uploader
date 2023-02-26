import React, {useState} from "react";
import Papa from 'papaparse';
import api from '../api/axiosConfig';


import "./dashboard.scss";

const Dashboard = () => {

  const [data, setData] = useState([]);
  const [columnArray, setColumn] = useState([]);
  const [values, setValues] = useState([]);

  const getEmployees = async () => {
    await api.get("/employees")
    .then(function (response) {
      const valuesArray = [];

      response.data.map((d) => {
        valuesArray.push([d.name, d.email, d.phone]);
      })
  
      setValues(valuesArray);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const handleFileUpload = async (e) => {
    Papa.parse(e.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function(result) {
        const columnArray = [];
        const valuesArray = [];

        result.data.map((d) => {
          columnArray.push(Object.keys(d));
          valuesArray.push(Object.values(d));
        })

        setData(result.data);
        setColumn(columnArray[0]);
        setValues(valuesArray);
      }
    })
  }

  return(
    <div className="dashboard">
      <label className="dashboard__form">
        Upload CSV file
        <input
          type="file"
          name="file"
          accept=".csv"
          id="file-upload"
          onChange={handleFileUpload}
        ></input>
      </label>

      <br/>
      {columnArray ? 
      <table className="dashboard__table">
        <thead>
          <tr>
            {columnArray.map((cols, i) => (
              <th key={i}>{cols}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {values.map((v, i) => (
            <tr key={i}>
              {v.map((value, i) => (
                <td kay={i}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table> : " "}
    </div>
  );
};

export default Dashboard;