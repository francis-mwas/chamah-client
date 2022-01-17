import React, { createContext } from 'react';

const UsersContext = createContext();

function UsersContextProvider(props) {
  const [users, setUsers] = useState([]);
}

export default { UsersContextProvider };
