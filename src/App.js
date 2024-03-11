import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [GenerateData , SetGenerateData] = useState([])
  const InputValue = (event) => {
    console.log(event.target.value)
    SetGenerateData(event.target.value)
  };
  const GenerateParagraph = () => {

    const data = [
        "This is first Paragraph", 
        "This is Second Paragraph", 
        "This is third Paragraph"
     ]

    //  SetGenerateData(data.splice(0, paraValue-1, 0))
    }

  return (
    <>
      <div>
          <input type='text' id='paragraphNumber' onChange={InputValue}
          />
          <button onClick={GenerateParagraph}>Submit</button>
        </div>
    </>

  );
}
export default App;