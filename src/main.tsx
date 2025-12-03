import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { TimerModeProvider } from './components/Context/TimerModeContext.tsx';
import { TimerTimeProvider } from './components/Context/TimerTimeContext.tsx';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
		<TimerTimeProvider>
			<TimerModeProvider>
				<App />
			</TimerModeProvider>
		</TimerTimeProvider>
  </StrictMode>,
);
