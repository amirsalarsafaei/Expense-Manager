import moment from "moment/moment";
import Chart from "../Chart/Chart";

function ExpenseChart(props) {
    moment.locale('en-US')

    const monthsExpenses = moment.months().map((monthName, monthNumber) => {
        let cnt = 0
        for (const expense of props.expences) {
            if (expense.date.getMonth() === monthNumber) {
                cnt += 1
            }
        }
        return {label: monthName.substring(0, 3), value: cnt}
    })

    return <Chart dataPoints={monthsExpenses}></Chart>

}

export default ExpenseChart;
