import { useTimerTime } from '../Context/TimerTimeContext';
import styles from './TimerSettings.module.scss';



const TimerSettings = () => {

	const timer = useTimerTime();

	const {pomodoro, short, long, setPomodoro, setShort, setLong} = timer;


	return (
		<div className={styles.timerSettings}>
			<p className={styles.titleSettings}>TIMER</p>
			<p className={styles.settingsName}>Time (minutes)</p>
			<div className={styles.timeSettings}>
				<div className={styles.timeItem}>
					<p className={styles.timeTitle}>Pomodoro</p>
					<input 
						className={styles.timeInput} 
						type="number" 
						defaultValue={45}
						onChange={(e) => setPomodoro(Number(e.target.value))}
						/>
				</div>
				<div className={styles.timeItem}>
					<p className={styles.timeTitle}>Short Break</p>
					<input 
						className={styles.timeInput} 
						type="number" 
						defaultValue={5}
						onChange={(e) => setShort(Number(e.target.value))}
						/>
				</div>
				<div className={styles.timeItem}>
					<p className={styles.timeTitle}>Long Break</p>
					<input
						className={styles.timeInput} 
						type="number" 
						defaultValue={15} 
						onChange={(e) => setLong(Number(e.target.value))}/>
				</div>
			</div>
		</div>
	);
}
 
export default TimerSettings;
