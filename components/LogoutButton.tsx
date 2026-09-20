import { logoutAction } from '../app/logout/actions';

export default function LogoutButton() {
  return (
    <form action={logoutAction}>
      <button type="submit" className="logout-button">
        Logout
      </button>
    </form>
  );
}