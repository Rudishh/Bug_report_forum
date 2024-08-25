import TicketForm from "../../(components)/TicketForm";

const TicketPage = ({ params }) => {
  return (
    <div>
      <TicketForm />
      <div>Ticket ID: {params.id}</div>
    </div>
  );
};
export default TicketPage;