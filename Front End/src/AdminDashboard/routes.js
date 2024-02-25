//admin panel imports compenents

import AdminPage from "./pages/AdminPage/AdminPage";

import AdminHome from "./pages/home/Home";
import NewUser from "./pages/addAdmin/AddAdmin";
import UserList from "./pages/userList/UserList";
import ContactList from "./pages/contact/ContactList";
import Products from "./pages/products/Products";
import NewsLetter from "./pages/newsLetter/NewsLetter";
import Admin from "./pages/admins/Admin";
import TestimonialCreate from "./pages/testimonial/TestimonialCreate";


let routesAdmin = [
  { path: "/", element: <AdminHome/> },

  { path: "/userLists", element: <UserList/> },
  { path: "/newadmin", element: <NewUser/> },
  { path: "/productsPanel", element: <Products/> },
  { path: "/contactList", element: <ContactList/> },
  { path: "/newsLetter", element: <NewsLetter /> },
  { path: "/adminlist", element: <Admin /> },
  { path: "/TestimonialCreate", element: <TestimonialCreate /> },
];

export default routesAdmin;
