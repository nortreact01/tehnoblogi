import { Outlet, Link } from "react-router-dom";

function Konteiner() {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to="/">Esileht</Link>
					</li>
					<li>
						<Link to="/uudis/1">Uudised</Link>
					</li>
					<li>
						<Link to="/kontakt">Võta ühendust</Link>
					</li>
				</ul>
			</nav>
            
            <Outlet />
		</>

	);
}

export default Konteiner;
