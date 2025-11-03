import { useState } from 'react';
import "./App.css";
import { unit9Notes } from "./Unit9Notes";

export const Unit9Page = () => {
    const [open, setOpen] = useState<string | null>(null);

    return (
        <div className="self-start text-left w-full mx-auto p-6">
            <h1 className="text-3xl font-extrabold mb-6 border-b pb-2">
                Unit 9 Notes
            </h1>

            <div className="grid grid-cols-2 gap-4 mt-4">
                {Object.entries(unit9Notes).map(([title, { image, notes }]) => (
                    <div className="grid-notes">
                        <h2 className="font-bold !text-black">{title}</h2>
                        {open === title ? (
                            <div>
                                <button onClick={() => setOpen(null)} className="!text-black !bg-[#f9f9f9]">Close</button>
                                <ul className="list-disc list-inside space-y-1 !text-black">
                                    {notes.map((note, i) => (
                                        <li key={i}>{note}</li>
                                    ))}
                                </ul>
                            </div>
                        ): (
                            <button onClick={() => setOpen(title)} className="!bg-[#f9f9f9]">
                                <img src = {image} alt = {title} className ="w-full h-40 object-cover rounded-lg" />
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}