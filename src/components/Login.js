import React,{useState} from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './loginstyle.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () =>{

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(validate()){
      //alert("Good Work");

      fetch("http://localhost:8080/login/byId/"+username).then((res)=>{
        return res.json();
      }).then((resp)=>{
        //console.log(resp);

        if(Object.keys(resp).length === 0){
          alert("Please enter valid username");
        }else{
          if(resp.password === password){
              //alert("success")
              //history.push('/dashboard');
              localStorage.setItem("username",username);

              if(resp.role === 'customer'){
                //history.push('/user-dash');
                toast.success("Login successfull", {
                  className: "toast-success",
                  position: toast.POSITION.TOP_RIGHT,
                  autoClose: 5000,
                });

                setTimeout(() => {
                  history.push('/user-dash');
                }, 3000);
              }
              if(resp.role === 'admin'){
                toast.success("Login successfull", {
                  className: "toast-success",
                  position: toast.POSITION.TOP_RIGHT,
                  autoClose: 5000,
                });
                //history.push('/dashboard');
                              // Delay for 3 seconds (3000 milliseconds)
              setTimeout(() => {
                history.push("/dashboard");
              }, 3000);
            }
              
          }else{
            alert("Please enter valid password");
          }
        }
      }).catch((err)=>{
        //alert("Error"+err);
        toast.error("Invalid user ", {
          className: "toast-error",
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000,
        });
      });
    }
  }


  const validate = () =>{
    let result = true;

    if(username ==='' || username ===null){
      result = false;
      alert("Enter username");
    }

    if(password ==='' || password ===null){
      result = false;
      alert("Enter Password");
    }

    return result;
  }

    return(
        <div className="login-form-container">
        <ToastContainer />
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        id="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} id="password" />
          </div>
          <button type="submit">Login</button>
          <p>
          Does not have an account?<b><a href='/register'> Register here</a></b> 
        </p>
        
        </form>
      </div>

    );
}

export default Login;