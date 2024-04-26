
"use client";
import React from "react";


export const OrderNotes = ({data}) => {
    const [note, setNote] = React.useState("");

    const handleNoteSubmit= async (note) => {
        
        try {
            await fetch('https://vop4f76uc3.execute-api.us-east-1.amazonaws.com/', {
                method: "PATCH",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    id: data.id,
                    customer_note: note
                })
            });     
        } catch (error) {
            console.log(error)
        }
       
    }
  
    return (
    <section className="w-full h-full flex-col pb-10">
        <div className="w-full h-full flex items-center">
            <span className="sm:w-[18%] w-[25%] text-Grey800">Order Notes</span>
            <hr className="border-b"/>
        </div>
        <div className="w-full flex flex-col pt-5">
            <span>Check note from you</span>
            {data.customer_note.split("\n").map((word, index) => (
                <div key={index}>
                    <p className="text-Grey800">{word}</p>
                    <br/>    
                </div>    
            ))}
           
        </div>
        <div className="flex flex-col  w-full h-full py-3 gap-2 ">
            <div className="w-full flex-col justify-between">
            <span>Note from {data.supplier.business_name} </span>
            <span className="text-Grey800">Thank you for your order!</span>
        </div>
        </div>
        <label className="text-sm">Send another note</label>
        <textarea className="w-full flex h-[132px] border mt-2 rounded-lg p-2" value={note} onChange={(e) => setNote(e.currentTarget.value)}/>
        <div className="w-full flex justify-end items-end mt-5">
            <button onClick={() => handleNoteSubmit(note)} className="text-base border md:w-[20%] w-[30%] py-2 text-Grey800">Send note</button>
        </div>
    </section>
    )
}