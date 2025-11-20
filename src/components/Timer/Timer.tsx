import { useEffect, useRef, useState } from 'react';
import styles from './Timer.module.scss';
import MyButton from '../MyButton/MyButton';
import { useTimerMode } from '../Context/TimerModeContext';


 
const Timer = () => {

	const intervalRef = useRef<number | undefined>(undefined);

	const { mode } = useTimerMode();

	const duraction = {
		pomodoro: 45 * 60,
		short: 5 * 60,
		long: 15 * 60
	};

	const [minutes, setMinutes] = useState<number | null>(null);
	const [time, setTime] = useState<number>(duraction[mode]);
	const [isRunning, setIsRunning] = useState<boolean>(false);


	useEffect(() => {
		setTime(duraction[mode]);
		setIsRunning(false)
	}, [mode]);

	useEffect(() => {
		if (isRunning) {
			intervalRef.current = setInterval(() => {
				setTime(prev => prev -= 1)
			}, 1000);
		} else {
			clearInterval(intervalRef.current)
		}
	}, [isRunning]);

	useEffect(() => {
		setMinutes(Math.floor(time / 60))
	}, [time, minutes])


	function handleStart() {
		setIsRunning(true);
	};

	function handlePause() {
		setIsRunning(false);
	};

	function handleRestart() {
		setIsRunning(false);
		setTime(45 * 60);
	};



	return (
		<div className={styles.timerWrapper}>
			<div className={styles.timer}>
				<p>{String(minutes).padStart(2, '0')}:{String(time % 60).padStart(2, '0')}</p>
			</div>
			<div className={styles.buttons}>
				{isRunning
				?
					<MyButton handle={handlePause}>Pause</MyButton>
				:
					<MyButton handle={handleStart}>Start</MyButton>
				}
					<MyButton handle={handleRestart}>Restart</MyButton>
			</div>
		</div>
	);
}
 
export default Timer;