
import './App.css';
import {useState} from 'react'

function App() {
const [weight, setweight] = useState(0);
const [bottle, setbottle] = useState(0);
const [time, setTime] = useState(0);
const [gender, setGender]=useState('male');
const [blood, setBlood]=useState(0);

;


function handleSubmit(e){
const litres= bottle*0.33;
const grams=litres*8*4.5;
const burn=weight/10;
const left=grams-(burn*time)



  let result=0;
  e.preventDefault();
  if (gender==='male'){
    result=left/(weight*0.7)
  } else {
    result=left/(weight*0.6)
  }

  setBlood(result);



}
  return (
    <form onSubmit={handleSubmit}>
      <h3>Calculating alcohol blood level</h3>
      <div>
        <label>Weight</label>
        <input type="number" value={weight} onChange={e=>setweight(e.target.value)}></input>
      </div>
      <div>
        <label>Bottles</label>
        <input type="number" value={bottle} onChange={e=>setbottle(e.target.value)}></input>
      </div>
      <div>
        <label>Time</label>
        <input type="number" value={time} onChange={e=>setTime(e.target.value)}></input>
      </div>
      <div>
        <label>Gender</label>
        <label><input type="radio"  name="gender" value="male" defaultChecked onChange={e =>setGender(e.target.value)}></input>Male</label>
        <label><input type="radio"  name="gender" value="female" onChange={e =>setGender(e.target.value)}></input>Female</label>
      </div>
      <div><output>{blood.toFixed(2)}</output></div>
        
        <button>Calculate</button>
    
    </form>
  );
}

export default App;
