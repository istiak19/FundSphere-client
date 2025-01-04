import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import AllCampaign from '../pages/AllCampaign';
import AddCampaign from '../pages/AddCampaign';
import MyDonations from '../pages/MyDonations';
import MyCampaign from '../pages/MyCampaign';
import ErrorPage from '../layouts/ErrorPage';
import Login from '../components/Login';
import Register from '../components/Register';
import Home from '../pages/Home';
import Details from '../pages/Details';
import UpdatePage from '../pages/UpdatePage';
import PrivateProvider from '../provider/PrivateProvider';

const routers = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                loader: () => fetch('https://fund-sphere-server.vercel.app/campaigns'),
                element: <Home></Home>
            },
            {
                path: '/campaign/:id',
                loader: ({ params }) => fetch(`https://fund-sphere-server.vercel.app/campaigns/${params.id}`),
                element: <PrivateProvider><Details></Details></PrivateProvider>
            },
            {
                path: '/all-campaign',
                loader: () => fetch('https://fund-sphere-server.vercel.app/campaigns'),
                element: <AllCampaign></AllCampaign>
            },
            {
                path: '/add-campaign',
                element: <PrivateProvider><AddCampaign></AddCampaign></PrivateProvider>
            },
            {
                path: '/my-campaign',
                loader: () => fetch('https://fund-sphere-server.vercel.app/campaigns'),
                element: <PrivateProvider><MyCampaign></MyCampaign></PrivateProvider>
            },
            {
                path: '/my-donations',
                loader: () => fetch('https://fund-sphere-server.vercel.app/donates'),
                element: <PrivateProvider><MyDonations></MyDonations></PrivateProvider>
            },
            {
                path: '/my-campaign/:id',
                loader: ({ params }) => fetch(`https://fund-sphere-server.vercel.app/campaigns/${params.id}`),
                element: <PrivateProvider><UpdatePage></UpdatePage></PrivateProvider>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default routers;