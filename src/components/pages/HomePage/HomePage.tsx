import {Header} from "../../Header";
import {Banner} from "../../Banner";
import {Users} from "../../Users";
import {Form} from "../../Form";
import {useState} from "react";

export const HomePage = () => {
  const [isUpdated, setIsUpdated] = useState(false);

  return (
    <>
      <Header />
      <Banner />

      <div className="main-container">
        <Users isUpdated={isUpdated} />
        <Form setIsUpdated={setIsUpdated} />
      </div>
    </>
  )
}
