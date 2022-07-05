import { useAuth0 } from '@auth0/auth0-react';
import './App.css';

function App() {
  const { loginWithPopup, loginWithRedirect, logout, user, isAuthenticated } =
    useAuth0();
  return (
    <div className="container">
      <h1 className="display-1">Auth0 Authentication</h1>
      <ul className="list-unstyled">
        <li>
          <button className="btn" onClick={loginWithPopup}>
            Login with Popup
          </button>
        </li>
        <li>
          <button className="btn" onClick={loginWithRedirect}>
            Login with Redirect"
          </button>
        </li>
        <li>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </li>
      </ul>
      <h3>User is {isAuthenticated ? 'logged in' : 'not logged in'}</h3>
      {isAuthenticated && <p>{JSON.stringify(user, null, 2)}</p>}
    </div>
  );
}

export default App;
