import queryExecute from "/JS project/Bug_report_forum/app/(mysql)/mysql";
import { NextResponse } from "next/server";

export async function DELETE(req,{params}) {
    try {
      const {id} = params
      console.log(id)
      console.log(`1`)
      await queryExecute(`DELETE FROM Ticket_web WHERE Id = ${id}`)

      return NextResponse.json({message:`Ticket deleted`},{status:200})
    } catch (error) {
        return NextResponse.json({message:`Error`,error}, {status:500})
    }
}