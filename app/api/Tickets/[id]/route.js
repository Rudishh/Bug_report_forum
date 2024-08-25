import queryExecute from "../../../(mysql)/mysql"
import { NextResponse } from "next/server";

export async function DELETE(req,{params}) {
    try {
      const {id} = params
      await queryExecute(`DELETE FROM Ticket_web WHERE Id = ${id}`)

      return NextResponse.json({message:`Ticket deleted`},{status:200})
    } catch (error) {
        return NextResponse.json({message:`Error`,error}, {status:500})
    }
}