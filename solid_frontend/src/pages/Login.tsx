import { Component, createSignal } from "solid-js";
import { useUserContext } from "../context/UserProvider";
import { useNavigate } from "@solidjs/router";

export const Login: Component = () => {
  const { userName, setUserName } = useUserContext();
  const [localUserName, setLocalUserName] = createSignal<string>(userName());
  const navigate = useNavigate();
  return (
    <>
      <h1>{localUserName()}</h1>
      <input
        type="text"
        name="login"
        value={localUserName()}
        oninput={(event) => setLocalUserName(event.target.value)}
        onchange={() => {
          setUserName(localUserName());
          navigate("/chat");
        }}
      />
    </>
  );
};
