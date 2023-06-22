import { logout } from "../components/Auth";

export const HomeView: React.FC = () => {
  return (
    <>
      <h1>This is home</h1>
      <button type="button" onClick={logout}>
        Logout
      </button>
    </>
  );
};

export default HomeView;
