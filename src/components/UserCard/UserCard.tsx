import './UserCard.scss';
import {User} from "../../types/types";
import React from "react";

interface Props {
  user: User;
}

export const UserCard: React.FC<Props> = ({user}) => {
  const {
    name,
    phone,
    photo,
    position,
    email,
  } = user;

  return (
    <div className="user-card">
      <img src={photo} alt="user" className="user-card__image"/>

      <h3 className="user-card__name">
        {name}
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