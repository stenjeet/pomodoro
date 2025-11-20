import type { FC, ReactNode } from "react";
import styles from './MyButton.module.scss';



interface MyButtonProps {
	children: ReactNode,
	handle?: () => void
}
 
const MyButton: FC<MyButtonProps> = ({children, handle}) => {
	return (
		<button
			onClick={handle}
			className={styles.button}
		>
			{children}
		</button>
	);
}
 
export default MyButton;