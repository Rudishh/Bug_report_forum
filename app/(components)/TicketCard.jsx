import DeleteBlock from "./DeleteBlock"
import PriorityDisplay from "./PriorityDisplay"
import ProgressDisplay from "./ProgressDisplay"
import StatusDisplay from "./StatusDisplay"

const TicketCard = ({ticket}) => {

  const formatTimestamp = (timestamp) => {
    const options = {
      year:"numeric",
      month:"2-digit",
      day:"2-digit",
    };
    const date = new Date(timestamp)
    const formattedDate = date.toLocaleString("en-US",options)

    return formattedDate;
  }
 

  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
         <div className="flex mb-3 ">
         <PriorityDisplay priority={ticket.Priority}/>
         <div className="ml-auto">
        <DeleteBlock id={ticket.Id}/>
        </div>
        </div>
        <h4>{ticket.Title}</h4>
        <hr className="h-px border-0 bg-page mb-2" />
        <p className="whitespace-pre-wrap">{ticket.Description}</p>
        <div className="flex-grow"></div>
        <div className="flex mt-2">
          <div className="flex flex-col">
            <p className="text-xs my-1">{formatTimestamp(ticket.Date)}</p>
        <ProgressDisplay severity={ticket.Severity}/>
        </div>
        <div className="ml-auto flex items-end">
        <StatusDisplay viewport={ticket.Viewport}/>
        </div>
        </div>
        </div>
  )
}

export default TicketCard