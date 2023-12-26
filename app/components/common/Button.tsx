export interface IButtonProps {
	children?: any;
	lIcon?: any;
	rIcon?: any;
	variant?: "filled" | "text"
}

const Button: React.FC<IButtonProps> = ({
	children,
	lIcon,
	rIcon,
	variant = "filled"
}) => {
	return (
		<button className={`button__container button__container--${variant}`}>
			{ lIcon && <img src={lIcon}/> }
			{ children && <span>{ children }</span> }
			{ rIcon && <img src={rIcon}/> }
		</button>
	)
}

export default Button;