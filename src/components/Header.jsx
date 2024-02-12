import Navbar from "./Navbar";

const Header = () => {
	return (
		<header>
			<Navbar  client:load/>
		</header>
	);
};

export default Header;
