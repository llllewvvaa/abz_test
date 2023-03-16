import './Form.scss';
import React, {ChangeEvent, useEffect, useState} from "react";
import {getAllPositions} from "../../api/api";
import {Position} from "../../types/types";
import {TextField} from "@mui/material";

export const Form = () => {
  const [positions, setPositions] = useState<Position[]>();
  const [positionId, setPositionId] = useState<number>(1);
  const [formName, setFormName] = useState<string>('');
  const [isFormNameError, setIsFormNameError] = useState<boolean>(false);
  const [formEmail, setFormEmail] = useState<string>('');
  const [isFormEmailError, setIsFormEmailError] = useState<boolean>(false);
  const [formPhone, setFormPhone] = useState<string>('');
  const [isFormPhoneError, setIsFormPhoneError] = useState<boolean>(false);
  const [avatar, setAvatar] = useState<File>();

  useEffect(() => {
    getAllPositions('/positions')
      .then(response => setPositions(response.positions))
  }, [])

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAvatar(e.target.files[0]);
    }
  };

  const handleUploadClick = () => {
    if (!avatar) {
      return;
    }
  }

  return (
    <section className="form" id="form">
      <h1 className="form__title">
        Working with POST request
      </h1>

      <form action="" className="form__shape">
        <TextField
          label="Your name"
          error={isFormNameError}

          fullWidth
          variant="outlined"
          style={
            {
              borderRadius: "4px",
              height: "54px",
              marginBottom: "50px",
            }
          }

          value={formName}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setFormName(event.target.value);
          }}
        />


        <TextField
          label="Email"
          type="email"

          error={isFormEmailError}
          fullWidth
          variant="outlined"
          style={
            {
              borderRadius: "4px",
              height: "54px",
              marginBottom: "50px",
            }
          }

          value={formEmail}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setFormEmail(event.target.value);
          }}
        />

        <TextField
          label="Phone"
          type="tel"
          helperText="+38 (XXX) XXX - XX - XX"

          error={isFormPhoneError}
          fullWidth
          variant="outlined"
          style={
            {
              borderRadius: "4px",
              height: "54px",
              marginBottom: "50px",
            }
          }

          value={formPhone}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setFormPhone(event.target.value);
          }}
        />

        <div className="form__shape-positions">
          <h4 className="form__shape-positions__title">
            Select your position
          </h4>

          <div className="form__shape-positions__options">
            {
              positions?.map((position) => (
                <label
                  className="form__shape-positions__option"
                  key={position.id}
                >
                  <input
                    className="form__shape-positions__option--radio"
                    checked={position.id === positionId}
                    type="radio"
                    name={"positions"}
                    onChange={() => {
                      setPositionId(position.id);
                    }}
                  />
                  {position.name}
                </label>
              ))
            }
          </div>
        </div>
      </form>
    </section>
  )
}
