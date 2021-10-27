import {Bar} from 'react-chartjs-2'

const Barchart = () => {
	return(
		<div className="Barchart">
			<Bar
				data={{
					 labels: ['John', 'Raju', 'Gayathri', 'Vignesh', 'Ramya'],
				datasets: [
					{
						label: "Top 5 Sales by representative",
						data: [2, 19, 3, 5, 2],
						backgroundColor: 'green'
					}
				]
    }}
    options={{
    	maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
				}}
				height={600}
				width={600}
			/>
		</div>
	)
}

export default Barchart
