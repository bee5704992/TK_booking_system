

import Home from '../components/pages/Home';
import Register from '../components/pages/Register';
import Login from '../components/pages/Login';

import User from '../components/pages/User';
import Book from '../components/pages/Book';

import Status from '../components/pages/Status';
import LoginAdmin from '../components/pages/LoginAdmin';
import ManageItems from '../components/pages/ManageItems';
import SoldItems from '../components/pages/SoldItems';

const components = {
    home: {
        url: '/',
        component: Home//<WebLayoutGuest content={<Home />} contentName='Home' />
    },
    register: {
        url: '/register',
        component: Register//<WebLayoutGuest content={<Register/>} contentName='Register' />
    },
    login: {
        url: '/login',
        component: Login//<WebLayoutGuest content={<Login/>} contentName='Login' />
    },
    user: {
        url: '/user',
        component: User//<WebLayoutUser content={<User />} contentName='User' />
    },
    book: {
        url: '/book',
        component: Book//<WebLayoutUser content={<Book />} contentName='Book' />
    },
    status: {
        url: '/status',
        component: Status//<WebLayoutUser content={<Status />} contentName='Status' />
    },
    loginAdmin: {
        url: '/loginAdmin',
        component: LoginAdmin
    },
    manageItems: {
        url: '/manageItems',
        component: ManageItems
    },
    soldItems: {
        url: '/soldItems',
        component: SoldItems
    },
};

//roleไหนเข้าหน้าไหนได้บ้าง
export default {
    guest: {
        allowedRoutes: [
            components.home,
            components.register,
            components.login,
            components.loginAdmin
        ],
        redirectRoute: '/login'
    },
    user: {
        allowedRoutes: [
            components.home,
            components.register,
            components.user,
            components.book,
            components.status
        ],
        redirectRoute: '/user'
    },
    admin: {
        allowedRoutes: [
            components.manageItems,
            components.soldItems,
            components.home,
            components.register
        ],
        redirectRoute: '/manageItems'
    }
}