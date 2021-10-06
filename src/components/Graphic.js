import * as React from "react";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  BarSeries,
  ArgumentAxis,
  ValueAxis,
} from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";

class Graphic extends React.PureComponent {


  render() {
    let data = [
      { name: "Infected", count: this.props.data[0] },
      { name: "Recovered", count: this.props.data[1] },
      { name: "Deaths", count: this.props.data[2] },
      { name: "Active", count: this.props.data[0] - this.props.data[2] },
    ];

    if (this.props.status === "loading") {
      return false;
    }
    return (
      <>
        <Paper className="graphs-area" style={{ width: "80%",marginTop:10}}>
          <Chart  data={data} className="graphs-area" >
            <ArgumentAxis  className="graphs-area"  />
            <ValueAxis max={4} />
            <BarSeries color={'#95E1D3'}  className="graphs-area"  valueField="count" argumentField="name" />
            <Animation duration={1000} />
          </Chart>
        </Paper>
      </>
    );
  }
}

export default Graphic;
