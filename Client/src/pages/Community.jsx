import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { dummyCreationData, dummyPublishedCreationData } from "../assets/assets";
import { Heart } from "lucide-react";

const Community = () => {
  const [creations, setCreations] = useState([]);
  const { user } = useUser();

  const fetchCreations = async () => {
    setCreations(dummyPublishedCreationData);
  };

  useEffect(() => {
    if (user) {
      fetchCreations();
    }
  }, [user]);

  return (
    <div className="flex-1 h-full flex flex-col gap-4 p-6">
      <h2 className="text-xl font-semibold">Creations</h2>

      <div className="bg-white h-full w-full rounded-xl overflow-y-scroll p-3 flex flex-wrap gap-4">
        {creations.map((item, index) => (
          <div
            key={index}
            className="relative group w-full sm:w-1/2 lg:w-1/3 p-3 bg-gray-50 rounded-lg shadow"
          >
            {/* ✅ Render image or text depending on type */}
            {item.type === "image" ? (
              <img
                src={item.content}
                alt={item.prompt}
                className="w-full h-64 object-cover rounded-lg"
              />
            ) : (
              <div className="h-64 overflow-y-auto p-2 bg-gray-100 rounded-lg">
                <p className="text-gray-800 text-sm whitespace-pre-line">
                  {item.content}
                </p>
              </div>
            )}

            {/* ✅ Overlay for prompt + likes */}
            <div className="absolute inset-0 flex flex-col justify-end p-3 gap-2 group-hover:bg-gradient-to-b from-transparent to-black/80 text-white rounded-lg">
              <p className="text-sm hidden group-hover:block">{item.prompt}</p>

              <div className="flex gap-1 items-center justify-end">
                <p>{item.likes.length}</p>
                <Heart
                  className={`min-w-5 h-5 hover:scale-110 cursor-pointer ${
                    user && item.likes.includes(user.id)
                      ? "fill-red-500 text-red-600"
                      : "text-white"
                  }`}
                />
              </div>
            </div>

            {/* ✅ Type badge */}
            <span className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
              {item.type}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
