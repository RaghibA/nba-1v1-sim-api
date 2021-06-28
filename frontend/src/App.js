//import React from "react";
import React, {useState, useEffect} from "react";
function App() {
  /*
 const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("http://localhost:4004/sim/1/2/11")
      .then((res) => res.json())
      //.then((data) => console.log(data));
      .then((data) => setData(data.player1.name));
    }, []);

  return (
    <div>
          <p>{data}</p>
   </div>
  );
 */
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4004/sim/1/2/11")
      .then(res => {
        if(res.ok) {
          return res.json()
        }
      }).then(jsonRes => setData(jsonRes.turns))
  })


return (
  <div>
        {data.map(data => <div><li>{data.p1Score}</li>
           <li>{data.p2Score}</li><br></br></div>)}
 </div>
);}

 export default App;
