import * as React from 'react';

const App = () => {
  return (
    <div>
      <label>
        What do we eat?
        <select>
          <option value="fruit">Fruit</option>
          <option value="vegetable">Vegetable</option>
          <option value="meat">Meat</option>
        </select>
      </label>
    </div>
  );
};

export default App;
