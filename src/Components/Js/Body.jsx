import Header from './Header';
import Footer from './Footer';
import Component from './Component';
import '../Styles/Body.scss'
const Body = ({user, Logout}) => {
	return(
		<div className="Body">
		<Header user={user} Logout={Logout} />
		<Component />
		<Footer />
		</div>
	)
}

export default Body;