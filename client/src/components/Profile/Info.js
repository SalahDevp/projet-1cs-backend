import React from "react";
import BI from './BackgroundImg'
import GL from './getLoc'
import GP from './getPhone'

function Info({user}){
    return(
        <div className="relative">
            <BI/>
            <div className="relative grid place-items-center gap-4 mdd:gap-8 mdd:grid-cols-2 -my-10 mdd:-my-20 lgg:-my-28">
                <div className="place-self-center">
                    <img className="rounded-full object-contain w-24 h-24 smm:w-32 smm:h-32 mdd:w-56 mdd:h-56  lgg:w-72 lgg:h-72 ring-1 ring-black"
                        src={user.picture}
                        alt="Profile picture"/>
                </div>
                <div className="relative flex flex-row mdd:h-8 lgg:mx-2">
                    <h2 className="font-mono text-2xl text-indigo-100 text-center font-semibold smm:text-3xl mdd:text-4xl lgg:text-5xl">
                    {user.name}
                    </h2>
                </div>
                <div className="mdd:col-span-2 place-self-start mx-2 mdd:mx-6">
                <GL Loc={user.adresse}/>
                <GP Phone={user.telephone}/>
                </div>
            </div>
        </div>
    );
}

export default Info;