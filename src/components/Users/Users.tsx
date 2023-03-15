import './Users.scss';
import {useEffect, useState} from "react";
import {getAllUsers} from "../../api/users";
import {User} from "../../types/types";
import {UserCard} from "../UserCard";
import {Button} from "../Button";

export const Users = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getAllUsers()
      .then(response => setUsers(response.users))
  }, []);

  console.log(users);

  return (
    <section className="users">
      <h1 className="users__title">
        Working with GET request
      </h1>

      <div className="users__list">
        {
          users.map((user: User) => (
            <UserCard user={user} key={user.id} />
          ))
        }
      </div>

      <Button text={'Show more'} width={'120px'} />
    </section>
  )
}
