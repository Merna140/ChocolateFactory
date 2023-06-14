
import Header from './header'; 
import Footer from './footer';
import { Outlet } from 'react-router-dom';

function UserLayout() {
    return <>
        <div>
            <Header />
            <Outlet/>
            <Footer />
        </div>
    </>
}

export default UserLayout