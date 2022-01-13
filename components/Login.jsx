import styles from "../styles/Login.module.css";
import profile from "../assets/profile.png";
import Image from "next/image";
import NavBar from "./NavBar";
import { useMoralis } from "react-moralis";

function Login() {
  const {authenticate,authError} = useMoralis();

  return (
    <div className="gradient-bg-transaction">
      <NavBar />
      <div className="h-screen  grid items-center justify-center">
        <div className='"bg-white rounded-3xl flex flex-col p-5  w-11/12 "' >
          <Image src={profile} width={80} height={80} className="rounded-full border-4 border-red-400" alt="" />
          <div className="mt-5">
            {
              authError &&( 
              <div className="text-red-500 flex flex-row flex-1 p-3 justify-center items-center">
                <p>{authError.name}</p>
                <p>{authError.message}</p>
              </div>)
            }
            <button 
            className=" px-7 flex flex-1 mt-5 flex-col items-center text-3xl p-3 bg-yellow-400 rounded-full"
            onClick={authenticate}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
