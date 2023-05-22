export const Languages = (props) => {
	const { logo, ushangi = {}, title, className, onClick } = props;
	return (
		<div onClick={onClick} className={`languages ${className}`}>
			<img src={logo} />
			<p style={ushangi}>{title}</p>
		</div>
	);
};
