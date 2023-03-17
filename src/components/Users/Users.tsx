import './Users.scss';
import React, {CSSProperties, useEffect, useState} from "react";
import {getAllUsers} from "../../api/api";
import {User} from "../../types/types";
import {UserCard} from "../UserCard";
import {Button} from "../Button";
import SyncLoader from "react-spinners/ClipLoader";

interface Props {
  isUpdated: boolean;
}

export const Users: React.FC<Props> = ({isUpdated}) => {
  const [users, setUsers] = useState<User[]>([]);
  const [url, setUrl] = useState('/users?count=6');
  const [isButtonHidden, setIsButtonHidden] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "#36d7b7",
  };

  useEffect(() => {
    setIsLoading(true);

    getAllUsers(url)
      .then(response => {
        if (response.links.next_url === null) {
          setIsButtonHidden(true)

          return;
        }

        if (url !== '/users?count=6') {
          setUsers(prevState => [
            ...prevState,
            ...response.users,
          ])
        } else {
          setUsers(response.users);
        }


        setIsLoading(false);
        console.log('rerender')
        
      })
  }, [url, isUpdated]);


  const onShowMore = () => {
    getAllUsers(url)
      .then(response => {
        setUrl(response.links.next_url.split('v1')[1])
      })
  }

  return (
    <section className="users" id="users">
      <h1 className="users__title">
        Working with GET request
      </h1>

      <div className="users__list">
        {
          isLoading ? (
            <SyncLoader
              loading={isLoading}
              cssOverride={override}
            />
          ) : (
            <>
              {
                users.map((user: User) => (
                  <UserCard user={user} key={user.id} />
                ))
              }
            </>
          )
        }
      </div>

      {
        !isButtonHidden && (
          <div className="users__btn">
            <div
              className="users__btn-click"
              onClick={onShowMore}
            >
              <Button
                text={'Show more'}
                width={'120px'}
                type={"button"}
              />
            </div>
          </div>
        )
      }
    </section>
  )
}
