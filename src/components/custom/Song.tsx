import { useState } from "react";
import { IoIosPlay } from "react-icons/io";

export type Track = {

    number: number;
    title: string;
    artist: string;
    ms: number;

};

function Song({ number, title, artist, ms }: Track) {

    const [hovered, setHovered] = useState(false)

    const formatDuration = (ms: number) => {

        const minutes = Math.floor(ms / 60000);
        const seconds = Math.floor((ms % 60000) / 1000);
        return `${minutes}:${seconds.toString().padStart(2, "0")}`;

    };

    return (

        <div onMouseEnter={() => setHovered(true)} onMouseOut={() => setHovered(false)} className="max-w-7xl mx-auto px-1 flex items-center justify-between py-3 rounded-md hover:bg-gray-800 cursor-pointer">

            <div className="flex items-center gap-4">

                <p className="text-gray-400 text-sm text-right group-hover:hidden">

                    {

                        hovered ? <IoIosPlay color="white" size={20} /> : number

                    }

                </p>

                <div>

                    <p className="text-white font-medium ml-1">{title}</p>

                    <p className="text-gray-400 text-sm ml-1">{artist}</p>

                </div>

            </div>

            <span className="text-whtite text-sm pr-2">{formatDuration(ms)}</span>

        </div>

    )

}

export default Song;