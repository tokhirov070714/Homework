import { fetchData } from "@/lib/api";
import { useContext, useEffect, useState } from "react";

import { TbLayoutSidebarLeftExpand } from "react-icons/tb";
import { BsArrowsAngleExpand } from "react-icons/bs";

import { AlbumImages } from "../layouts/Layout";


type Track = {

    name: string;
    artists: { name: string }[]

}

type Images = {

    images: { url: string }[];

}

function AlbumInfo({ id }: { id: string; }) {

    const { images } = useContext(AlbumImages)

    const [track, setTrack] = useState<Track | null>(null)
    const [theImages, setTheImages] = useState<Images | null>(null)

    const [expand, setExpand] = useState(false)

    useEffect(() => {

        if (images.length > 0) {

            setTheImages({ images });
        }

    }, [images]);



    useEffect(() => {

        fetchData(`tracks/${id}`).then((res) => {

            setTrack(res)

        })

    }, [id])

    return (

        <div

            className={

                expand ? "px-25 pb-10 mb-20 top-20 bottom-0 left-0 right-0 w-full h-full bg-black transition-discrete duration-500 overflow-auto"
                    : "fixed right-0 top-20 z-1 h-min-full bg-black py-10 px-5 w-65 h-screen transition-discrete duration-500 overflow-auto"

            }

        >

            {

                track &&

                <div>

                    <div
                        className={
                            !(expand) ? "flex items-center justify-between" : "flex items-center justify-between mt-10"
                        }
                    >

                        {

                            !(expand) && <div className="cursor-pointer"><TbLayoutSidebarLeftExpand size={23} /></div>

                        }

                        <h1 className=

                            {

                                !(expand) ? "font-bold" : "hidden"

                            }

                        >{track.name}</h1>

                        <div onClick={() => {

                            const newExpand = !expand
                            setExpand(newExpand)
                            // console.log(`Album ${newExpand}`)


                        }} className="cursor-pointer"><BsArrowsAngleExpand size={18} /></div>

                    </div>

                    <div className=

                        {

                            !(expand) ? "mt-10 rounded-xl" : "mt-10 rounded-xl flex items-center justify-center"

                        }

                    >

                        {

                            theImages &&
                            <img className={

                                !(expand) ? "rounded-xl" : "rounded-xl max-w-[450px]"

                            } src={theImages.images[0].url} alt="" />

                        }

                    </div>

                    <div>

                        <h1 className="text-2xl font-bold mt-5 ml-1">{track.name}</h1>

                        <div>

                            {track.artists.map((artist) => (

                                <p className="text-gray-400 ml-1" key={artist.name}>

                                    {artist.name}

                                </p>

                            ))}

                        </div>

                        <div className="p-4 mt-5 rounded-2xl bg-[#1f1f1f]">

                            <div className="flex items-center justify-between">

                                <p className="text-sm">Credits</p>

                                <p className="text-sm text-gray-400 underline cursor-pointer">Show all</p>

                            </div>

                            <div className="flex justify-between mt-6">

                                <div>

                                    <p>{track.artists[0].name}</p>
                                    <p className="text-sm text-gray-400">Main artist</p>

                                </div>

                                <div className="cursor-pointer text-sm border border-white rounded-full flex items-center justify-center px-3 py-1 h-[30px]">

                                    <p>Follow</p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            }

        </div>


    )

}

export default AlbumInfo;