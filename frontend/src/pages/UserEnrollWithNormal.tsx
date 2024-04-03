import { useState } from "react";
import Agreement from "../components/Login/Agreement";
import Normal from "../components/Login/Normal";
export default function UserENrollWIthNormal() {
  const [isAgree, setisAgree] = useState<boolean>(true);

  return <>{isAgree ? <Agreement setisAgree={setisAgree} /> : <Normal />}</>;
}
