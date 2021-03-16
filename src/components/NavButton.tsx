import { NavLink } from 'react-router-dom';

const NavButton = ({ text, route }: NavButtonProps) => {

    return (
        <NavLink to={route} className="bg-purple-600 hover:bg-blue-800 text-white" activeClassName="bg-blue-800">
            {text}
        </NavLink>
    );
}

interface NavButtonProps {
    text: string;
    route: string;
}

export default NavButton;