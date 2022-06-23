import './App.css';
import {useSelector,useDispatch} from 'react-redux'
import { ADD_FUND, WITHDRAW_FUND } from './constants';

function App() {
  //1. states
  let state = useSelector((storeObject)=>{
    return storeObject;
  });
  let dispatch = useDispatch();


  //2. function definition
  let clickMe=()=>{
    let amount = parseInt(prompt("enter the value"))
    //alert(amount)
    //dispatch method
    dispatch({type:ADD_FUND,amount:amount})
  }
  let clickMe2=()=>{
    let amount = parseInt(prompt("enter the value"))
    //alert(amount)
    dispatch({type:WITHDRAW_FUND,amount:amount})
  }
  
  //3.return statement
  return (
    <div className="App">
      <h1>amount{state}</h1>
       <div>
         <button onClick={()=>{clickMe()}}>Add Fund</button>
         <button onClick={()=>{clickMe2()}}>withdraw</button>
       </div>
    </div>
  );
}

export default App;
