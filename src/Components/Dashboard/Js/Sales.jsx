import '../Css/Sales.css';

const Sales = () => {
	return(
		<div className="Sales">
			<div className="today-sales sales-box">
				<h4 className="miniheading">Today's Sales</h4>
				<h3 className="subheading">$1,25,300</h3>
			</div>
			<div className="monthly-sales sales-box">
				<h4 className="miniheading">Monthly Sales</h4>
				<h3 className="subheading">$21,15,275</h3>
			</div>
			<div className="total-sales sales-box">
				<h4 className="miniheading">This month sales v/s Last month</h4>
				<h3 className="subheading">+ 18.75%</h3>
			</div>
		</div>
	)
}

export default Sales