import { useState } from "react";
import AddMessage from "./AddMessage";
import DisplayMessages from "./DisplayMessages";
import Button from 'react-bootstrap/Button';
import GuessingGame from "./GuessingGame";

function App() {
   const [messages, setMessages] = useState([
      { text: "ex. 2" },

   ]);
   return (
      <div>
         {/* <AddMessage setMessages ={setMessages}/>
         <DisplayMessages messages={messages}/>
         <Button  variant="primary" onClick={() => {setMessages([])}}>Reset / Delete</Button>
      </div> */}
         <GuessingGame />
      </div>
   );
}

export default App;
