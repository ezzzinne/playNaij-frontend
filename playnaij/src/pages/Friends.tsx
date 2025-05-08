import { useState } from "react";
import { Search, X } from "lucide-react";
import avatar from "../assets/Frame 2147227184.png";
import image from "../assets/afro-man-using-smartphone-isolated-design 1.png";
import { useNavigate } from "react-router-dom";
import '../tailwind-components/tailwind-page.css'

export default function FriendsPage() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeTab] = useState<number>(0);

  const [sentRequests, setSentRequests] = useState([
    { id: 1, name: "John", avatar: "../assets/Frame 2147227184.png" },
  ]);

  const [friendSuggestions, setFriendSuggestions] = useState([
    { id: 1, name: "John_2", avatar: "../assets/Frame 2147227184.png" },
    { id: 2, name: "Michael", avatar: "../assets/Frame 2147227184.png" },
    { id: 3, name: "Johnny", avatar: "../assets/Frame 2147227184.png" },
    { id: 4, name: "Pablo", avatar: "../assets/Frame 2147227184.png" },
    { id: 5, name: "Michael", avatar: "../assets/Frame 2147227184.png" },
    { id: 6, name: "Chief", avatar: "../assets/Frame 2147227184.png" },
  ]);

  const [onlineFriends] = useState([]);

  const navigate = useNavigate();

  const cancelRequest = (id: number) => {
    setSentRequests(sentRequests.filter((request) => request.id !== id));
  };

  const addFriend = (friend: { id: number; name: string; avatar: string }) => {
    setFriendSuggestions(
      friendSuggestions.filter((suggestion) => suggestion.id !== friend.id)
    );
    setSentRequests([...sentRequests, friend]);
  };

  const filteredSuggestions = friendSuggestions.filter((friend) =>
    friend.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-[400px] md:max-w-[600px] lg:max-w-[800px] bg-[#0f172a] rounded-xl shadow-xl overflow-hidden">
        <div className="p-6">
          <h1 className="text-[40px] font-bold text-center text-amber-500 my-6">
            Friends
          </h1>

          {/* Search bar */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search new or existing friends"
              value={searchQuery}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchQuery(e.target.value)
              }
              className="w-full pl-10 h-[65px] pr-10 py-3 bg-gray-800 border-white text-white rounded-full"
            />
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-white"
              size={20}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-emerald-500 rounded-full p-1 hover:bg-emerald-600 transition"
              >
                <X className="text-white" size={16} />
              </button>
            )}
          </div>

          {activeTab === 0 ? (
            <>
              {/* Default view  */}
              {!searchQuery && sentRequests.length === 0 && (
                <div className="flex flex-col items-center mb-6">
                  <img
                    src={image}
                    alt="Find friends"
                    className="mb-6 w-full max-w-[200px] md:max-w-[300px]"
                  />
                </div>
              )}

              {/* Sent friend requests */}
              {sentRequests.length > 0 && (
                <div className="mb-6">
                  <p className="text-gray-300 font-bold text-[20px] mb-2">
                    Sent friend requests
                  </p>
                  {sentRequests.map((request) => (
                    <div
                      key={request.id}
                      className="bg-[#414652] rounded-lg p-3 flex items-center justify-between mb-2"
                    >
                      <div className="flex items-center">
                        <img
                          src={avatar}
                          alt="avatar"
                          className="w-10 h-10 rounded-full mr-3"
                        />
                        <span className="text-white">{request.name}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => cancelRequest(request.id)}
                        className="text-white font-medium text-[18px] px-8 py-3 border-3 border-white rounded-2xl hover:bg-gray-700"
                      >
                        Cancel
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Friend suggestions (filtered by search) */}
              {searchQuery && (
                <div className="mb-6">
                  <p className="text-gray-300 font-bold text-[20px] mb-2">
                    Add friends
                  </p>
                  {filteredSuggestions.length > 0 ? (
                    filteredSuggestions.map((friend) => (
                      <div
                        key={friend.id}
                        className="bg-[#414652] rounded-lg p-3 flex items-center justify-between mb-2"
                      >
                        <div className="flex items-center">
                          <img
                            src={avatar}
                            alt="avatar"
                            className="w-10 h-10 rounded-full mr-3"
                          />
                          <span className="text-white">{friend.name}</span>
                        </div>
                        <button
                          onClick={() => addFriend(friend)}
                          className="bg-emerald-500 font-medium text-[18px] text-white px-11 py-3 rounded-2xl border-4 border-white hover:bg-emerald-600"
                        >
                          Add
                        </button>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-400 text-md text-[20px] text-center">
                      No matching friends found
                    </p>
                  )}
                  <button className="bg-[#414652] w-full border rounded-3xl px-4 py-3 text-white mt-4 text-[20px] font-medium hover:bg-gray-700">
                    Show all
                  </button>
                </div>
              )}

              {/* Online friends */}
              <div className="mb-6">
                <p className="text-gray-300 text-[20px] font-bold mb-2">
                  Online Friends
                </p>
                {onlineFriends.length > 0 ? (
                  <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center">
                    {/* Render online friends here if you have data */}
                  </div>
                ) : (
                  <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center">
                    <div className="text-amber-400 text-4xl mb-2">😔</div>
                    <p className="text-white text-[20px]">Nobody's online</p>
                  </div>
                )}
              </div>

              {/* buttons */}
              <div className="flex flex-col items-center">
                <button
                  onClick={() => navigate("/share-profile")}
                  className="bg-[#10b981] w-full rounded-3xl px-4 py-4 text-white mt-4 text-[20px] font-bold hover:bg-gray-500 transition 300ms"
                >
                  Share profile
                </button>
              </div>

              {/* Invite section */}
              <div className="mt-8">
                <h2 className="text-xl font-bold text-white mb-3">
                  Invite your friends
                </h2>
                <p className="text-gray-400 text-[16px] mb-4">
                  Find friends by searching{" "}
                  <span className="text-amber-500">for their username,</span> or
                  share your QR code /{" "}
                  <span className="text-amber-500">invite link</span>.
                </p>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-64">
              <p className="text-white">Other tab content</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}