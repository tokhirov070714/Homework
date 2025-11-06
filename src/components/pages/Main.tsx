import { fetchData } from "@/lib/api";
import React, { useEffect, useState } from "react";

import Album from "../custom/Album";
import AlbumCover from "../custom/AlbumCover";
import Aside from "../custom/Aside";


type SavedAlbum = {
	album: {
		id: string;
		name: string;
		images: { url: string }[];
	};
};

type defaultAlbum = {

	id: string;
	name: string;
	artists: { name: string; }[];
	images: { url: string }[];

};

const Main: React.FC = () => {

	const [albums, setAlbums] = useState<SavedAlbum[]>([]);

	const [defaultAlbums, setDefaultAlbums] = useState<defaultAlbum[]>([])

	const [miyagi, setMiyagi] = useState<defaultAlbum[]>([])

	useEffect(() => {

		fetchData("/me/albums").then((res) => setAlbums(res.items));
		fetchData("/browse/new-releases").then(res => setDefaultAlbums(res.albums.items));
		fetchData("artists/1kmpkcYbuaZ8tnFejLzkj2/albums?limit=6").then(res => setMiyagi(res.items));

	}, [])

	return (

		<div className="py-0 flex gap-3">

			<Aside />

			<div className="px-4">

				<div className="max-w-[80%] mt-5 mx-auto grid gap-2 grid-cols-4">

					{
						albums.map((item) => (
							<Album key={item.album.id} id={item.album.id} name={item.album.name} image={item.album.images[2].url} />
						))
					}

				</div>

				<div className="px-12 mt-10">

					<h1 className="text-bold text-2xl">Recommended for you today</h1>

					<div className="grid grid-cols-6 mt-5">

						{
							defaultAlbums
								.slice(7, 13)
								.map((item) => (
									<AlbumCover
										key={item.id}
										name={item.name}
										image={item.images[2].url}
										artist={item.artists.map(a => a.name).join(", ")}
									/>
								))
						}

					</div>

				</div>

				<div className="px-12 mt-10">

					<p className="text-xs text-gray-500">More like</p>
					<h1 className="text-bold text-2xl">Miyagi</h1>

					<div className="grid grid-cols-6 mt-5">

						{
							miyagi.map((item) => (
								<AlbumCover
									key={item.id}
									name={item.name}
									image={item.images[1].url}
									artist={item.artists.map(a => a.name).join(", ")}
								/>
							))
						}

					</div>

				</div>

			</div>

		</div>

	);
};

export default Main;
