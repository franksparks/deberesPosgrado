"use client";
import { ChangeEventHandler, useState } from "react";

type User = {
  name: string;
  age: number;
};

const initialUser = {
  name: "John Doe",
  age: 10,
};

export default function EditUser() {
  //const [name, setName] = useState("John Doe");
  //const [age, setAge] = useState(0);
  const [user, setUser] = useState<User>(initialUser);

  const changeName: ChangeEventHandler<HTMLInputElement> = (e) => {
    setUser((prev) => ({
      ...prev,
      name: e.target.value,
    }));
    //setUser({ name: e.target.value, age: user.age });
  };

  const changeAge: ChangeEventHandler<HTMLInputElement> = (e) => {
    setUser({ name: user.name, age: Number(e.target.value) });
  };

  return (
    <>
      <h2>Edit User component</h2>
      <form>
        <p>
          <input type="text" name="name" onChange={changeName} />
        </p>
        <p>
          <input type="number" name="age" onChange={changeAge} />
        </p>
        <div>Name: {user.name}</div>
        <div>Age: {user.age}</div>
      </form>
    </>
  );
}
