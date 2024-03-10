import { useState } from 'react'
import './App.css'

function App() {
  const [activity,setActivity]=useState("aman")
  const [listdata,setlistdata]=useState([])
  function handleclick(){
   setlistdata([...listdata,activity])
   console.log(listdata)
   //setlistdata(function(listdata){
   // const updatelist=[...listdata,activity]
   // console.log(updatelist)
    setActivity("")
    //return updatelist
  // })
  }
  function removeactivity(i) {
    const removelist=listdata.filter(function(elem,id){
      return i!=id
    })
    setlistdata(removelist)
  }
  function removeall(){
    setlistdata([])
  }
  return (
    <>
      <div className="bg-blue-500">
        <div className="text-6xl bg-slate-400 inline-block p-4">TodoList</div><br/>
        <input type="text" placeholder="Add Activity" value={activity}
        onChange={function(e){setActivity(e.target.value)}}/>
        <button className="bg-yellow-400 font-bold rounded-lg border-black border-2 m-2 p-1" onClick={handleclick}> Add</button>
        <div className='text-black text-4xl font-bold '>Here is your list:{")"}</div>
        <br/>
        {listdata!=[]&&listdata.map(function(data,i){
          return(
            <>
            <div key={i}>
              <div>
                <span className="bg-red-400 italic font-bold text-xl rounded-lg p-2">{data} </span>
                
              <button className="bg-green-400 font-bold border-2 rounded-md m-1" onClick={function(){removeactivity(i)}}>remove(-)</button>
              </div>
              <br/>
            </div>
            </>
          )
        })}
        <br/>
        {listdata.length>=1 &&
        <button className="bg-black text-white font-bold rounded-lg p-1"onClick={removeall}>REMOVE ALL</button>}
      </div>
    </>
  )
}

export default App
