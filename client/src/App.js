import { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    axios.get("/api/config").then((response) => {
      console.log(response.data);
    });
  }, []);
  return (
    <div>
      <h1>Farm to Table... FT-SKWARED</h1>
    </div>
  );
}

export default App;
