import { useState } from "react";
import Agreement from "../components/Login/Agreement";
import Business from "../components/Login/Business";

export default function BusinessEnroll() {
    const [isAgree, setisAgree] = useState<boolean>(true);
    return (
        <>{isAgree ? <Agreement setisAgree={setisAgree} /> : <Business />}</>
    )
}