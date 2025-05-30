import "./assets/tailwind.css";
import React from "react";
import { Suspense } from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Loading from "./components/Loading";
import AuthLayout from "./layouts/AuthLayout";

const NotFound = React.lazy(() => import("./pages/NotFound"))

const GuestLayout = React.lazy(() => import("./layouts/GuestLayout"))
const Home = React.lazy(() => import("./components/Home"))
const About = React.lazy(() => import("./components/About"))

const MainLayout = React.lazy(() => import("./layouts/MainLayout"))

const Dashboard = React.lazy(() => import("./pages/Dashboard"))
const Products = React.lazy(() => import("./pages/products"))
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"))
const Customers = React.lazy(() => import("./pages/Customers"))
const FormCust = React.lazy(() => import("./pages/FormCust"))
const Orders = React.lazy(() => import("./pages/Orders"))
const FormOrders = React.lazy(() => import("./pages/FormOrders"))
const Users = React.lazy(() => import("./pages/Users"))
const Error400 = React.lazy(() => import("./pages/Error400"))
const Error401 = React.lazy(() => import("./pages/Error401"))
const Error403 = React.lazy(() => import("./pages/Error403"))

const Login = React.lazy(() => import("./pages/auth/Login"))
const Register = React.lazy(() => import("./pages/auth/Register"))
const Forgot = React.lazy(() => import("./pages/auth/Forgot"))

function App() {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route path="*" element={<NotFound />} />
                <Route element={<GuestLayout/>}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Route>

                <Route element={<MainLayout/>}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:id" element={<ProductDetail />} /> 
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/formOrders" element={<FormOrders />} />
                    <Route path="/customers" element={<Customers />} />
                    <Route path="/formCust" element={<FormCust />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/aboutSedap" element={<Error400 />} />
                    <Route path="/transport" element={<Error401 />} />
                    <Route path="/admin" element={<Error403 />} />
                </Route>

                <Route element={<AuthLayout/>}>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/forgot" element={<Forgot/>}/>
                </Route>
            </Routes>
        </Suspense>
    );
}

export default App;
