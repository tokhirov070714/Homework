import { useContext } from "react";
import { FaPlay } from "react-icons/fa";
import { TrackCTX } from "../layouts/Layout";

function Play3({ id }) {

    const { setTrackId } = useContext(TrackCTX)

    return (

        <div

            onClick={() => {

                setTrackId(id)

            }}

            className="w-13 h-13 cursor-pointer rounded-full ml-5 flex items-center justify-center bg-[#3be477] shadow-[0_8px_8px_rgba(0,0,0,0.3)]">

            <FaPlay color="black" size={15} />

        </div>

    )

}

export default Play3