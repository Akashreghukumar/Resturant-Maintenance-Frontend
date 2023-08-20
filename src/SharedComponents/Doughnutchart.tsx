import {useMemo} from 'react'
import { Doughnut } from "react-chartjs-2";
import "chartjs-plugin-datalabels";
import {Chart, ArcElement, Tooltip, Legend} from 'chart.js'
import ChartDataLabels from "chartjs-plugin-datalabels";
Chart.register(ArcElement,Tooltip,Legend);
Chart.register(ChartDataLabels);

export default function Doughnutchart() {


  const chartData = useMemo(() => ({
    labels:['Booked', 'Available', 'Maintenance', 'Ordered Food'],
    datasets: [
      {
        data: [120, 90, 12, 45],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0',],
        borderColor: 'white',
        borderWidth: 1,
      },
    ],
  }), []);

  return (
    <div data-testid="PieChartContainer" style={{height:"200px",display:"flex",justifyContent:"center"}}>
      <Doughnut data={chartData}
        options ={ {
          maintainAspectRatio: false,
          responsive:true,
          plugins: {
            legend: {
              display: true,
              position: 'bottom',
              align: 'center',
              labels: {
                usePointStyle: true,
                boxWidth: 8,
              },
            },
            datalabels: {
              display:false
            },
          },
        }}
 />
    </div>
  )
}