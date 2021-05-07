// import React, { PureComponent } from "react";

import React, { memo } from "react";

const HabitAddForm = memo((props) => {
  const inputRef = React.createRef();
  const formRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    // inputRef.current.value = '';
    formRef.current.reset();
  };
  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        type="text"
        ref={inputRef}
        className="add-input"
        placeholder="Habit"
      />
      <button className="add-button">Add</button>
    </form>
  );
});
export default HabitAddForm;

// class HabitAddForm extends PureComponent {
//   inputRef = React.createRef();
//   formRef = React.createRef();

//   onSubmit = (event) => {
//     event.preventDefault();
//     const name = this.inputRef.current.value;
//     name && this.props.onAdd(name);
//     // this.inputRef.current.value = '';
//     this.formRef.current.reset();
//   };

// render() {
//   console.log("habitAddForm");
//   return (
//     <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
//       <input
//         type="text"
//         ref={this.inputRef}
//         className="add-input"
//         placeholder="Habit"
//       />
//       <button className="add-button">Add</button>
//     </form>
//   );
// }
// }

// export default HabitAddForm;
