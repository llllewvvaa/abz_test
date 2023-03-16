import {Header} from "../../Header";
import {Banner} from "../../Banner";
import {Users} from "../../Users";
import {Form} from "../../Form";

export const HomePage = () => (
  <>
    <Header />
    <Banner />

    <div className="main-container">
      <Users />
      <Form />
    </div>
  </>
)
