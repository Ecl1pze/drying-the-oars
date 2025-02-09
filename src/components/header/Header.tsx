import Input from '../ui/input/Input'
import styles from './Header.module.scss'

const Header: React.FC = () => {
	return (
		<header className={styles.root}>
			<img src='/public/logo.svg' alt='' />
			<nav>
				<ul className={styles.list}>
					<li className={styles.active}>Меню</li>
					<li>Акции</li>
					<li>Новости</li>
					<li>О нас</li>
					<li>Карьера</li>
					<li>Отзывы</li>
				</ul>
			</nav>
			<div className={styles.contacts}>
				<img src='/src/assets/images/phone-icon.svg' alt='' />
				<div>
					<span>+375 (29) 321 00 00</span>
					<span>+375 (29) 321 00 00</span>
				</div>
			</div>
			<Input />
			<button className={styles.profile}>
				<img src='/src/assets/images/profile-icon.svg' alt='' />
			</button>
		</header>
	)
}
export default Header
