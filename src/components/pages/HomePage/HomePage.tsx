import {Header} from "../../Header";
import {Banner} from "../../Banner";
import {Users} from "../../Users";

export const HomePage = () => (
  <>
    <Header />
    <Banner />

    <div className="main-container">
      <Users />
    </div>
  </>
)
