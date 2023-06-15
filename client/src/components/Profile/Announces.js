import React , {useState} from "react"
import AC from './AnnounceCard'

function Annonces(){
    const information={
            Src:"https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            type:"Maison",
            Price:"25.000.000 DA",
            Loc:"Sidi-Yahia"
    }
    const information1={
        Src:"https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        type:"Maison",
        Price:"50.000.000 DA",
        Loc:"Sidi-Yahia"
    }
    const information2={
        Src:"https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        type:"Appartement",
        Price:"70.000.000 DA",
        Loc:"Boumerdes"
    }
    const information3={
        Src:"https://images.unsplash.com/photo-1582719388123-e03e25d06d51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        type:"Bungalow",
        Price:"13.000.000 DA",
        Loc:"Oued-smar"
    }  
    
    return(
    <div className="my-16 mdd:my-32 lgg:my-40 relative grid gap-1 place-items-center">
        <div><span className=" text-2xl xss:text-3xl smm:text-4xl mdd:text-5xl text-center font-sans font-bold text-gray-300">Mes announces</span></div>
        <div className=" relative p-px w-11/12 rounded-xl bg-gray-300/40"/>
        <div className='grid smm:grid-cols-2 lgg:grid-cols-3 gap-4 p-4 mx-1 mdd:mx-4'>
        <div><AC Src={information.Src} type={information.type} Price={information.Price} Loc={information.Loc} /></div>
            <div><AC Src={information1.Src} type={information1.type} Price={information1.Price} Loc={information1.Loc} /></div>
            <div><AC Src={information2.Src} type={information2.type} Price={information2.Price} Loc={information2.Loc} /></div>
            <div><AC Src={information3.Src} type={information3.type} Price={information3.Price} Loc={information3.Loc} /></div>
        </div>
    </div>
    );
}

export default Annonces;
            /*/*const[announces , setAnnounces]=useState([
        {Src:["https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"],
        type:"Maison",
        Price:"25.000.000 DA",
        Loc:"Sidi-Yahia"},
        {Src:["https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"],
        type:"Maison",
        Price:"50.000.000 DA",
        Loc:"Sidi-Yahia"},
        {Src:["https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"],
        type:"Appartement",
        Price:"70.000.000 DA",
        Loc:"Boumerdes"},
        {Src:["https://images.unsplash.com/photo-1582719388123-e03e25d06d51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"],
        type:"Bungalow",
        Price:"13.000.000 DA",
        Loc:"Oued-smar"}
    ])
    
            {announces.map((announce) => {
                <AC Src={announce.Src[0]} type={announce.type} Price={announce.Price} Loc={announce.Loc} />
            })}*/