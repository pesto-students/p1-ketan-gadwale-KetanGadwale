import { Outlet } from 'react-router-dom';
function Navigation() {
    return (
        <>
            <div>
                <h1>Navigation</h1>
            </div>
            <Outlet />
        </>
    );
}

export default Navigation;
