export interface ITagProps {
	children: React.ReactNode
}

const Tag: React.FC<ITagProps> = ({ children }) => {
	return (
		<>
			<div className="tag__container">
				{ children }
			</div>
		</>
	)
}

export default Tag;