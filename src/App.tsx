import SideBar from './components/Sidebar/Sidebar';
import Tabs from './components/Tabs/Tabs';
import Timer from './components/Timer/Timer';
import './styles/App.scss';



function App() {

	const theme = 'dark';

  return (
    <div className={`app ${theme}`}>
		<SideBar/>
		<div className='wrapper'>
			<Tabs/>
			<Timer/>
		</div>
    </div>
  )
}

export default App
