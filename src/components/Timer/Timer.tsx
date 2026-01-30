import { useEffect, useRef, useState } from 'react';
import styles from './Timer.module.scss';
import MyButton from '../MyButton/MyButton';
import { useTimerMode, type Mode } from '../Context/TimerModeContext';
import { useTimerTime } from '../Context/TimerTimeContext';


 
const Timer = () => {

	const intervalRef = useRef<number | undefined>(undefined);

	const { mode, setMode } = useTimerMode();
	const {pomodoro, short, long} = useTimerTime();


	const duraction = {
		pomodoro: pomodoro * 60,
		short: short * 60,
		long: long * 60
	};

	const [time, setTime] = useState<number>(duraction[mode]);
	const [isRunning, setIsRunning] = useState<boolean>(false);
	const [workInterval, setWorkInterval] = useState<number>(0);


	useEffect(() => {
		setTime(duraction[mode]);
		setIsRunning(false)
	}, [mode, pomodoro, short, long]);


	useEffect(() => {
  		if (!isRunning) return;

  		intervalRef.current = setInterval(() => {
    		setTime(prev => {
      			if (prev <= 1) {
        			clearInterval(intervalRef.current);
        			setIsRunning(false);

        			let nextMode: Mode;

        			if (mode === 'pomodoro') {
          				const nextCount = workInterval + 1;
          				nextMode = nextCount % 4 === 0 ? 'long' : 'short';
         				setWorkInterval(nextCount);
        			} else {
          				nextMode = 'pomodoro';
        			}

        			setMode(nextMode);
        			setTime(duraction[nextMode]);

        			return 0;
      			}

      		return prev - 1;
    		});
  		}, 1000);

  		return () => clearInterval(intervalRef.current);
	}, [isRunning, duraction, mode, workInterval, setMode]);


	const minutes = Math.floor(time / 60);


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