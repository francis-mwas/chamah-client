import React, { createContext, useState } from 'react';

const ContributionProvider = createContext();

function ContributionsContextProvider() {
  const [contributions, setContributions] = useState([]);
}

export { ContributionsContextProvider };
