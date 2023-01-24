import React from "react";

function YourBotArmy({armyBots,releaseArmy}){

    const army = armyBots.map((item) => 
    <div key ={`${item.id}`} className='card container-md col-6 col-sm-3  bot_army' onClick={() => releaseArmy(item.id)}>
    <img className="card-img-top" src={item.avatar_url} alt={`${item.name}`}  />
    <p>Name: {item.name}</p>
    <p>Health: {item.health}</p>
    <p>Armor: {item.armor}</p>
    <p>BotClass: {item.bot_class}</p>
    <p>Catchphrase: {item.catchphrase}</p>
    
    </div>
    )


    return(
     <div className="row">
       {army}
      
     </div>

    )
}

export default YourBotArmy