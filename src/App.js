import ExpenceItem from './components/ExpenceItem';
import './App.css';

function App() {
  const expenses=[
    {
      id:'e1',
      title:'car Insuranse',
      amount:286.34,
      LocationOfExpenditure:'Pune',
      date: new Date(2020,7,14),
    },
    {
      id:'e2',
      title:'Bike Insuranse',
      amount:186.34,
      LocationOfExpenditure:'Mumbai',
      date: new Date(2021,8,14),
    },
    {
      id:'e3',
      title:'Home Insuranse',
      amount:3006.34,
      LocationOfExpenditure:'Hydrabad',
      date: new Date(2022,9,14),
    },
  ]
  return (
    <div>
      <h2>Lets get start</h2>
      {
        // for 100 expense we can apply same loop.
        expenses.map((ele)=>{
          console.log(ele.title);
          return <ExpenceItem title={ele.title} loc={ele.LocationOfExpenditure} amount={ele.amount} date={ele.date}/>
        })
      }
      {/* <ExpenceItem title={expenses[0].title} loc={expenses[0].LocationOfExpenditure} amount={expenses[0].amount} date={expenses[0].date}/> 
      <ExpenceItem title={expenses[1].title} loc={expenses[1].LocationOfExpenditure} amount={expenses[1].amount} date={expenses[1].date}/>
      <ExpenceItem title={expenses[2].title} loc={expenses[2].LocationOfExpenditure} amount={expenses[2].amount} date={expenses[2].date}/> */}
    </div>
  );
}

export default App;
