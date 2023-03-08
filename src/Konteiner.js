import { Link, Outlet } from "react-router-dom";

function Konteiner() {
	return (
		<div className="Konteiner">
			<h1>Siia tuleb uudiste blogi</h1>
			<nav>
				<ul>
					<li>
						<Link to="/">Esileht</Link>
					</li>
					<li>
						<Link to="/kontakt">Kontakt</Link>
					</li>
				</ul>
			</nav>

			<Outlet />
		</div>
	);
}

export default Konteiner;
