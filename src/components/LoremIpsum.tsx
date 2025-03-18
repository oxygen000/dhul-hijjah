import React from "react";
import Image from "next/image";

const events = [
  {
    id: 1,
    title: "Music Festivals Around the World",
    text: "Experience the best music festivals in breathtaking locations, from Coachella in the USA to Tomorrowland in Belgium.",
    image: "/Icon8.png",
  },
  {
    id: 2,
    title: "Luxury Beach Parties",
    text: "Enjoy exclusive beach parties with world-class DJs, vibrant atmospheres, and stunning ocean views in Ibiza and Miami.",
    image: "/Icosssn.png",
  },
  {
    id: 3,
    title: "Cultural Tourism Adventures",
    text: "Immerse yourself in diverse cultures by exploring historical sites, traditional festivals, and unique local experiences worldwide.",
    image: "/Ic121on.png",
  },
  {
    id: 4,
    title: "Exclusive Nightlife Experiences",
    text: "Discover high-end clubs, rooftop bars, and VIP events in iconic cities like Dubai, Las Vegas, and Paris.",
    image: "/Icon.png",
  },
];

function EventsSection() {
  return (
    <main className="flex flex-col items-center justify-center py-12 p-6">
      <h1 className="text-[#4354a4] text-xl font-bold mb-6">
        Unforgettable Events & Travel Experiences
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {events.map((event) => (
          <div key={event.id} className="relative flex flex-col items-center text-center p-6 border border-transparent">
            
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-6 border-t-4 border-l-4 border-[#4354a4]"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-[#4354a4]"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-[#4354a4]"></div>
              <div className="absolute bottom-0 right-0 w-full h-6 border-b-4 border-r-4 border-[#4354a4]"></div>
            </div>

            <div className="relative flex items-center px-6">
              <Image src={event.image} alt="Event Icon" width={75} height={75} className="mr-4" />
              <div className="text-left">
                <h2 className="text-[#111633] text-[20px] font-medium">{event.title}</h2>
                <p className="text-[#595959] text-sm mt-2">{event.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-[#595959] text-center mt-7 w-[75%] text-[15px]">
        Whether you&apos;re looking for thrilling music festivals, vibrant beach parties, cultural adventures, or unforgettable nightlife, 
        the world offers endless experiences for every traveler. Explore stunning destinations, enjoy world-class entertainment, 
        and create memories that last a lifetime.
      </p>
    </main>
  );
}

export default EventsSection;
