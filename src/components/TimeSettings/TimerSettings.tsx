import { useTimerTime } from '../Context/TimerTimeContext';
import styles from './TimerSettings.module.scss';



const TimerSettings = () => {

	const timer = useTimerTime();

	const {setPomodoro, setShort, setLong} = timer;


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
						value={timer.pomodoro || ""}
						onChange={(e) => {
							const value = e.target.value;
							setPomodoro(value === "" ? 0 : Number(value))
						}}
						/>
				</div>
				<div className={styles.timeItem}>
					<p className={styles.timeTitle}>Short Break</p>
					<input 
						className={styles.timeInput} 
						type="number" 
						value={timer.short || ""}
						onChange={(e) => {
							const value = e.target.value;
							setShort(value === "" ? 0 : Number(value))
						}}
						/>
				</div>
				<div className={styles.timeItem}>
					<p className={styles.timeTitle}>Long Break</p>
					<input
						className={styles.timeInput} 
						type="number" 
						value={timer.long || ""} 
						onChange={(e) => {
							const value = e.target.value;
							setLong(value === "" ? 0 : Number(value))
						}}
						/>
				</div>
			</div>
		</div>
	);
}
 
export default TimerSettings;
