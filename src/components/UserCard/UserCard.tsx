import './UserCard.scss';
import {User} from "../../types/types";
import React from "react";
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css';

interface Props {
  user: User;
  users: User[];
}

export const UserCard: React.FC<Props> = ({user, users}) => {
  const {
    id,
    name,
    phone,
    photo,
    position,
    email,
  } = user;

  const currentUser = users.find((u) => u.id === id);
  console.log(id, currentUser);

  return (
    <div className="user-card">
      <img src={photo} alt="user" className="user-card__image"/>

      <h3
        className="user-card__name"
      >
        {name}
        <Tooltip
          anchorSelect=".user-card__name"
          content={currentUser?.name}
        />
      </h3>

      <div className="user-card__info">
        <p className="user-card__info-position">
          {position}
        </p>

        <a href={`mailto:${email}`} className="user-card__info-email">
          {email}
        </a>

        <a href={`tel:+${phone}`} className="user-card__info-phone">
          {phone}
        </a>
      </div>
    </div>
  );
}
