import React from 'react'

function AnnounceCard(props){
    
    return(
            <div className='relative col-span-1'>
                <img className="w-full h-full object-contain rounded-xl"
                        src={props.Src}
                        alt="Annonce"/>
                <div className='absolute bottom-0 right-0 left-0 rounded-b-xl bg-white/70'>
                    <div className='mx-2 flex flex-row justify-between'>
                        <h2 class='text-2xl smm:text-base mdd:text-lg lgg:text-xl font-bold text-deep-orange-600'>{props.type}</h2>
                        <h2 class='self-center text-xl smm:text-sm mdd:text-lg lgg:text-lg font-bold text-deep-orange-600'>{props.Price}</h2>
                    </div>
                    <div className="mx-1 flex flex-row">
                        <svg className="h-7 w-5 smm:w-4 smm:h-6 mdd:w-5 mdd:h-7 lgg:w-5 lgg:h-7 stroke-deep-orange-600"       
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        <span className='mx-1 font-mono self-center text-xl smm:text-base mdd:text-lg lgg:text-xl font-semibold text-deep-orange-600'>
                            {props.Loc}
                        </span>
                    </div>
                </div>
            </div>
        );
}

export default AnnounceCard;