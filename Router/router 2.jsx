import React from "react";
import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses";

///List

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      Marks: [
        {
          tamil: 70,
          English: 86,
          Maths: 82,
          Science: 97,
          Social: 91,
        },
        {
          tamil: 99,
          English: 96,
          Maths: 81,
          Science: 99,
          Social: 81,
        },
        {
          tamil: 72,
          English: 86,
          Maths: 62,
          Science: 97,
          Social: 98,
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <table border={7}>
          <thead>
            <td>Tamil</td>
            <td>English</td>
            <td>Maths</td>
            <td>Science</td>
            <td>Social</td>
          </thead>

          {this.state.Marks.map((marks, index) => (
            <tr>
              <td>{marks.tamil}</td>
              <td>{marks.English}</td>
              <td>{marks.Maths}</td>
              <td>{marks.Science}</td>
              <td>{marks.Social}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}
export default List;
