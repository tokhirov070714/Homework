import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Footer() {

    return (

        <div className="px-4">

            <footer className="bg-black text-gray-400 px-12 py-10">

                <div className="flex flex-wrap justify-between border-b border-t border-gray-700 py-12">

                    <div>

                        <h3 className="text-white font-semibold mb-4">Company</h3>

                        <ul className="flex flex-col gap-2">

                            <li><a href="#" className="hover:underline">About</a></li>

                            <li><a href="#" className="hover:underline">Jobs</a></li>

                            <li><a href="#" className="hover:underline">For the Record</a></li>

                        </ul>

                    </div>



                    <div>

                        <h3 className="text-white font-semibold mb-4">Communities</h3>

                        <ul className="flex flex-col gap-2">

                            <li><a href="#" className="hover:underline">For Artists</a></li>

                            <li><a href="#" className="hover:underline">Developers</a></li>

                            <li><a href="#" className="hover:underline">Advertising</a></li>

                            <li><a href="#" className="hover:underline">Investors</a></li>

                            <li><a href="#" className="hover:underline">Vendors</a></li>

                        </ul>

                    </div>



                    <div>

                        <h3 className="text-white font-semibold mb-4">Useful links</h3>

                        <ul className="flex flex-col gap-2">

                            <li><a href="#" className="hover:underline">Support</a></li>

                            <li><a href="#" className="hover:underline">Free Mobile App</a></li>

                            <li><a href="#" className="hover:underline">Popular by Country</a></li>

                            <li><a href="#" className="hover:underline">Import your music</a></li>

                        </ul>

                    </div>



                    <div>

                        <h3 className="text-white font-semibold mb-4">Spotify Plans</h3>

                        <ul className="flex flex-col gap-2">

                            <li><a href="#" className="hover:underline">Premium Individual</a></li>

                            <li><a href="#" className="hover:underline">Premium Duo</a></li>

                            <li><a href="#" className="hover:underline">Premium Family</a></li>

                            <li><a href="#" className="hover:underline">Premium Student</a></li>

                            <li><a href="#" className="hover:underline">Spotify Free</a></li>

                        </ul>

                    </div>

                    <div className="flex items-start space-x-4 mt-6 md:mt-0">

                        <div className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 cursor-pointer">

                            <IoLogoInstagram color="white" />

                        </div>

                        <div className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 cursor-pointer">

                            <FaTwitter color="white" />

                        </div>

                        <div className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 cursor-pointer">

                            <FaFacebook color="white" />

                        </div>

                    </div>

                </div>



                <div className="flex flex-wrap justify-between items-center mt-6 text-sm">

                    <div className="flex flex-wrap space-x-6">

                        <a href="#" className="hover:underline">Legal</a>

                        <a href="#" className="hover:underline">Safety & Privacy Center</a>

                        <a href="#" className="hover:underline">Privacy Policy</a>

                        <a href="#" className="hover:underline">Cookies</a>

                        <a href="#" className="hover:underline">About Ads</a>

                        <a href="#" className="hover:underline">Accessibility</a>

                    </div>

                    <p className="mt-4 md:mt-0">© 2025 Spotify AB</p>

                </div>

            </footer>

        </div>

    )
}

export default Footer