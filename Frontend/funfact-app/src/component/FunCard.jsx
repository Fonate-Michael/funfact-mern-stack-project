// import FetchFun from "../service/api";
import { useEffect, useState } from "react";
import '../css/FunCard.css';


function FunCard(){
    const [fun, setFun] = useState([]);
    async function FetchFun(){
        const url = "http://127.0.0.1:8000/api/funfact/";
        const content = await fetch(url);
        const data = await content.json();
        setFun(data);
    
    }

    useEffect(()=>{
        FetchFun()
    })

    return(
        <div className="main">
        <div className="header">
            <h2>My Funfact MERN App</h2>
            <p>This it my first MERN app. This apps displays funfacts by fetching them from and
            a REST API i creaated using express and node and Mongo for the DB.</p>
            <hr/>
            
            
        </div>

        <div className="facts">
            {fun.map((fun)=>{
                return(
                    <div key={fun._id}>
                        <p className="id">Fact: {fun.id}</p>
                        <h3>{fun.fact}</h3>
                        <div className="cat">
                        <p className="para">Category:</p> <div className="category">{fun.category}</div>
                        </div>
                        <hr/>
                    </div>
                )
            })}
        </div>
        </div>
    )
}



export default FunCard;