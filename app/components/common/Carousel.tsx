import { Children, useEffect, useState } from "react";
import { motion } from "framer-motion";

export interface ICarouselProps {
	children: React.ReactNode;
	currentItem?: number;
	setCurrentItem?: any;
}

export interface ICarouselItemProps {
	children: React.ReactNode;
}

const animations = {
	initial: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 0.25,
		}
	},
	next: {
		x: ["-100%", "-100%", "100%"],
		opacity: [1, 0.5, 0],
		transition: {
			duration: 0.25,
		}
	},
	prev: {
		x: ["100%", "100%", "-100%"],
		opacity: [1, 0.5, 0],
		transition: {
			duration: 0.25,
		}
	},
}

const Carousel: React.FC<ICarouselProps> = ({ children, currentItem = 0, setCurrentItem }) => {
	const carouselItems = Children.toArray(children);
	const [previousItem, setPreviousItem] = useState(0);
	const [direction, setDirection] = useState("initial");

	useEffect(() => {
		if (previousItem === currentItem) {
			return;
		}
		if (previousItem < currentItem) {
			setDirection("next");
		}
		if (previousItem > currentItem) {
			setDirection("prev");
		}
		if (currentItem < 0) {
			setCurrentItem(carouselItems.length - 1);
			setPreviousItem(carouselItems.length - 1);
			return;
		}
		if (currentItem > carouselItems.length - 1) {
			setCurrentItem(0)
			setPreviousItem(0)
			return;
		}
		setCurrentItem(currentItem);
		setPreviousItem(currentItem);
	}, [currentItem])

	return (
		<div className="carousel__container">
			<motion.div
				variants={ animations }
				initial="initial"
				animate={ direction }
				onAnimationComplete={ () => setDirection("initial")}
			>
				{ carouselItems[currentItem] }
			</motion.div>
		</div>
	)
}

export const CarouselItem: React.FC<ICarouselItemProps> = ({ children }) => {
	return (
		<>
			<div className="carousel-item__container">
				{ children }
			</div>
		</>
	)
}

export default Carousel;