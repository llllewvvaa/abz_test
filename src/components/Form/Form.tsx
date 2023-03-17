import './Form.scss';
import React, {ChangeEvent, useEffect, useState} from "react";
import {getAllPositions, getToken} from "../../api/api";
import {Position} from "../../types/types";
import {TextField} from "@mui/material";
import {Button} from "../Button";
import {BASE_URL} from "../../api/fetchCli";

interface Props {
  setIsUpdated: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Form: React.FC<Props> = ({setIsUpdated}) => {
  const [positions, setPositions] = useState<Position[]>();
  const [positionId, setPositionId] = useState<number>(1);
  const [formName, setFormName] = useState<string>('');
  const [isFormNameError, setIsFormNameError] = useState<boolean>(false);
  const [formEmail, setFormEmail] = useState<string>('');
  const [isFormEmailError, setIsFormEmailError] = useState<boolean>(false);
  const [formPhone, setFormPhone] = useState<string>('');
  const [isFormPhoneError, setIsFormPhoneError] = useState<boolean>(false);
  const [avatar, setAvatar] = useState<File>();
  const [token, setToken] = useState<string>('');

  useEffect(() => {
    getAllPositions('/positions')
      .then(response => setPositions(response.positions))

    getToken('/token')
      .then(response => setToken(response.token))
  }, [])

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAvatar(e.target.files[0]);
    }
  };

  const nameValidation = (event: React.ChangeEvent<HTMLInputElement>) => {
    const regex = new RegExp('^[\\w\'\\-,.][^0-9_!¡?÷?¿/\\\\+=@#$%ˆ&*(){}|~<>;:[\\]]{2,}$')

    if (!regex.test(event.target.value)
      || event.target.value.length < 2
      || event.target.value.length > 60) {
      setIsFormNameError(true);
    } else {
      setIsFormNameError(false);
    }
  }

  const emailValidation = (event: React.ChangeEvent<HTMLInputElement>) => {
    const regex = new RegExp('^(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])$')

    if (!regex.test(event.target.value)) {
      setIsFormEmailError(true);
    } else {
      setIsFormEmailError(false);
    }
  }

  const phoneValidation = (event: React.ChangeEvent<HTMLInputElement>) => {
    const regex = new RegExp('^[\\+]{0,1}380([0-9]{9})$')

    if (!regex.test(event.target.value)) {
      setIsFormPhoneError(true);
    } else {
      setIsFormPhoneError(false);
    }
  }

  const clearData = () => {
    setAvatar(undefined);
    setToken('');
    setFormName('')
    setFormEmail('')
    setFormPhone('')
    setPositionId(1);
  }

  const handleSubmit = async () => {
    const formData:any = new FormData();
    formData.append('name', formName);
    formData.append('email',formEmail);
    formData.append('phone', formPhone);
    formData.append('position_id', String(positionId));
    formData.append('photo', avatar, `${avatar?.name}`);

    await fetch(`${BASE_URL}/users`, {
      method: 'POST',
      mode: 'cors',
      body: formData,
      headers: {
        'Token': token
      }
    })

    setIsUpdated(true)
    clearData();
  }

  return (
    <section className="form" id="form">
      <h1 className="form__title">
        Working with POST request
      </h1>

      <form
        action={`${BASE_URL}/users`}
        className="form__shape"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
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

            setTimeout(() => {
              nameValidation(event);
            }, 1500)
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

            setTimeout(() => {
              emailValidation(event);
            }, 1500)
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

            setTimeout(() => {
              phoneValidation(event);
            }, 1500)
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

        <label
          htmlFor="inputTag"
          className="form__shape-upload-label"
        >
          <span className="form__shape-upload-label__text">
            Upload
          </span>

          <span className="form__shape-upload-label__photo">
            {
              avatar?.name ? (
                avatar.name
              ) : (
                <>
                  Upload your photo
                </>
              )
            }
          </span>

          <input
            type="file"
            id="inputTag"
            className="form__shape-upload-input"
            onChange={handleFileChange}
          />
        </label>

        <div className="form__shape-submit">
          <Button
            width={"100px"}
            text={"Sign up"}
            type={"submit"}
            onSubmit={handleSubmit}
            disabled={!formPhone || !formName || !formPhone || !avatar || positionId === 0}
          />
        </div>
      </form>
    </section>
  )
}
