import { useParams } from "react-router-dom";
import { Box } from "./Box";
import { useEffect, useState } from "react";
import { getInvoicesById } from "../api";

const InvoiceDetails = () => {
  const { invoiceId } = useParams();
  console.log(invoiceId)
  const [invoice, setInvoice] = useState(null);

  useEffect(() => {
    getInvoicesById(invoiceId).then(setInvoice)
  }, [invoiceId])

  if (!invoice) {
    return null
  }

  const {recipient, account, total, date} = invoice

  return (
    <Box>
      <p>Client name: {recipient}</p>
      <p>Account number: {account}</p>
      <p>Total sum: {total}</p>
      <p>Invoice date: {new Date(date.created).toLocaleDateString()}</p>
      <p>Due date: {new Date(date.due).toLocaleDateString()}</p>
    </Box>
  );
};

export default InvoiceDetails