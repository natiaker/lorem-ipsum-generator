import React, {useState} from 'react';
import text from './data';

function App() {
  const [value, setValue] = useState("");
  const [paragraphs, setParagraphs] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(value);
    if(value <= 0) {
      amount = 1;
    } 
    if(value > text.length) {
      amount = text.length;
    } 
    const newParagraphs = text.slice(0,amount);
    setParagraphs(newParagraphs);
  }
  return (
    <div className="flex flex-col pt-20 items-center min-h-screen bg-[#f1f5f8] ">
      <h1 className='text-[#063251] text-3xl font-bold	mb-3'>TIRED OF BORING LOREM IPSUM?</h1>
      <form className='mt-8 mb-16 flex justify-center items-center text-xl text-[#063251]' onSubmit={handleSubmit}>
        <label htmlFor="number">Paragraphs: </label>
        <input type="number" id='number' name='number' className='mx-2 rounded w-16 px-2 py-1' value={value} onChange={(e)=>setValue(e.target.value)} />
        <button type="submit" className='bg-[#49a6e9] text-[#063251] py-1.5 px-3 rounded text-sm uppercase '>Generate</button>
      </form>
      {paragraphs.map((paragraph, index) => {
        return <p key={index} className='mb-5 max-w-2xl text-center text-[#617d98] block mt-5'>{paragraph}</p>
      })}
    </div>
  );
}

export default App;
