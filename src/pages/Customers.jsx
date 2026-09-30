import { useEffect, useState } from "react";
import { Box } from "../components/Box";
import { getCustomers } from "../api";
import { SearchBox } from "../components/SearchBox";
import { useSearchParams } from "react-router-dom";

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  // ?filter=Mischa+Hopkins
  const filterParams = searchParams.get('filter');
  console.log(filterParams)
  const changeFilter = (value) => {
    setSearchParams(value !== "" ? { filter: value } : {});
  };

  useEffect(() => {
    getCustomers().then(setCustomers);
  }, []);

  return (
    <Box>
      <SearchBox onChange={changeFilter} />
      {customers.length > 0 && (
        <ul>
          {customers.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      )}
    </Box>
  );
};

export default Customers;
