import { useState } from "react"
import Play from "./Play"
import { Link } from "react-router";

type AlbumProps = {
    id: string;
    name: string;
    image: string;
}

function Album({ id, name, image }: AlbumProps) {

    const [hovered, setHovered] = useState(false)

    function mouseIn() {

        setHovered(true)

    }

    function mouseOut() {

        setHovered(false)

    }

    return (

        <Link to={`/album/${id}`}>

            <div onMouseEnter={mouseIn} onMouseLeave={mouseOut} className="w-auto h-16 cursor-pointer flex items-center opacity-80 transition duration-200 hover:opacity-90 relative">

                <div className="w-22 h-full">
                    <img className="w-full h-full" src={image} alt="" />
                </div>

                <div className="bg-gray-700 w-full h-full flex items-center justify-between py-1 px-3">

                    <p className="text-sm font-bold">{name}</p>

                    {

                        hovered ? <Play /> : ""

                    }

                </div>

            </div>

        </Link>

    )

}

export default Album