import Barchart from './Barchart'
import DoughnutChart from './DoughnutChart'
import Sales from './Sales';
import '../Styles/Component.scss'

const Component = () => {
	return(
		<div className="Dashboard">
		<h2 className="heading">Dashboard</h2>
		<div className="Component">
			<Sales />
			<Barchart />
			<DoughnutChart />
		</div>
		</div>
)
}

export default Component;