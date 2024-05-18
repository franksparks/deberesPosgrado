export type User = {
  email: string;
  name: {
    first: string;
    last: string;
  };
  picture: {
    thumbnail: string;
  };
};

export const loadUsers = async () => {
  const response = await fetch("https://randomuser.me/api/?results=10");
  const { results: users } = await response.json();
  return users as User[];
};
