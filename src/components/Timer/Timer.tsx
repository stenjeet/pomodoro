import { useEffect, useRef, useState } from 'react';
import styles from './Timer.module.scss';
import MyButton from '../MyButton/MyButton';


 
const Timer = () => {

	const intervalRef = useRef<number | undefined>(undefined);

	const [minutes, setMinutes] = useState<number | null>(null);
	const [time, setTime] = useState(45 * 60);
	const [isRunning, setIsRunning] = useState<boolean>(false);


	useEffect(() => {
		if (isRunning) {
			intervalRef.current = setInterval(() => {
				setTime(prev => prev -= 1)
			}, 1000);
		} else {
			clearInterval(intervalRef.current)
		}
	}, [isRunning]);


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
				<p>{time}</p>
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