export interface IHomepageProjectSpotlightContainerProps {
	name?: string;
	description?: string;
	link?: string;
	tiktokLink?: string;
	youtubeLink?: string;
	instagramLink?: string;
	twitterLink?: string;
	imageUrl?: string;
}

const HomepageProjectSpotlightContainer: React.FC<IHomepageProjectSpotlightContainerProps> = (
	{
		name,
		description,
		link,
		tiktokLink,
		youtubeLink,
		instagramLink,
		twitterLink,
		imageUrl
	}
) => {
	return (
		<>
			<div className="homepage-project-spotlight__container">
				<div>
					<a href={link || "#"} target="_blank">
						<h4>{ name }<span><img src="./icons/nav-out.svg"/></span></h4>
					</a>
					<p>{ description }</p>
					<div>
						{ tiktokLink && <a href={tiktokLink} target="_blank"><img src="./icons/tiktok-white.svg"/></a> }
						{ youtubeLink && <a href={youtubeLink} target="_blank"><img src="./icons/youtube-white.svg"/></a> }
						{ instagramLink && <a href={instagramLink} target="_blank"><img src="./icons/instagram-white.svg"/></a> }
						{ twitterLink && <a href={twitterLink} target="_blank"><img src="./icons/twitterx-white.svg"/></a> }
					</div>
				</div>
				<div>
					<img src={imageUrl}/>
				</div>
			</div>
		</>
	)
}

export default HomepageProjectSpotlightContainer;