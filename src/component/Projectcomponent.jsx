import React from "react";

function Projectcomponent (props){
    return(
        <>
     <section>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    
            <a href={props.link}>SEE WORK</a>
       
     </section>
        </>
    );
}
export default Projectcomponent;