import React from "react";

function Register() {
  const [inputEmail, setInputEmail] = React.useState("");
  const [inputPassword, setInputPassword] = React.useState("");

  const onChangeHandler_email = event => {
   setInputEmail(event.target.value);
  };

  const onChangeHandler_pass = event => {
    setInputPassword(event.target.value);
   };
  
  return (
    <html>
      <body>
        <br/><br/><br/><br/><br/><br/>  
        <div class="container" >
          <div id="col0">
            <h1>REGISTER</h1>
              <form action="/home">
                <p class="thick">Username or Email address</p>
                <input
                type="email"
                name="useremail"
                placeholder="example@gmail.com"
                onChange={onChangeHandler_email}
                value={inputEmail}
                />
                <br/>
                <br/>
                <p class="thick">Password</p>
                <input
                type="password"
                name="password"
                placeholder="must have at least one uppercase, one number, and a symbol."
                onChange={onChangeHandler_pass}
                value={inputPassword}
                />
                <br/>
                <br/>
              </form>
              <form action="/createaccount">
              <input type="submit" value="Create Account"></input>
              </form>
          </div>
        </div>
      </body>
    </html>
    
  );
}

export default Register;