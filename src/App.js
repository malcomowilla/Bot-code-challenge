import React,{useEffect,useState} from 'react';
import './App.css';
import BotCollection from './Components/BotCollection'
import YourBotArmy from './Components/YourBotArmy'


function App() {

  const[bots,setBots] = useState([])
  const[armyBots,setArmyBots] = useState([])
   
  useEffect(() =>{
    fetch("https://bot-battle-db.vercel.app/bots")
   .then(response => response.json())
   .then((botsData) => setBots(botsData)
   )

  },[])

  function deleteBackend(id){
    fetch(`https://bot-battle-db.vercel.app/bots${id}`,{
      method:"DELETE",
      headers:{
        "Content-Type":"application/json",
        Accept:"application/json", 
      }
    })

  }

  function deleteBot(id){
     const updateBots = bots.filter((bot) => bot.id !== id )
     setBots(updateBots) 
     {deleteBackend(id)}
  }



  function addArmy(id){
    const  updateArmy=bots.filter((bot) => bot.id === id)
    const found = armyBots.find((item) => item.id === updateArmy[0].id)
    if(!found){
      const fullArmy=[...armyBots,updateArmy[0]]
    setArmyBots(fullArmy)
    }
   
  }

  function releaseArmy(id){
 const updateArmy =armyBots.filter((bot)=> bot.id !== id)
   setArmyBots(updateArmy)
  }

  return (
    <div>
      <h1>BOT BATTLE</h1>
      <span>Click on Bot to add to Army</span>
      <YourBotArmy armyBots = {armyBots} releaseArmy={releaseArmy}/>
     <BotCollection bots ={bots} deleteBot={deleteBot} addArmy={addArmy}/>
    </div>
  );
}

export default App;
