import React, { createContext } from 'react';

const UserContext = createContext();

function UserContextProvider(props) {
  const [users, setUsers] = useState([]);
}

export default { UserContextProvider };
