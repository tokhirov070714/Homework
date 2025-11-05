import { BsSpotify } from "react-icons/bs";
import { MdHomeFilled } from "react-icons/md";
import { GoSearch } from "react-icons/go";
import { IoIosBrowsers } from "react-icons/io";
import { LiaDownloadSolid } from "react-icons/lia";
import { BsBellFill } from "react-icons/bs";
import { IoPeople } from "react-icons/io5";

import { fetchData } from "@/lib/api";
import { useEffect, useState } from "react";

function Header() {

    const [username, setUsername] = useState<string>("")
    const [image, setImage] = useState<string>("")


    useEffect(() => {

        fetchData("/me").then((res) => {

            setUsername(res.display_name[0])
            setImage(res.images[1].url)

        });

    }, [])


    return (

        <div className="px-4 py-3 sticky top-0 bg-black z-1 text-white">

            <div className="w-full flex items-center justify-between">

                <div>

                    <BsSpotify color="white" size={32} />

                </div>

                <div className="flex items-center gap-6">

                    <div className="flex items-center gap-2">

                        <div className="w-12 h-12 cursor-pointer rounded-full flex items-center justify-center bg-[#1f1f1f]">

                            <MdHomeFilled color="white" size={32} />

                        </div>

                        <div className="flex items-center gap-2 rounded-4xl bg-[#1f1f1f] px-3 py-2 w-[480px]">

                            <div className="cursor-pointer"><GoSearch color="white" size={32} /></div>

                            <input className="w-full px-3 py-2" type="text" placeholder="What do you want to play?" />

                            <div className="border-l cursor-pointer border-gray-500 pl-3">

                                <IoIosBrowsers color="gray" size={28} />

                            </div>

                        </div>

                    </div>

                    <div className="flex items-center gap-5">

                        <button className="w-[142px] h-8 cursor-pointer bg-white text-black text-sm rounded-full transition duration-200 hover:opacity-80">Explore Premium</button>

                        <div className="flex items-center gap-1 cursor-pointer">

                            <LiaDownloadSolid color="gray" size={22} />
                            <p className="text-sm text-gray-500">Install App</p>

                        </div>

                        <div className="flex items-center gap-2">

                            <a href="">

                                <BsBellFill color="gray" size={18} />

                            </a>

                            <a href="">

                                <IoPeople color="gray" size={18} />

                            </a>

                        </div>

                        <div className="flex items-center justify-center p-1.5 w-12 h-12 rounded-full overflow-hidden bg-[#1f1f1f]">

                            <div className="bg-[#f573a0] overflow-hidden cursor-pointer w-full h-full rounded-full flex items-center justify-center">

                                {/* <p className="text-base text-center">{username}</p> */}

                                {

                                    image == "" ? <p className="text-base text-center">{username}</p> : <img src={image} alt="" />

                                }

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default Header