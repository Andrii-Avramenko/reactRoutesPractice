import { Route, Routes } from "react-router-dom"
import { GlobalStyle } from "./components/globalStyle"
import { Layout } from "./components/Layout"
import Sales from "./pages/Sales"
import Invoices from "./components/Invoices"
import InvoiceDetails from "./components/InvoiceDetails"
import Customers from "./pages/Customers"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<div>Home page</div>}/>
          <Route path="dashboard" element={<div>Dashboard</div>}/>
          
          <Route path="sales" element={<Sales />}>
            <Route index element={<div>Sales index route</div>} />
            <Route path="analytics" element={<div>Analytics page</div>} />
            <Route path="deposits" element={<div>Deposits page</div>} />
            <Route path="invoices" element={<Invoices />}>
              <Route index element={<div>Invoice index route</div>} />
              <Route path=":invoiceId" element={<InvoiceDetails />} />
            </Route>
          </Route>

          <Route path="reports" element={<div>Reports</div>}/>
          <Route path="feedback" element={<div>Feedback page</div>}/>
          <Route path="customers" element={<Customers />}/>
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  )
}

export default App
