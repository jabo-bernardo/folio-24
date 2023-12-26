"use client"

import { useEffect, useState } from "react";

export interface IHomepageServiceContainer {
	icon: string;
	title: string;
	description: string;
}

const HomepageServiceContainer: React.FC<IHomepageServiceContainer> = (
	{
		icon,
		title,
		description
	}
) => {

	return (
		<>
			<div className="homepage-service__container">
				<img src={icon}/>
				<div>
					<h5>{ title }</h5>
					<p>{ description }</p>
				</div>
			</div>
		</>
	)
}

export default HomepageServiceContainer;