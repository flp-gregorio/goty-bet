import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callApi() {
    fetch("http://localhost:3000/test")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callApi();
  }

  render() {
    console.log(this.state.apiResponse);
    return (
      <div>
        <RouterProvider router={router} />
      </div>
    );
  }
}
export default App;
