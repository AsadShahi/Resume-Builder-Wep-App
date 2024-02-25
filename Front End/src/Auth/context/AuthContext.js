import { createContext, useContext, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // it is for if we have user hide login and register
  const [passwordError, setPasswordError] = useState("");
  const [registerError, setRegisterError] = useState([]);
  const [loginError, setLoginError] = useState("");

  //this is for admin loginpage and admin panel
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [authToken, setAuthToken] = useState(null);


  const adminLogin=(adminToken)=>{
    setIsAuthenticated(true); //
    setAuthToken(adminToken); //it is recieved from login admin panel
  }

 const adminLogout=(()=>{

  setIsAuthenticated(false);
  setAuthToken(null);
  localStorage.removeItem('adminName');

 })

 const checkAthenticationAdmin=()=>{
  if(authToken){
    setIsAuthenticated(true)
  }else{
    setIsAuthenticated(false);
  }
 }


 

  //for getting scrf token from server
  const csrf = () => axios.get("/sanctum/csrf-cookie");
  const navigate = useNavigate();

  //for saving on local storage

  const getUser = async () => {
    const { data } = await axios.get("/api/user"); //put user url to data object
    setUser(data); //set data to state

    // Wait for setUser to complete before accessing user object
    // await new Promise(resolve => setTimeout(resolve, 0));

    const user_ID = data?.id;
    const user_name = data?.name;
    const user_email = data?.email;
    localStorage.setItem("user_ID", user_ID);
    localStorage.setItem("user_name", user_name);
    localStorage.setItem("email", user_email);

    // return data; // return the user object
  };

  const login = async ({ ...data }) => {
    await csrf();
    try {
      await axios.post("/login", data);
      await getUser(); //for getting user from server

      navigate("/userpanelPage/inforamtion");
    } catch (errors) {
      if (errors.response.status === 422) {
        setLoginError(errors.response.data.errors);
        setTimeout(() => {
          setLoginError("");
        }, 6000);
      }
    }
  };

  const registers = async ({ ...data }) => {
    try {
      await axios.post("/register", data);

      await getUser(); //for getting user form server
      
           navigate('/userpanelPage/inforamtion');

      // .then((res) => {
      //   if (res.status === 201) {
      //   }
      // })
    } catch (errors) {
      if (errors.response.status === 422) {
        setRegisterError(errors.response.data.errors);
        setTimeout(() => {
          setRegisterError(['']);
        }, 5000);
        
      }
    }
  };

  const logout = () => {
    axios.post("/logout").then(() => {
      setUser(null);
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loginError,
        registerError,
        getUser,
        login,
        registers,
        logout,
        csrf,
        adminLogin,
        isAuthenticated,
        authToken,
        checkAthenticationAdmin,adminLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuthContext() {
  return useContext(AuthContext);
}
