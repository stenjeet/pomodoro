import Timer from './components/Timer/Timer';
import './styles/App.scss';



function App() {

	const theme = 'dark';

  return (
    <div className={`app ${theme}`}>
		<Timer/>
    </div>
  )
}

export default App
