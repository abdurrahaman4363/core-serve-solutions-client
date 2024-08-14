import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/SignUp";
import Dashboard from "../Layout/Dashboard";
// import PrivateRoute from "./PrivateRoute";
import User from "../Pages/Dashboard/User/User";
import Services from "../Pages/Dashboard/Services/Services";
import Blog from "../Pages/Dashboard/Blog/Blog";
import Invoice from "../Pages/Dashboard/Invoice/Invoice";
import Upload from "../Pages/Dashboard/Upload/Upload";
import About from "../Pages/About/About/About";
import Contact from "../Pages/Contact/Contact/Contact";
import Products from "../Pages/Dashboard/Products/Products";
import OurService from "../Pages/OurService/OurService/OurService";
import OurProduct from "../Pages/OurProduct/OurProduct/OurProduct";
import Guides from "../Pages/Guides/Guides/Guides";
import SingleService from "../Pages/SingleService/SingleService/SingleService";
import UpdateDashboardBlog from "../Pages/Dashboard/UpdateDashboardBlog/UpdateDashboardBlog";
import axios from "axios";
import UpdateDashboardServices from "../Pages/Dashboard/UpdateDashboardServices/UpdateDashboardServices";
import UpdateDashboardProducts from "../Pages/Dashboard/UpdateDashboardProducts/UpdateDashboardProducts";
import SingleProduct from "../Pages/SingleProduct/SingleProduct/SingleProduct";
import SingleGuide from "../Pages/SingleGuide/SingleGuide/SingleGuide";
import DashboardAnalytics from "../Pages/Dashboard/DashboardAnalytics/DashboardAnalytics";
import Profile from "../Pages/Profile/Profile";
import ProfileUpdate from "../Pages/Profile/ProfileUpdate";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'our_service',
        element: <OurService></OurService>
      },
      {
        path: 'our_product',
        element: <OurProduct></OurProduct>
      },
      {
        path: 'guides',
        element: <Guides></Guides>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      },
      {
        path: 'single_service/:id',
        element: <SingleService></SingleService>
      },
      {
        path: 'single_product/:id',
        element: <SingleProduct></SingleProduct>
      },
      {
        path: 'single_guide/:id',
        element: <SingleGuide></SingleGuide>
      },
      {
        path: 'login',
        element: <Login></Login>,
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>,
      },
      {
        path: 'profile',
        element: <Profile></Profile>,
      },
      {
        path: 'profile/profileUpdate',
        element: <ProfileUpdate></ProfileUpdate>,
      },
    ],
  },
  {
    path: 'dashboard',
    // element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'user',
        element: <User></User>,
      },

      {
        path: 'services',
        element: <Services></Services>,
      },
      {
        path: 'blog',
        element: <Blog></Blog>,
      },
      {
        path: 'invoice',
        element: <Invoice></Invoice>,
      },
      {
        path: 'upload',
        element: <Upload></Upload>,
      },
      {
        path: 'products',
        element: <Products></Products>,
      },
      {
        path: 'updateBlog/:blogId',
        element: <UpdateDashboardBlog />,
        loader: async ({ params }) => (await axios.get(`https://energy-project-server.vercel.app/blogs/${params.blogId}`)).data,
      },
      {
        path: 'updateServices/:servicesId',
        element: <UpdateDashboardServices />,
        loader: async ({ params }) => (await axios.get(`https://energy-project-server.vercel.app/services/${params.servicesId}`)).data,
      },
      {
        path: 'updateProducts/:productsId',
        element: <UpdateDashboardProducts />,
        loader: async ({ params }) => (await axios.get(`https://energy-project-server.vercel.app/products/${params.productsId}`)).data,
      },
      {
        path: '',
        element: <DashboardAnalytics></DashboardAnalytics>,
      },
      
    
],
  },
]);
