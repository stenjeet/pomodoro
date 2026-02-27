import { createContext, useContext, useEffect, useState, type ReactNode } from "react";



interface TimerTimeContextType {
	pomodoro: number,
	short: number,
	long: number,
	setPomodoro: (value: number) => void,
	setShort: (value: number) => void,
	setLong: (value: number) => void
};

type timerSettings = {
	pomodoro: number;
	short: number;
	long: number;
}

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

	const [ settings, setSettings] = useState<timerSettings>(() => {
		const saved = localStorage.getItem("settings");
		return saved ? JSON.parse(saved) : { pomodoro: 45, short: 5, long: 15};
	});

	useEffect(() => {
		localStorage.setItem("settings", JSON.stringify(settings))
	}, [settings]);

	
	const setPomodoro = (value: number) => {
		setSettings(prev => ({ ...prev, pomodoro: value}));
	};
	const setShort = (value: number) => {
		setSettings(prev => ({ ...prev, short: value}));
	};
	const setLong = (value: number) => {
		setSettings(prev => ({ ...prev, long: value}));
	};


	return (
		<TimerTimeContext.Provider value={{...settings, setPomodoro, setShort, setLong}}>
			{children}
		</TimerTimeContext.Provider>
	)
};