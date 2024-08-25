import TicketCard from "./(components)/TicketCard"

const getTickets = async () => {

    const res = await fetch("http://localhost:3000/api/Tickets", {
      cache: "no-store"
    })
    return res.json();
}


const Dashboard = async () => {

  const { tickets } = await getTickets();
  console.log(tickets)
  const uniqueCategories = [
    ... new Set(tickets?.map(({ Project }) => Project)),
  ];

  console.log(uniqueCategories)

  return (
    <div className="p-5">
      <div>
        {tickets && uniqueCategories?.map((uniqueCategory, categoryIndex) => (
          <div key={categoryIndex} className="mb-4">
            <h2>{uniqueCategory}</h2>
            <div className="lg:grid grid-cols-2 xl:grid-cols-4">

              {tickets.filter((ticket) => ticket.Project === uniqueCategory).map((filteredTicket, _index) => (
                <TicketCard id={_index} key={_index} ticket={filteredTicket} />
              ))}
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}
export default Dashboard