import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { TimerModeProvider } from './components/Context/TimerModeContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
		<TimerModeProvider>
			<App />
		</TimerModeProvider>
  </StrictMode>,
)
