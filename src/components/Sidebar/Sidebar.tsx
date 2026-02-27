import { useEffect, useState } from 'react';
import styles from './Sidebar.module.scss';
import { FiSidebar } from 'react-icons/fi';
import TimerSettings from '../TimeSettings/TimerSettings';



const SideBar = () => {

	const [collapsed, setCollapsed] = useState(() => {
    	const saved = localStorage.getItem("collapsed");
    	return saved ? saved === "true" : false;
	});

	function handleSidebar () {
		setCollapsed(prev => !prev)
	}

	useEffect(() => {
		localStorage.setItem("collapsed", String(collapsed));
	}, [collapsed]);


	return (
		<div className={`${styles.sidebar} ${collapsed && styles.sidebarCollapsed}`}>
		  	<div className={styles.sidebarHeader}>
		  	  	<p className={styles.title}>SETTINGS</p>
		  	  	<FiSidebar className={styles.icon} onClick={handleSidebar}/>
		  	</div>

		  	<div className={styles.timerWrapper}>
		  		<TimerSettings/>
		  	</div>
		</div>
	);
}
 
export default SideBar;
