import ChartBar from './ChartBar'
import './Chart.css'
function Chart({dataPoints}) {
    const maxValue = Math.max(...dataPoints.map((dataPoint) => {return dataPoint.value}))
    return (
        <div className='chart'>
        {
            dataPoints.map((dataPoint) => {
                return (
                    <ChartBar
                        key={dataPoint.label}
                        label={dataPoint.label}
                        percent={maxValue !== 0 ? (dataPoint.value / maxValue * 100) : 0}
                    />
                )
            })
        }
        </div>
    )
}

export default Chart;