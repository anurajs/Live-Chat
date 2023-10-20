import { Component } from 'solid-js';
import { useUserContext } from '../context/UserProvider';

export const Chat: Component = () => {
  const { userName } = useUserContext();
  return (
    <>
      <p>Your username is: {userName()}</p>
      <ul>
        <li>first message</li>
      </ul>
    </>
  );
};
