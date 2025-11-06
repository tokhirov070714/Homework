import { TbLayoutSidebarLeftExpand } from "react-icons/tb";
import { TbLayoutSidebarRightExpand } from "react-icons/tb";
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

    const [open, setOpen] = useState(false)
    const [albums, setAlbums] = useState<SavedAlbum[]>([])

    return (

        <div className="min-h-screen rounded-xl px-4 pt-5 bg-linear-to-b from-[#232323] to-[#0b0b0b]">

            <div className="sticky left-0 top-25">

                <div className="flex flex-col items-center">

                    <div className="cursor-pointer p-1.5">

                        <TbLayoutSidebarLeftExpand size={30} color="white" />

                    </div>

                    <div className="mt-2 rounded-full p-1.5 flex bg-[#353535] items-center justify-center">

                        <FiPlus size={23} color="white" />

                    </div>

                    <div className="flex flex-col gap-5 mt-4">

                        {

                            albums.map((item) => (

                                <div className="cursor-pointer" key={item.album.id}>

                                    <img className="rounded w-14 h-14" src={item.album.images[2].url} alt="" />

                                </div>

                            ))

                        }

                    </div>

                </div>

                <div className={

                    open ? "mt-4" : "hidden"

                }>

                    <div className="bg-[#282828] p-6 rounded-lg max-w-sm mx-auto shadow-lg">

                        <h2 className="text-white text-xl font-bold mb-2">
                            Create your first playlist
                        </h2>


                        <p className="text-gray-300 text-sm mb-6">
                            It's easy, we'll help you
                        </p>


                        <button className="bg-white flex items-center justify-center w-[145px] h-[34px] py-2 px-4 text-black text-sm font-semibold rounded-full ">
                            Create playlist
                        </button>
                    </div>

                </div>

            </div>

        </div >

    )

}

export default Aside