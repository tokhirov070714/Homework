import { TbLayoutSidebarLeftExpand } from "react-icons/tb";
import { FiPlus } from "react-icons/fi";
import { useEffect, useState } from "react";

import { fetchData } from "@/lib/api";

type SavedAlbum = {

    album: {

        id: string;
        name: string;
        images: { url: string }[];
        artists: { name: string }[];

    }

}

function Aside() {

    const [open, setOpen] = useState<boolean>(false)

    useEffect(() => {

        fetchData("/me/albums").then((res) => {

            setAlbums(res.items)
            console.log(res.items);


        });

    }, [])

    const [albums, setAlbums] = useState<SavedAlbum[]>([])

    return (

        <div className=

            // THIIIIIIIS !^

            {

                open ? "min-h-screen min-w-[300px] rounded-xl px-4 pt-5 bg-linear-to-b from-[#232323] to-[#0b0b0b] z-0"
                    : "min-h-screen rounded-xl px-4 pt-5 bg-linear-to-b from-[#232323] to-[#0b0b0b] z-0"

            }

        >

            <div className="sticky left-0 top-10">

                <div className="flex flex-col gap-10 items-center">

                    <div

                        className=
                        {

                            open ? "flex justify-between items-center" : ""

                        }

                    >

                        <div className=
                            {
                                open ? "flex items-center gap-30" : ""
                            }
                        >

                            <div className="cursor-pointer p-1.5 flex items-center justify-center">

                                <TbLayoutSidebarLeftExpand onClick={() => setOpen(!open)} size={35} color="white" />

                            </div>

                            <div className=

                                {

                                    open ? "rounded-full p-1.5 flex bg-[#353535] items-center justify-center"
                                        : "mt-5 rounded-full p-1.5 flex bg-[#353535] items-center justify-center"

                                }

                            >

                                <FiPlus size={25} color="white" />

                            </div>

                        </div>

                    </div>

                    <div className="flex flex-col gap-5 mt-6">

                        {

                            albums.map((item) => (

                                <div className=

                                    {

                                        open ? "flex items-center gap-2" : ""

                                    }

                                    key={item.album.id}>

                                    <img className="rounded max-w-[60px]" src={item.album.images[1].url} alt="" />

                                    {

                                        open ?
                                            <div>

                                                <h1 className="text-base">{item.album.name}</h1>
                                                {item.album.artists.map((artist) => (

                                                    <p className="text-sm text-gray-400">{artist.name}</p>

                                                ))}

                                            </div>

                                            : ""

                                    }

                                </div>

                            ))

                        }

                    </div>

                </div>

            </div>

        </div >

    )

}

export default Aside