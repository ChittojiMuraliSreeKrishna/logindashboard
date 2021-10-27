import {Doughnut} from 'react-chartjs-2'

const DoughnutChart = () => {
	return(
		<div className="Doughnut">
			<Doughnut 
				data={{
					labels: ['SHIRTS', 'SAREES', 'KIDS', 'JEANS', 'T-SHIRTS', 'WOMEN', 'OTHERS'],
					datasets: [
						{
							label: 'Category',
							data: [19.5, 17.1, 15.5, 15.2, 12.3, 10.01, 10.01],
							backgroundColor: ['brown','green', 'blue', 'orange', 'yellow', 'purple', 'silver']
						}
					]
				}}
				 options={{
				 	legend: {display: true, position:"right"},
				 	datalabels: {
				 		display: true,
				 		color: "black",
				 	},
        scales: {
            y: {
                beginAtZero: true
            }
        }
				}}
				height={6}
				width={6}
			/>
		</div>
	)
}

export default DoughnutChart
