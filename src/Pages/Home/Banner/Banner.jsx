
import "./Banner.css"


const Banner = () => {
    return (
        <div className="hero h-[50vh] lg:mt-10 lg:rounded-2xl" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1606765962248-7ff407b51667?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
            <div className="hero-overlay bg-opacity-60 lg:rounded-2xl"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="w-full">
                    <h1 className="mb-5 text-3xl lg:text-5xl font-bold text-white">Search User</h1>
                    <div className="mb-5">
                        <input type="text" placeholder="User Name ..." className="input input-bordered input-primary w-full text-black font-bold" />
                    </div>
                    <button className="btn btn-sm lg:btn-md paperScrollPaper">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;