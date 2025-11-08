import { useState } from "react";
import Play2 from "./Play2";

function AlbumCover({ image, name, artist }) {

    const [hovered, setHovered] = useState(false)

    function mouseIn() {

        setHovered(true)

    }

    function mouseOut() {

        setHovered(false)

    }


    return (

        <div onMouseEnter={mouseIn} onMouseLeave={mouseOut} className="w-full h-[250px] cursor-pointer rounded-xl p-4 mx-auto transition duration-300 ease-in-out hover:bg-linear-to-b hover:from-[#FFFFFF4D] hover:to-transparent relative">

            <div className="rounded-xl">

                <img className="rounded-xl" src={image} alt="" />

                {

                    hovered ? <Play2 /> : ""

                }

            </div>

            <div className="mt-3">

                <p className="text-sm truncate w-40">{name}</p>
                <p className="text-xs text-gray-400 mt-1">{artist}</p>

            </div>

        </div>

    )

}

export default AlbumCover;