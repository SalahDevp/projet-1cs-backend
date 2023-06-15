import React from 'react'

function ModifierProfile(){
    return(
        <button className=" text-indigo-100 hover:text-deep-orange-600 flex flex-row mx-1"onClick={()=>{}}>
                    <div className="flex p-2">
                    <span className="font-mono text-base text-sky-300 mx-1 font-semibold xss:text-xl smm:text-2xl mdd:text-3xl lgg:text-4xl">
                    Modifier Profile
                    </span>
                    <svg className="fill-sky-300 w-3 h-3 xss:w-4 xss:h-5 smm:w-5 smm:h-6 mdd:w-6 mdd:h-7 lgg:w-7 lgg:h-8" 
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                  </svg>
                    </div>
        </button>);
}

export default ModifierProfile;


