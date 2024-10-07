
import React from 'react';
import ReactDOM from 'react-dom';
import BasicButtonGroup from "./Button"

const App = () => {
  return (
    <div>
        Hello
      <BasicButtonGroup label="Click Me!" onClick={() => alert('Button Clicked!')} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
export { default as Button } from './Button';