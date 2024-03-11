import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  const [count, setCount] = useState(0)
  const [GenerateData , SetGenerateData] = useState([])

  
  const data = [
    "This is first Paragraph", 
    "This is Second Paragraph", 
    "This is Third Paragraph",
    "This is Fourth Paragraph", 
    "This is Fivth Paragraph", 
    "This is Sixth Paragraph",
    "This is Seventh Paragraph", 
    "This is Eigth Paragraph", 
 ] 

  const generateParagraph = (e) => {
    e.preventDefault()
let amount = parseInt(count);

if(count <= 0){
  amount= 1
  alert('Please enter a number start from 1')
}
if(count>8){
amount= 8
alert('Please enter a number less than 8')
}

 SetGenerateData(data.splice(0, count))
}
 

  return (
    <>
      <div>
        <form onSubmit={generateParagraph}>
          <input type='text' id='paragraphNumber' 

          onChange= {(e) => {
           setCount(e.target.value)
          }}
          />
          <button>Submit</button>

          <p>{GenerateData.map((item, index) =>{
            return <p key={index}>{item}</p>
          })}</p>
          </form>
        </div>

    </>

  );
}
export default App;