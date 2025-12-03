import { useEffect, useRef, useState } from 'react';
import styles from './Timer.module.scss';
import MyButton from '../MyButton/MyButton';
import { useTimerMode } from '../Context/TimerModeContext';
import { useTimerTime } from '../Context/TimerTimeContext';


 
const Timer = () => {

	const intervalRef = useRef<number | undefined>(undefined);

	const { mode } = useTimerMode();
	const {pomodoro, short, long, setPomodoro, setShort, setLong} = useTimerTime();


	const duraction = {
		pomodoro: pomodoro * 60,
		short: short * 60,
		long: long * 60
	};

	const [minutes, setMinutes] = useState<number | null>(null);
	const [time, setTime] = useState<number>(duraction[mode]);
	const [isRunning, setIsRunning] = useState<boolean>(false);


	useEffect(() => {
		setTime(duraction[mode]);
		setIsRunning(false)
	}, [mode, pomodoro, short, long]);

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
		setTime(duraction[mode]);
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