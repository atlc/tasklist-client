import NavButton from './NavButton';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-purple-200 p-6">
            <NavButton text='Home' route='/' />
            <NavButton text='Login' route='/login' />
        </nav>
    );
}

export default Navbar;