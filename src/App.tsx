import Tabs from './components/Tabs/Tabs';
import Timer from './components/Timer/Timer';
import './styles/App.scss';



function App() {

	const theme = 'dark';

  return (
    <div className={`app ${theme}`}>
		<div className='wrapper'>
			<Tabs/>
			<Timer/>
		</div>
    </div>
  )
}

export default App
