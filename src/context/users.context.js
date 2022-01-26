import React, { createContext } from 'react';

const UserAuthContext = createContext();
const AuthDispatchContext = createContext();

function AuthContextProvider(props) {
  const [users, setUsers] = useState([]);
}

export default { AuthContextProvider, UserAuthContext, AuthDispatchContext };
