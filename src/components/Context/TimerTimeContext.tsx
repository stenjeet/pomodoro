import { createContext, useContext, useState, type ReactNode } from "react";



interface TimerTimeContextType {
	pomodoro: number,
	short: number,
	long: number,
	setPomodoro: (value: number) => void,
	setShort: (value: number) => void,
	setLong: (value: number) => void
};

const TimerTimeContext = createContext<TimerTimeContextType | null>(null);

export function useTimerTime() {
	const context = useContext(TimerTimeContext);
	if (!context) {
		throw new Error('timerTimerContext Error');
	} else {
		return context;
	};
};

export function TimerTimeProvider({children}: {children: ReactNode}) {

	const [pomodoro, setPomodoro] = useState(45);
	const [short, setShort] = useState(5);
	const [long, setLong] = useState(15);

	return (
		<TimerTimeContext.Provider value={{pomodoro, short, long, setPomodoro, setShort, setLong}}>
			{children}
		</TimerTimeContext.Provider>
	)
};