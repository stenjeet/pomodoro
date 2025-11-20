import { useTimerMode } from '../Context/TimerModeContext';
import styles from './Tabs.module.scss';


 
const Tabs= () => {

	const {mode, setMode} = useTimerMode();

	return (
		<div className={styles.tabs}>
			<button
				className={`${styles.button} ${mode === 'pomodoro' && styles.active}`}
				onClick={() => setMode('pomodoro')}
			>
				Pomodoro
			</button>
			<button 
				className={`${styles.button} ${mode === 'short' && styles.active}`}
				onClick={() => setMode('short')}
			>
				Short Break
			</button>
			<button 
				className={`${styles.button} ${mode === 'long' && styles.active}`}
				onClick={() => setMode('long')}
			>
				Long Break
			</button>
		</div>
	);
}
 
export default Tabs;