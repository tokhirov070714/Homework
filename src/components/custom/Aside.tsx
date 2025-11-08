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

    useEffect(() => {

        fetchData("/me/albums").then((res) => setAlbums(res.items));

    }, [])

    const [albums, setAlbums] = useState<SavedAlbum[]>([])

    return (

        <div className="min-h-screen rounded-xl px-4 pt-5 bg-linear-to-b from-[#232323] to-[#0b0b0b] z-0">

            <div className="sticky left-0 top-10">

                <div className="flex flex-col gap-10 items-center">

                    <div>

                        <div className="cursor-pointer p-1.5">

                            <TbLayoutSidebarLeftExpand size={35} color="white" />

                        </div>

                        <div className="mt-2 rounded-full p-2.5 flex bg-[#353535] items-center justify-center">

                            <FiPlus size={28} color="white" />

                        </div>

                    </div>

                    <div className="flex flex-col gap-5 mt-6">

                        {

                            albums.map((item) => (

                                <div className="cursor-pointer" key={item.album.id}>

                                    <img className="rounded max-w-[60px]" src={item.album.images[1].url} alt="" />

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