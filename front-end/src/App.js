// import logo from './logo.svg';
import './App.css';
import Papa from 'papaparse';
import { useState } from 'react';

function App() {

  const [data, setData] = useState([]);
  const [columnArray, setColumn] = useState([]);
  const [values, setValues] = useState([]);

  const handleFile = (e) => {
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

  return (
    <div className="App">
      <input
        type="file"
        name="file"
        accept=".csv"
        onChange={handleFile}
        style={{display: "block", margin: "10px auto"}}
      ></input>

      <br/>

      <table style={{borderCollapse: "collapse", border: "1px solid black", margin: "5px auto"}}>
        <thead>
          <tr>
            {columnArray.map((cols, i) => (
              <th kay={i}>{cols}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {values.map((v, i) => (
            <tr kay={i}>
              {v.map((value, i) => (
                <td kay={i}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
