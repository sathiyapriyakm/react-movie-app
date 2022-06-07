//import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
 const person=[{name:"Boopathi",image:"https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"
 },
{name:"Iniyan",image:"https://www.clipartmax.com/png/small/171-1717870_stockvader-predicted-cron-for-may-user-profile-icon-png.png"},
{name:"Priya",image:"https://1.bp.blogspot.com/-Muc21xaQjYg/XluhYO6f6vI/AAAAAAAAPJw/T51WnNCctz4Vxn_9REzJuftkznfuRGKUgCLcBGAsYHQ/s1600/whatsapp%2Bprofile%2Bpic%2B%25281%2529.jpg"}]
  return (
    <div className="App">
    {person.map((stdt)=>(<Message name={stdt.name} image={stdt.image}/>))}
    </div>
  );
}
 export default App;
 function Counter(){
   const[like,setLike]=useState(0);
   const[dislike,setDislike]=useState(0);
   return(
     <div className="counter-container">
       <button className="like-button" onClick={()=>setLike(like+1)}>👍<span>{like}</span></button>
       <button className="dislike-button" onClick={()=>setDislike(dislike+1)}>👎<span>{dislike}</span></button>
      {/* <p>{like}</p> */}
     </div>
   );
 }

 function Message({name,image}){
   return <div>
     <img className="profile-pic" src={image} alt="profile pic"/>
     <h1>Hello, {name}</h1>
     <Counter/>
     </div>;

 }