import React from "react";
import '../index.css'

function Projectcomponent (props){
    return(
        <>
     <section className="flex">
        <div className="flex flex-col">
        <h1 className="w-[563px] text-stone-700 text-[65px] font-black font-['Overused Grotesk'] leading-[66px]">{props.title}</h1>
        <p className="w-[540px] text-stone-900 text-[50px] font-normal font-['Overused Grotesk'] leading-[46px]">{props.description}</p>
    
            <a className="w-[140px] h-[30px] bg-black rounded-full border border-neutral-950 items-center justify-center  inline-flex text-white" href={props.link}>SEE WORK</a>
            </div>
            <div className="flex flex-col">
            <img>
            {props.heroimg}
            </img>
            
            <div className="flex space-x-2 mt-2">
                  <div className="rounded-lg p-1 text-xs border border-gray-400">{props.btn1}</div>
                  <div className="rounded-lg p-1 text-xs border border-gray-400">{props.btn2}</div>
                  <div className="rounded-lg p-1 text-xs bg-secondarygreen border border-secondarygreen">{props.btn3}</div>
                </div>
            
            </div>
     </section>
        </>
    );
}
export default Projectcomponent;