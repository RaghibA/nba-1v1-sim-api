import React from "react";
import './App.css';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("http://localhost:4004/sim/lebron/kobe")
      .then((res) => res.json())
      .then((data) => console.log(data));
      //.then((data) => setData(data.message));
    }, []);


  return (
    <div>
   </div>
  );
}

export default App;