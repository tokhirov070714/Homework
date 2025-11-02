// // import { Sidebar } from "lucide-react"
// // import Track from "../custom/Track"
// import Aside from "../custom/Aside"


// function Main() {

//     const data1 = [
//         {
//             "id": "1",
//             "title": "Blinding Lights",
//             "artist": "The Weeknd",
//             "image": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"
//         },
//         {
//             "id": "2",
//             "title": "Uptown Funk",
//             "artist": "Mark Ronson ft. Bruno Mars",
//             "image": "https://images.unsplash.com/photo-1511376777868-611b54f68947"
//         },
//         {
//             "id": "3",
//             "title": "Save Your Tears",
//             "artist": "The Weeknd",
//             "image": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"
//         },
//         {
//             "id": "4",
//             "title": "Peaches",
//             "artist": "Justin Bieber ft. Daniel Caesar & Giveon",
//             "image": "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
//         },
//         {
//             "id": "5",
//             "title": "Levitating",
//             "artist": "Dua Lipa ft. DaBaby",
//             "image": "https://images.unsplash.com/photo-1487215078519-e21cc028cb29"
//         },
//         {
//             "id": "6",
//             "title": "Shape of You",
//             "artist": "Ed Sheeran",
//             "image": "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc"
//         }
//     ]

//     const data2 = [
//         {
//             "id": "7",
//             "title": "Bad Guy",
//             "artist": "Billie Eilish",
//             "image": "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2"
//         },
//         {
//             "id": "8",
//             "title": "Sunflower",
//             "artist": "Post Malone & Swae Lee",
//             "image": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30"
//         },
//         {
//             "id": "19",
//             "title": "Watermelon Sugar",
//             "artist": "Harry Styles",
//             "image": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"
//         },
//         {
//             "id": "10",
//             "title": "Can't Stop the Feeling!",
//             "artist": "Justin Timberlake",
//             "image": "https://images.unsplash.com/photo-1511379938547-c1f69419868d"
//         },
//         {
//             "id": "11",
//             "title": "Senorita",
//             "artist": "Shawn Mendes & Camila Cabello",
//             "image": "https://images.unsplash.com/photo-1511988617509-a57c8a288659"
//         },
//         {
//             "id": "12",
//             "title": "Dance Monkey",
//             "artist": "Tones and I",
//             "image": "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2"
//         }
//     ]



//     return (

//         <div className="py-0 px-4 flex gap-2 relative z-0">

//             <Aside />

//             <div className="w-full min-h-screen rounded-xl px-10 pt-5 bg-linear-to-b from-[#232323] to-[#0b0b0b]">

//                 <div className="flex items-center justify-between mt-15">

//                     <h1 className="text-3xl">Recommended for you</h1>

//                     <p className="text-sm text-gray-300 cursor-pointer font-bold">Show all</p>

//                 </div>

//                 <div className="mt-4 flex flex-wrap items-center justify-between">

//                     {

//                         data1.map((item) => (

//                             <Track key={item.id} title={item.title} artist={item.artist} image={item.image} />

//                         ))

//                     }

//                 </div>

//                 <div className="flex items-center justify-between mt-15">

//                     <h1 className="text-3xl">Recommended for you today</h1>

//                     <p className="text-sm text-gray-300 cursor-pointer font-bold">Show all</p>

//                 </div>

//                 <div className="mt-8 flex flex-wrap items-center justify-between">

//                     {

//                         data2.map((item) => (

//                             <Track key={item.id} title={item.title} artist={item.artist} image={item.image} />

//                         ))

//                     }

//                 </div>

//             </div>

//         </div>

//     )

// }

// export default Main