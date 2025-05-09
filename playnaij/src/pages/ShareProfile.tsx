import avatar from "../assets/avatar.png";
import instagram from "../assets/instagram_2111463.png";
import messenger from "../assets/messenger_889182.png";
import whatsapp from "../assets/whatsapp_3536445.png";
import twitter from "../assets/twitter_5969020.png";
import QrCode from "../assets/WhatsApp Image 2025-04-23 at 19.02.14_e5f935ae 1.png";
import '../App.css';

interface ProfileData {
  username: string;
  platform: string;
  avatarImage: string;
}

const ShareProfilePage = () => {
  const profile: ProfileData = {
    username: "JONDOE419",
    platform: "PlayNaija.com",
    avatarImage: "/src/assets/avatar.png",
  };

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center p-4" style={{ backgroundColor: 'white' }}>
      <div className="w-100 text-white rounded-4 shadow-lg overflow-hidden" style={{ maxWidth: '800px', backgroundColor: '#111827' }}>
        <div className="p-4 p-md-5">
          <h1 className="text-center text-warning mb-4 fs-2 fs-md-3">Share profile</h1>

          <div className="d-flex flex-column align-items-center mb-4">
            <img
              src={avatar}
              alt="Profile Avatar"
              className="rounded-circle border border-secondary mb-2"
              style={{ width: '80px', height: '80px' }}
            />
            <div className="text-center">
              <p className="fw-semibold fs-5">{profile.username}</p>
              <p className="text-warning fs-6 mb-5">{profile.platform}</p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="d-flex flex-wrap justify-content-center align-items-center gap-3 mb-4">
            <a
              href="https://www.instagram.com"
              target="_blank"
              className="text-white text-decoration-none text-center small hover-opacity"
            >
              <img src={instagram} className="mb-2" style={{ width: '40px', height: '40px' }} />
              <p>Instagram</p>
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              className="text-white text-decoration-none text-center small hover-opacity"
            >
              <img src={twitter} className="mb-2" style={{ width: '40px', height: '40px' }} />
              <p>Twitter</p>
            </a>
            <a
              href="https://www.whatsapp.com"
              target="_blank"
              className="text-white text-decoration-none text-center small hover-opacity"
            >
              <img src={whatsapp} className="mb-2" style={{ width: '40px', height: '40px' }} />
              <p>WhatsApp</p>
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              className="text-white text-decoration-none text-center small hover-opacity"
            >
              <img src={messenger} className="mb-2" style={{ width: '40px', height: '40px' }} />
              <p>Messenger</p>
            </a>
          </div>

          {/* Copy Link Button */}
          <div className="d-flex justify-content-center">
            <button
              className="btn w-50 w-md-50 fw-medium mb-4 rounded-pill p-2"
              style={{ backgroundColor: '#10B981', color: '#fff' }}
              onClick={() => {
                const link = `${window.location.origin}/profile/${profile.username}`;
                navigator.clipboard
                  .writeText(link)
                  .then(() => alert('Profile link copied to clipboard!'))
                  .catch(() => alert('Failed to copy the link. Please try again.'));
              }}
            >
              Copy Link
            </button>
          </div>

          {/* QR Code */}
          <div className="p-4 rounded shadow d-flex justify-content-center mt-3 mt-md-5">
            <img
              src={QrCode}
              alt="QR Code"
              style={{ width: '240px', height: '240px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareProfilePage;