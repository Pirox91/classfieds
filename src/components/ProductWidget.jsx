import React from "react";
import pic from "../assets/mobo.jpg"
export default function ProductWidget(){
    return(
        <div className="border-solid border-2 border-primary size-2/6 m-5 ">
            <img src={pic} className="size-fit"></img>
            <content className="bg-primary">
            <h3 className="ml-5 mt-5"> title</h3>
            <p className="ml-5"> description</p>
            <div className="ml-5 mr-5 mb-5 flex justify-between">
            <p> price</p>
            <button className=" bg-ak7el border-solid border-2 rounded border-ak7el text-abyedh">en savoir plus</button></div>
            </content>
        </div>
    )
}