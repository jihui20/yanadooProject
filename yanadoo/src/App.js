import './default.css';
import Header from './components/common/header';
import VisualWrap from './components/contents/visalWrap';
import CardWrap from './components/contents/cardWrap';

function App() {
  return (
    <>
      <h1>리액트 스터디 시작</h1>
      <Header />
      <VisualWrap />
      <CardWrap />
    </>
  );
}

export default App;
