import { useState } from "react";
import Tag from "./common/Tag";

export interface IHomepageProjectContainerProps {
	name: string;
	tags: string[];
	avatarUrl: string;
	position: string;
	duration: string;
	location: string;
	shortDescription: string;
	description: string;
}


const HomepageProjectContainer: React.FC<IHomepageProjectContainerProps> = (
	{
		name,
		tags,
		avatarUrl,
		position,
		duration,
		location,
		shortDescription,
		description
	}
) => {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<>
			<div className="homepage-project__container">
				<div className="homepage-project__container--top">
					<div>
						<img src={avatarUrl}/>
						<h5>{ name }</h5>
						<div>
							{
								tags.map((tag, index) => (
									<Tag key={index}>{ tag }</Tag>
								))
							}
						</div>
					</div>
					<div>
						<p>{ position } • { duration } • { location }</p>
					</div>
				</div>
				<div className="homepage-project__container--bottom">
					<p>
						{
							isExpanded ? description : shortDescription
						}
						<span onClick={() => setIsExpanded(!isExpanded)}> See {isExpanded ? "less" : "more"}...</span>
					</p>
				</div>
			</div>
		</>
	)
}

export default HomepageProjectContainer;