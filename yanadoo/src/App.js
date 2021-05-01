import './default.css';
import Header from './components/common/header';
import VisualWrap from './components/contents/visalWrap';
import CardWrap from './components/contents/cardWrap';
import BestClassWrap from './components/contents/bestClassWrap';



function App() {
  return (
    <>
      <Header />
      <VisualWrap />
      <CardWrap />
      <BestClassWrap />
    </>
  );
}

export default App;
