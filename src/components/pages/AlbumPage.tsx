import { fetchData } from "@/lib/api";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";

import { FaShuffle } from "react-icons/fa6";
import { GoPlusCircle } from "react-icons/go";
import { FaClock } from "react-icons/fa6";

import Song from "../custom/Song";
import Play3 from "../custom/Play3";

import { TrackCTX } from "../layouts/Layout";
import { AlbumImages } from "../layouts/Layout";

type Album = {

    id: string;
    name: string;
    images: { url: string }[];

}

type Track = {

    id: string;
    name: string;
    artists: { name: string; }[];
    duration_ms: number;

};

function AlbumPage() {

    const { albumId } = useParams()

    const { setTrackId } = useContext(TrackCTX)
    const { setImages } = useContext(AlbumImages)

    const [tracks, setTracks] = useState<Track[]>([])
    const [album, setAlbum] = useState<Album>()

    const [trackIDS, setTrackIDS] = useState([])

    useEffect(() => {

        fetchData(`/albums/${albumId}/tracks`).then((res) => {

            setTracks(res.items)

            const ids = res.items.map(item => item.id)
            setTrackIDS(ids)

        });
        fetchData(`/albums/${albumId}`).then((res) => {

            setAlbum(res)
            setImages(res.images)

        });

    }, [albumId, setImages]);

    return (

        <div className="mx-auto w-full relative flex">


            <div className="w-full">

                <div className="py-5 px-8 bg-[#0f0f1d] flex items-end gap-8">

                    <div className="w-[232px]">

                        <img className="rounded-xl" src={album?.images[0].url} alt="" />

                    </div>

                    <div>

                        <p className="text-sm">Album</p>

                        <p className="text-8xl font-bold mb-10">{album?.name}</p>

                    </div>

                </div>

                <div className="px-8 mt-5 flex items-center gap-10">

                    <Play3 id={trackIDS[0]} />
                    <div

                        onClick={() => {

                            console.log(trackIDS[Math.floor(Math.random() * trackIDS.length)]);
                            setTrackId(trackIDS[Math.floor(Math.random() * trackIDS.length)])

                        }}

                        className="cursor-pointer"><FaShuffle color="gray" size={35} /></div>
                    <div className="cursor-pointer"><GoPlusCircle color="gray" size={35} /></div>

                </div>

                <div>

                    <div className="mt-7 max-w-7xl pb-3 border-b-[0.5px] border-gray-500 mx-auto flex items-center justify-between">

                        <div className="flex items-center gap-5">

                            <p className="text-base text-gray-400">#</p>
                            <p className="text-base text-gray-400">Title</p>

                        </div>

                        <div className="pr-3">

                            <div className="cursor-pointer"><FaClock color="gray" size={20} /></div>

                        </div>

                    </div>

                    <div>

                        <div>

                            {
                                tracks.map((item, index) => (
                                    <Song key={item.id} id={item.id} number={index + 1} title={item.name} artist={item.artists[0].name} ms={item.duration_ms} />
                                ))


                            }

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default AlbumPage;