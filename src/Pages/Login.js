import React, {useState} from 'react';



function Login() {
  
  const [inputEmail, setInputEmail] = React.useState("");
  const [inputPassword, setInputPassword] = React.useState("");

  const onChangeHandler_email = event => {
   setInputEmail(event.target.value);
  };

  const onChangeHandler_pass = event => {
    setInputPassword(event.target.value);
   };

  function login_email(){
    document.getElementById("mailshow").innerHTML= "Logged in as: "+inputEmail;
  };

  
  return (
  
  

    <html>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </head>
      <body>

        <br/><br/><br/><br/><br/><br/> 
        
        <div class="containermain" >
          <div id="col0">
            <h1>My Account</h1>
            
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
                  <input type="checkbox" id="lname" name="lname"></input>
                  <label class="thick"> Remember me</label><br/><br/>
                <input type="submit" value="Login" onClick={login_email}></input>
              </form>
              <br/>
              <p class="register"> No account?<br/>Register.</p><br/>
              <div class="info">
              <a class="register" href="/Register">Click here to Register.</a></div>
          </div>
            <div id="col1">
              <br/>
              <br/>
              <p class="thick">or sign in with</p>
              <div class="containercol">
                <form action="/home.js">
                  <div class="row">
                    <div class="col">
                      <a href="#" class="fb btn">
                        <i class="fa fa-facebook-official fa-fw"></i> |  Login with Facebook
                      </a>
                        <a href="#" class="git btn"><i class="fa fa-gitlab fa-fw"></i> | Login with GITlab
                      </a>
                        <a href="#" class="google btn"><i class="fa fa-google-plus fa-fw"></i> | Login with Google
                        </a>
                      <a href="#" class="twitter btn">
                        <i class="fa fa-twitter fa-fw"></i> | Login with Twitter
                      </a>
                      <a href="#" class="linkedin btn">
                        <i class="fa fa-underline fa-fw"></i><i class="fa fa-codiepie fa-fw"></i> Login with University of Cebu
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div id="col2">
              <h1 id="mailshow"></h1>
            </div>
        </div>
      </body>
    </html>
    
  );
}

export default Login;