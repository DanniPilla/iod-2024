import { useState } from "react";
import { useUserContext } from "../context/UserContext"
import { useContext } from "react";
import {MyThemeContext} from '../context/MyThemeContext'
import ThemeSwitcher from '../components/ThemeSwitcher'
import { TextField, Checkbox, Select, MenuItem, Button } from "@mui/material";
import { FormControl, FormControlLabel, InputLabel } from "@mui/material";

function LoginForm() {
  const {theme, darkMode} = useContext(MyThemeContext);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [submitResult, setSubmitResult] = useState("");
  // destructure the context values passed via UserProvider
  const { currentUser, handleUpdateUser } = useUserContext();
  // alternative using the useContext hook directly, either works
  //const {currentUser, handleUpdateUser} = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userPassword.length < 5) {
      setSubmitResult("Password must be at least 5 chars long");
    } else if (userPassword === userEmail) {
      setSubmitResult("Password must not match email address");
    } else {
      setSubmitResult("Successful login.");
      handleUpdateUser({ email: userEmail }); // context function
    }
  };
  {
    /* if the user is already logged in, show msg instead of form */
  }
  if (currentUser.email)
    return (
      <>
        <p>Welcome {currentUser.email}!</p>
        <button onClick={() => handleUpdateUser({})}>Log Out</button>
      </>
    );

    
  return (

    <div className="LoginForm componentBox"
style={{background: theme.background, color: theme.foreground}}>
      <ThemeSwitcher/>
      <form onSubmit={handleSubmit}>
        <div>
          <InputLabel>
            Email:
            <input
              type="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              required
            />
           </InputLabel>
        </div>
        <div>
          <InputLabel>
            Password:
            <input
              type="password"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              required
            />
          </InputLabel>
        </div>
       <Button variant="contained">Submit</Button>
      </form>
      {submitResult && <p>{submitResult}</p>}
    </div>
  );
}
export { LoginForm };
