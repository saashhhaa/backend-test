import { useLocation } from "react-router-dom";

export const Homepage = () => {
  const location = useLocation();
  const { username } = location.state || {};

  return (
    <>
      <p>Привет, {username}!</p>
      <p>Я типя лбплюю</p>
    </>
  );
};
// 