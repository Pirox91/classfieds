import React from "react";
export default function FrontPage(){
    return(<>
        <div className='cta welcome'>
        <p id="title">hardwarek.tn </p>
        <p>the official sponsor of budget gaming in tunisia</p>
        <button className='buttonClass3' type="button">sell your hardware</button>
    <br /> 
     <button className='buttonClass4' type="button">browse ads</button>
      </div>
     <div className='category'>
     <div id="mobo">carte mere</div>
     <div id="gpu">carte graphique </div>
     <div id="ram">ram</div>
     <div id="cpu">cpu</div>
     <div id="case">boitier</div>
     <div id="ssd">stockage</div>
     <div id="psu">boite dalimentation</div>
     <div id="monitor">moniteur</div>
     <div id="pc">pc</div>
     <div id="console">console</div>
   </div></>
      )
}