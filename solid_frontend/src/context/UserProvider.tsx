import {
  Accessor,
  Component,
  Setter,
  createContext,
  createSignal,
  useContext,
} from "solid-js";

type User = { userName: Accessor<string>; setUserName: Setter<string> };

const [userName, setUserName] = createSignal<string>("");
const UserContext = createContext<User>({ userName, setUserName });

export const UserProvider: Component = (props: any) => {
  const ret: User = { userName, setUserName };
  return (
    <UserContext.Provider value={ret}>{props.children}</UserContext.Provider>
  );
};

export function useUserContext() {
  return useContext(UserContext);
}
