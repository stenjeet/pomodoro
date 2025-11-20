import { createContext, useContext, useState, type ReactNode } from "react";



export type Mode = 'pomodoro' | 'short' | 'long';

interface TimerModeContextValue {
	mode: Mode,
	setMode: (mode: Mode) => void
};

const TimerModeContext = createContext<TimerModeContextValue | null>(null);

export function useTimerMode() {
	const context = useContext(TimerModeContext);
	if (!context) {
		throw new Error('TimerModeContext Error');
	} else {
		return context;
	};
};

export function TimerModeProvider({children} : {children: ReactNode}) {

	const [mode, setMode] = useState<Mode>('pomodoro');

	return (
		<TimerModeContext.Provider value={{mode, setMode}}>
			{children}
		</TimerModeContext.Provider>
	)
};