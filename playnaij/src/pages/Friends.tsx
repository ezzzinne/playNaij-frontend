import { useState } from "react";
import { Search, X } from "lucide-react";
import avatar from "../assets/Frame 2147227184.png";
import image from "../assets/afro-man-using-smartphone-isolated-design 1.png";
import { useNavigate } from "react-router-dom";
import '../App.css';

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
      <div className="min-vh-100 d-flex align-items-center justify-content-center p-4 bg-white">
      <div className="w-100 text-white rounded-4 shadow-lg overflow-hidden" style={{ maxWidth: '800px', backgroundColor: '#111827' }}>
        <div className="p-4">
          <h1 className="text-center text-warning fw-bold display-5 mb-4">Friends</h1>

          {/* Search bar */}
          <div className="position-relative mb-4">
            <input
              type="text"
              placeholder="Search new or existing friends"
              value={searchQuery}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchQuery(e.target.value)
              }
              className="form-control rounded-pill ps-5 pe-5 py-3 text-white border border-white"
              style={{ height: '65px', backgroundColor: '#414652' }}
            />
            <Search
              className="position-absolute top-50 start-0 translate-middle-y ms-3 text-white"
              size={20}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="position-absolute top-50 end-0 translate-middle-y btn btn-success rounded-circle p-2"
              >
                <X className="text-white" size={16} />
              </button>
            )}
          </div>

          {/* Content */}
          {activeTab === 0 ? (
            <>
              {/* Empty state image */}
              {!searchQuery && sentRequests.length === 0 && (
                <div className="d-flex flex-column align-items-center mb-4">
                  <img
                    src={image}
                    alt="Find friends"
                    className="img-fluid mb-3"
                    style={{ maxWidth: '300px' }}
                  />
                </div>
              )}

              {/* Sent Requests */}
              {sentRequests.length > 0 && (
                <div className="mb-4">
                  <p className="text-white fw-bold fs-5 mb-2">Sent friend requests</p>
                  {sentRequests.map((request) => (
                    <div
                      key={request.id}
                      className="rounded p-3 d-flex justify-content-between align-items-center mb-2" style={{ backgroundColor: '#414652' }}
                    >
                      <div className="d-flex align-items-center">
                        <img src={avatar} alt="avatar" className="rounded-circle me-3" style={{ width: '40px', height: '40px' }} />
                        <span>{request.name}</span>
                      </div>
                      <button
                        onClick={() => cancelRequest(request.id)}
                        className="btn btn-outline-light rounded-3 px-4"
                      >
                        Cancel
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Friend Suggestions */}
              {searchQuery && (
                <div className="mb-4">
                  <p className="text-white fw-bold fs-5 mb-2">Add friends</p>
                  {filteredSuggestions.length > 0 ? (
                    filteredSuggestions.map((friend) => (
                      <div
                        key={friend.id}
                        className="rounded p-3 d-flex justify-content-between align-items-center mb-2" style={{ backgroundColor: '#414652' }}
                      >
                        <div className="d-flex align-items-center">
                          <img src={avatar} alt="avatar" className="rounded-circle me-3" style={{ width: '40px', height: '40px' }} />
                          <span>{friend.name}</span>
                        </div>
                        <button
                          onClick={() => addFriend(friend)}
                          className="btn border-white text-white rounded-3 px-4"
                          style={{ backgroundColor: '#10B981' }}
                        >
                          Add
                        </button>
                      </div>
                    ))
                  ) : (
                    <p className="text-center text-muted fs-5">No matching friends found</p>
                  )}
                  <button className="btn w-100 mt-3 rounded-pill fs-5 fw-medium" style={{ backgroundColor: '#414652', color: '#fff' }}>
                    Show all
                  </button>
                </div>
              )}

              {/* Online Friends */}
              <div className="mb-4">
                <p className="text-white fw-bold fs-5 mb-2">Online Friends</p>
                {onlineFriends.length > 0 ? (
                  <div className="rounded p-4 d-flex flex-column align-items-center justify-content-center" style={{ backgroundColor: '#414652' }}> 
                    {/* Render online friends here */}
                  </div>
                ) : (
                  <div className=" rounded p-4 d-flex flex-column align-items-center justify-content-center" style={{ backgroundColor: '#414652' }}>
                    <div className="text-warning fs-1 mb-2">😔</div>
                    <p className="text-white fs-5">Nobody's online</p>
                  </div>
                )}
              </div>

              {/* Share Profile */}
              <div className="d-flex flex-column align-items-center">
                <button
                  onClick={() => navigate("/share-profile")}
                  className="btn w-100 rounded-pill mt-3 fs-5 py-3"
                  style={{ backgroundColor: '#10B981', color: '#fff' }}
                >
                  Share profile
                </button>
              </div>

              {/* Invite Section */}
              <div className="mt-4">
                <h2 className="fs-4 fw-bold text-white text-center mb-2">Invite your friends</h2>
                <p className="text-white fs-6">
                  Find friends by searching <span className="text-warning">for their username,</span> or
                  share your QR code / <span className="text-warning">invite link</span>.
                </p>
              </div>
            </>
          ) : (
            <div className="d-flex align-items-center justify-content-center" style={{ height: '16rem' }}>
              <p className="text-white">Other tab content</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}