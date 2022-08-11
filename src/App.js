import './App.css';
import { CardCarousel } from './components/CardCarousel';
import { CardsData } from './components/CardData';

function App() {
  return (
    <div>
      <CardCarousel cards={CardsData}  /> 
    </div>
  );
}

export default App;
