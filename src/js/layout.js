import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./component/Navbar";
import Footer from "./component/footer";
import ButtonWame from "./component/buttonWame";

import Home from "./component/home";
import NuestraMision from "./component/nuestra-mision";
import Contacto from "./component/contacto";
import Precios from "./component/precios";
import Faq from "./component/dra-dany-responde";
import Odontologia from "./component/odontologia";
import EsteticaFacial from "./component/estetica-facial";
import PortfolioOverview from "./component/promo-odontologia";
import PortfolioItem from "./component/promo-estetica";
import NotFound from "./component/NotFound";



//create your first component
const Layout = () => {

	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<Switch>
					<Route exact path={"/"} >
						<Home />
					</Route>
					<Route exact path={"/nuestra-mision"} >
						<NuestraMision />
					</Route>
					<Route exact path={"/contacto"} >
						<Contacto />
					</Route>
					<Route exact path={"/precios"} >
						<Precios />
					</Route>
					<Route exact path={"/dra-dany-responde"}>
						<Faq />
					</Route>
					<Route exact path={"/odontologia"} >
						<Odontologia />
					</Route>
					<Route exact path={"/estetica-facial"} >
						<EsteticaFacial />
					</Route>
					<Route exact path={"/promo-odontologia"} >
						<PortfolioOverview />
					</Route>
					<Route exact path={"/promo-estetica"} >
						<PortfolioItem />
					</Route>
					<Route component={NotFound} />
				</Switch>
				<ButtonWame/>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default Layout;