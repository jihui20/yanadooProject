
import './default.css';
import Header from './components/common/header';
import VisualWrap from './components/contents/visalWrap';
import CardWrap from './components/contents/cardWrap';
import BestClassWrap from './components/contents/bestClassWrap';
import EventList from './components/yanadoo/eventList';
import EventReply from './components/yanadoo/eventReply';
import EventWrite from './components/yanadoo/eventWrite';
import EventForm from './components/yanadoo/eventForm';



function App() {
  return (
    <>
      {/* <Header />
      <VisualWrap />
      <CardWrap />
      <BestClassWrap /> */}
      <EventList />
      {/* <EventReply /> */}
      {/* <EventWrite /> */}
      {/* <EventForm /> */}
    </>
  );
}

export default App;
