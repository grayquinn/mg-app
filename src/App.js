import './Lorem.css';
import './Boxes.css';
import './Header.css';
import './Buttons.css';
import './Bottom.css';
import Header from './Header.js';
import Body from "./Body.js";
import Boxes from './Boxes.js';
import Lorem from './Lorem';
import Buttons from './Buttons';
import Bottom from './Bottom';


const App = () =>  {
  return (
    <div>
      < Header />
      < Body />
      < Boxes />
      < Lorem />
      < Buttons />
      <Bottom />
    </div>
  );
}

export default App;
