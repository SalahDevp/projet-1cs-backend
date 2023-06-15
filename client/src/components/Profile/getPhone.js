import React from'react'

function getPhone(props){
    return (
        <div className="relative">
            <div className="flex p-2">
                <svg className="fill-indigo-100 w-5 h-5 xss:w-5 xss:h-6 smm:w-6 smm:h-8 mdd:w-6 mdd:h-9 lgg:w-8 lgg:h-11" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
                </svg>
                <span className="font-mono text-base text-indigo-100 mx-1 font-semibold xss:text-xl smm:text-2xl mdd:text-3xl lgg:text-4xl">
                    {props.Phone}
                </span>
            </div>
        </div>);
}

export default getPhone;