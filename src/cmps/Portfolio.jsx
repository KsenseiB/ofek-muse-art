import React, { useState, useEffect } from "react";
import { images } from "../js/imgs-data";
// import {  Route, Link } from "react-router-dom";

// import { Fantasy } from "./galleries/Fantasy.jsx";
// import { Canvas } from "./galleries/Canvas.jsx";
// import { Backstage } from "./galleries/Backstage.jsx";
// import { Family } from "./galleries/Family.jsx";

export default function Portfolio() {
	const [tag, setTag] = useState("all");
	const [filteredImages, setFilteredImages] = useState([]);

	useEffect(() => {
		tag === "all"
			? setFilteredImages(images)
			: setFilteredImages(images.filter((img) => img.tag === tag));
	}, [tag]);

	return (
		<div className="portfolio">
			{/* <h2>Galleries</h2> */}
			<div className="portfolio-nav">
				<TagButton
					name="all"
					handleSetTag={setTag}
					tagActive={tag === "all" ? true : false}
				/>
				<TagButton
					name="fantasy"
					handleSetTag={setTag}
					tagActive={tag === "fantasy" ? true : false}
				/>
				<TagButton
					name="canvas"
					handleSetTag={setTag}
					tagActive={tag === "canvas" ? true : false}
				/>
				<TagButton
					name="Fashion"
					handleSetTag={setTag}
					tagActive={tag === "Fashion" ? true : false}
				/>
				<TagButton
					name="family"
					handleSetTag={setTag}
					tagActive={tag === "family" ? true : false}
				/>
				<TagButton
					name="erotic"
					handleSetTag={setTag}
					tagActive={tag === "erotic" ? true : false}
				/>
			</div>

			<div className="gallery-container">
				{filteredImages.map((img, index) => (
					<img className="image" src={`${img.src}`} alt={img.tag} key={index} />
				))}
			</div>
		</div>
	);
}

const TagButton = ({ name, handleSetTag, tagActive }) => {
	return (
		<button
			className={`tag ${tagActive ? "active hover" : null} `}
			onClick={() => handleSetTag(name)}>
			{name.toUpperCase()}
		</button>
	);
};
