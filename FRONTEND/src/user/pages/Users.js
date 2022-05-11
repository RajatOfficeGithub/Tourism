import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Test User',
      image:
        'https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg',
      places: 3
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
