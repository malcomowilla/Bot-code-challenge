import React,{useEffect} from "react";

function BotCollection({bots,deleteBot,addArmy}){

    const collection = bots.map((item) => 
    <div key ={item.id} className='card container-md col-6 col-sm-3  bot_display'>
    <div onClick={() => addArmy(item.id)}>
    <img className="card-img-top" src={item.avatar_url} alt={`${item.name} ${item.bot_class}`}  />
    <p>Name: {item.name}</p>
    <p>Health: {item.health}</p>
    <p>Armor: {item.armor}</p>
    <p>BotClass: {item.bot_class}</p>
    <p>Catchphrase: {item.catchphrase}</p>
    </div>
    <button className="btn btn-danger" onClick={() => deleteBot(item.id)}>X</button>
    </div>
    )



    return (

        <div className="row">
         {collection}
        </div>
    )
}

export default BotCollection