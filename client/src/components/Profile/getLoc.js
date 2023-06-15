import React from'react'

function getLoc(props){
    return (
        <div>
            <div className="flex p-2">
                <svg className="fill-indigo-100 w-5 h-5 xss:w-5 xss:h-6 smm:w-6 smm:h-8 mdd:w-6 mdd:h-9 lgg:w-8 lgg:h-11"
                        xmlns="http://www.w3.org/2000/svg"     
                        viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                </svg>
                <span className='w-full font-mono text-base text-indigo-100 align-baseline mx-1 font-semibold xss:text-xl smm:text-2xl mdd:text-3xl lgg:text-4xl'>
                    {props.Loc}
                </span>
            </div>
        </div>);
}

export default getLoc;