import React, { Component } from "react";

// function FancyButton(props) {
//   console.log("FancyButton", props);
//   return <button className="FancyButton">FancyButton{props.children}</button>;
// }

const FancyButton = React.forwardRef((...args) => {
  console.log(args);
  const [props, ref] = args;
  console.log(props);
  console.log(ref);
  return (
    // <button>1</button>
    <button ref={ref} className="FancyButton">
      FancyButton{props.children}
    </button>
  );
});
export default FancyButton;
// export default class FancyButton extends Component {
//   constructor(...args) {
//     super();
//     console.log(...args);
//     // const { ref } = console.log(props);
//   }

//   componentDidMount() {
//     console.log(this);
//     console.log(FancyButton);
//   }

//   FancyButton = React.forwardRef((props, ref) => {
//     return (
//       // <button>1</button>
//       <button ref={ref} className="FancyButton">
//         FancyButton{props.children}
//       </button>
//     );
//   });
//   render() {
//     return <div>11</div>;
//   }
// }
