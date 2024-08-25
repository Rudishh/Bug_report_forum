import queryExecute from "../../(mysql)/mysql"
import { NextResponse } from "next/server";


export async function POST(req) {
    console.log("POST RAN")
    try{
     const body = await req.json()
     const ticketData = body.formData

     const data = await queryExecute(`SELECT * FROM Ticket_web`);
        let latestId;
     if (data.length !== 0) {
      latestId = data[0].Id; 
     }
     else {
        latestId = 0;
     }
     const newId = latestId + 1;
     await queryExecute(`INSERT INTO Ticket_web (Id, Title, Description, Priority, Severity, Viewport, Project) VALUES (${newId},'${ticketData.title}', '${ticketData.description}', ${ticketData.priority}, ${ticketData.severity}, '${ticketData.viewport}', '${ticketData.project}')`)
     
     return NextResponse.json({message:'Ticket created'}, {status:201})
    } catch(error) {
        return NextResponse.json({message:`Error`,error},{status:500})
    }
}

export async function GET() {
    try {
       const tickets = await queryExecute(`SELECT * FROM Ticket_web`);
       return NextResponse.json({tickets},{status:200})
    } catch (error) {
        return NextResponse.json({message:`Error`,error},{status:500}) 
    }
}