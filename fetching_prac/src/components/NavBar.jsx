
const NavBar = () => {
    return (
        <nav className='w-full bg-slate-300 text-gray-900 mb-2'>
            <div className="container mx-auto flex">
                <div className="flex-grow">
                    Logo
                </div>
                <div className="flex flex-grow">
                    <a href="#" className='flex-grow text-end'>Home</a>
                    <a href="#" className='flex-grow text-end'>About</a>
                    <a href="#" className='flex-grow text-end'>Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default NavBar