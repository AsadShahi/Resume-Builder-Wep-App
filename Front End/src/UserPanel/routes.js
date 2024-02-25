//admin panel imports compenents

import AdminPage from "./pages/AdminPage/UserpanelPage";

import HomeUser from "./pages/home/HomeUser";



import Ticket from "./pages/Ticket/Ticket";
import Products from "./pages/ResumesUser/ResumeUser";
import ChangePassword from "./pages/changePassword/ChangePassword";
import Inforamtion from "./pages/inforamtion/Inforamtion";
import UserWallet from "./pages/wallet/UserWallet";
import ResumeUser from "./pages/ResumesUser/ResumeUser";

let routesAdmin = [
  { path: "/HomeUser", element: <HomeUser/> },


 
  { path: "/productsPanel", element: <Products/> },
  { path: "/ticket", element: <Ticket/> },
  { path: "/userwallet", element: <UserWallet/> },
  { path: "/changePassword", element: <ChangePassword /> },
  { path: "/inforamtion", element: <Inforamtion /> },
  { path: "/resumeuser", element: <ResumeUser /> },

];

export default routesAdmin;
