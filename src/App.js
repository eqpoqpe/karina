import React, { useEffect, useState } from "react";
import { Header } from "./front";
import Router from "./route";
import { getLegalPath } from "./util";
import { fetchData } from "./data";
import "./App.css";

const DataContext = React.createContext();

function App(props) {
  const [data, setData] = useState([]);
  const [paths, setPath] = useState([]);
  const [tables, setTable] = useState(21);
  
  useEffect(() => {
    fetchData(
      "https://eqpo.ml/-/display.json",
      [
        (result) => { setData(result.display.items); },
        (result) => { setPath(getLegalPath(result.display.items)) }
      ]
    );
    fetchData("https://eqpo.ml/api/karina/display.json", setTable);
  }, []);

  return (
    <div className="App">
        <Header />
        <DataContext.Provider value={{ data, paths, tables }}>
          <Router table={tables} />
        </DataContext.Provider>
    </div>
  );
}

export default App;

export { DataContext, Sponger };
