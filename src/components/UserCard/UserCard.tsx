import './UserCard.scss';
import {User} from "../../types/types";
import React, {memo} from "react";
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css';

interface Props {
  user: User;
}

export const UserCard: React.FC<Props> = memo(({user}) => {
  const {
    name,
    phone,
    photo,
    position,
    email,
  } = user;


  return (
    <>
    <div className="user-card">
      <img src={photo} alt="user" className="user-card__image"/>

      <h3
        className="user-card__name"
        data-tooltip-id="my-tooltip"
        data-tooltip-content={name}
      >
        {name}
      </h3>

      <div className="user-card__info">
        <p className="user-card__info-position"
           data-tooltip-id="my-tooltip"
           data-tooltip-content={position}>
          {position}
        </p>

        <a
          href={`mailto:${email}`}
          className="user-card__info-email"
          data-tooltip-id="my-tooltip"
          data-tooltip-content={email}
        >
          {email}
        </a>

        <a
          href={`tel:+${phone}`}
          className="user-card__info-phone"
          data-tooltip-id="my-tooltip"
          data-tooltip-content={phone}
        >
          {phone}
        </a>
      </div>
    </div>

      <Tooltip
        id="my-tooltip"
        clickable
      />
    </>
  );
});
