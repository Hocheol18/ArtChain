import { useState } from "react";
import Agreement from "../components/Login/Agreement";
import Oauth from "../components/Login/Oauth";

export default function UserEnrollWithOauth() {
  const [isAgree, setisAgree] = useState<boolean>(true);

  return <>{isAgree ? <Agreement setisAgree={setisAgree} /> : <Oauth />}</>;
}
