import './ChartBar.css'

function ChartBar(props) {
    console.log(String(props.percent) + '%')
    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div
                    className='chart-bar__fill'
                    style={{ height: String(props.percent) + '%' }}
                ></div>
            </div>
            <div className='chart-bar__label'>{props.label}</div>
        </div>
    )
}

export default ChartBar;
