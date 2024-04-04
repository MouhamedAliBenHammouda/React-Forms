import Input from "./Input.jsx";
import { hasMinLength, isEmail } from "../util/validation.js";
import { useInput } from "../hooks/useInput.js";

export default function Login() {
  const{
    value:emailValue,
    handleInputChange:handleEmailChange,
    handleInputBlur:handleEmailBlur,
    hasError:emailHasError
  }= useInput('',isEmail);
  const{
    value:passwordValue,
    handleInputChange:handlepasswordChange,
    handleInputBlur:handlepasswordBlur,
    hasError:passwordHasError
  }= useInput('',(value)=>hasMinLength(value,6));

  function handleSubmit(event){
    
    event.preventDefault();
    if(emailHasError||passwordHasError){
      return;
    }
    console.log(emailValue,passwordValue);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input 
        label="Email"
        id="email"
        type="email" 
        name="email" 
        onBlur={handleEmailBlur}
        onChange={handleEmailChange}
        value={emailValue}
        error={emailHasError&&'please entre a valid Email'}
        />
        <Input 
        label="Password"
        id="password" 
        type="password" 
        name="password" 
        onBlur={handlepasswordBlur}
        onChange={handlepasswordChange}
        value={passwordValue}
        error={passwordHasError&&'please entre a valid Password'}
        />
        
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button  className="button" >Login</button>
      </p>
    </form>
  );
}
