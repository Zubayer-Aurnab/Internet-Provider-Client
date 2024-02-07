import { NavLink } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const NavBar = ({children}) => {
    const Links = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "btn btn-primary" : " btn btn-outline btn-primary font-bold"
                }
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/add"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "btn btn-primary" : " btn btn-outline btn-primary font-bold"
                }
            >
                Add Users
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/dashboard"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "btn btn-primary" : " btn btn-outline btn-primary font-bold"
                }
            >
                Dashboard
            </NavLink>
        </li>
    </>
    return (
        <>
            <div className=' lg:px-36 lg:mt-2 '>
                <div className="drawer">

                    <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col">
                        {/* Navbar */}
                        <div className="w-full navbar bg-base-300 lg:rounded-2xl ">
                            <div className="flex-none lg:hidden">
                                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                </label>
                            </div>
                            <div className="flex-1 px-2 mx-2">INTERNET PROVIDER </div>
                            <div className="flex-none hidden lg:block">
                                <ul className=" menu-horizontal space-x-4">
                                    {
                                        Links
                                    }
                                </ul>
                            </div>
                        </div>
                        {/* Page content here */}
                        {children}
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-60 min-h-full bg-base-200 space-y-4">
                            {/* Sidebar content here */}
                            {
                                Links
                            }
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
};

export default NavBar;