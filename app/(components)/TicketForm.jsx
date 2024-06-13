"use client";

import { useRouter } from "next/navigation"
import React, { useState } from "react";

const TicketForm = () => {

    const router = useRouter()

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        setFormData((preState) => ({
            ...preState,
            [name]: value
        }))
    }

    const handleSubmit = async(e) => {
        console.log("submitted")
        e.preventDefault();
        const res = await fetch("/api/Tickets", {
            method:"POST",
            body:JSON.stringify({formData}),
            "content-type":'application/json'
        })
        router.refresh()
        router.push("/")
        if (!res.ok) {
            throw new Error("Failed to create ticket")
        }

    }

    const startingTicketData = {
        title: "",
        description: "",
        priority: 1,
        severity: 0,
        viewport: "",
        project: "Rudi portfolio",
    };

    const [formData, setFormData] = useState(startingTicketData);
    return (
        <div className="flex justify-center"><form className="flex flex-col gap-3 w-1/2" method="post" onSubmit={handleSubmit}>
            <h3>Create bug report</h3>
            <label>Title</label>
            <input id="title" name="title" type="text" onChange={handleChange} required={true} value={formData.title} />
            <label>Description</label>
            <textarea id="description" name="description" onChange={handleChange} required={true} value={formData.description} rows="5" />

            <label>Project</label>
            <select name="project" value={formData.category} onChange={handleChange}>
                <option value="Rudi portfolio">Rudi portfolio</option>
                <option value="Bug report forum">Bug report forum</option>
                <option value="Other">Other</option>
            </select>

            <label>Priority</label>
            <div>
                <input id="priority-1" name="priority" type="radio" onChange={handleChange} value={1} checked={formData.priority == 1} />
                <label>1</label>

                <input id="priority-2" name="priority" type="radio" onChange={handleChange} value={2} checked={formData.priority == 2} />
                <label>2</label>

                <input id="priority-3" name="priority" type="radio" onChange={handleChange} value={3} checked={formData.priority == 3} />
                <label>3</label>

                <input id="priority-4" name="priority" type="radio" onChange={handleChange} value={4} checked={formData.priority == 4} />
                <label>4</label>
            </div>

            <label>Severity</label>
            <input type="range" id="severity" name="severity" value={formData.severity} min="0" max="100" onChange={handleChange}/>

            <label>Viewport</label>
            <input id="viewport" name="viewport" type="text" onChange={handleChange} required={true} value={formData.viewport} />

            <input type="submit" className="btn" value="Create bug report" />
        </form></div>
    )
}

export default TicketForm