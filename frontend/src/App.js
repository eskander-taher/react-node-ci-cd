import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  const getMessage = async () => {
    const res = await axios.get("/message");
    setMessage(res.data)
  };

  useEffect(() => {
    getMessage();
  }, []);

  return (
    <div>
      <h1>Welcome to my website</h1>
      <div>{message}</div>
    </div>
  );
}

export default App;
