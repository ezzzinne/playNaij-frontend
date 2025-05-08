import avatar from "../assets/avatar.png";
import instagram from "../assets/instagram_2111463.png";
import messenger from "../assets/messenger_889182.png";
import whatsapp from "../assets/whatsapp_3536445.png";
import twitter from "../assets/twitter_5969020.png";
import QrCode from "../assets/WhatsApp Image 2025-04-23 at 19.02.14_e5f935ae 1.png";
import '../tailwind-components/tailwind-page.css';

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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-[400px] md:max-w-[600px] lg:max-w-[800px] bg-[#0f172a] rounded-xl shadow-xl overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl md:text-3xl font-medium my-8 text-[#f0a014] text-center">
            Share profile
          </h1>

          <div className="flex flex-col items-center mb-8">
            <img
              src={avatar}
              alt="Profile Avatar"
              className="w-20 h-20 md:w-26 md:h-26 rounded-full border-2 border-gray-700 mb-2"
            />
            <div className="text-center">
              <p className="text-[20px] md:text-[25px] font-semibold text-white">
                {profile.username}
              </p>
              <p className="text-[16px] text-[#f0a014] md:text-[18px] mb-[100px] md:pb-[20px]">
                {profile.platform}
              </p>
            </div>
          </div>

          {/* {Social Media} */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-[30px] mb-8">
            <a
              href="https://www.instagram.com"
              target="_blank"
              aria-label="Instagram"
              className="text-white text-[14px] md:text-[16px] hover:text-pink-400 flex items-center flex-col text-center"
            >
              <img src={instagram} className="w-10 h-10 md:w-12 md:h-12 mb-2" />
              <p>Instagram</p>
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              aria-label="Twitter"
              className="text-white text-[14px] md:text-[16px] hover:text-blue-300 flex items-center flex-col text-center"
            >
              <img src={twitter} className="w-10 h-10 md:w-12 md:h-12 mb-2" />
              <p>Twitter</p>
            </a>
            <a
              href="https://www.whatsapp.com"
              target="_blank"
              aria-label="WhatsApp"
              className="text-white text-[14px] md:text-[16px] hover:text-green-400 flex items-center flex-col text-center"
            >
              <img src={whatsapp} className="w-10 h-10 md:w-12 md:h-12 mb-2" />
              <p>WhatsApp</p>
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              aria-label="Messenger"
              className="text-white text-[14px] md:text-[16px] hover:text-blue-500 flex items-center flex-col text-center"
            >
              <img src={messenger} className="w-10 h-10 md:w-12 md:h-12 mb-2" />
              <p>Messenger</p>
            </a>
          </div>

          {/* Copy Link Button */}
          <div className="flex items-center justify-center">
            <button
              className="w-full md:w-96 bg-[#10b981] hover:bg-[#10b9816f] text-white text-[16px] md:text-[18px] font-medium px-6 md:px-8 py-3 md:py-4 rounded-full flex items-center justify-center mb-6 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              onClick={() => {
                const link = `${window.location.origin}/profile/${profile.username}`;
                navigator.clipboard
                  .writeText(link)
                  .then(() => {
                    alert("Profile link copied to clipboard!");
                  })
                  .catch(() => {
                    alert("Failed to copy the link. Please try again.");
                  });
              }}
            >
              Copy Link
            </button>
          </div>

          {/* QR Code */}
          <div className="bg-[#0f172a] p-4 rounded-md shadow-lg flex items-center justify-center mt-[20px] md:mt-[40px] py-6 md:py-8">
            <img
              src={QrCode}
              className="w-60 h-60 md:w-70 md:h-70 text-black items-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareProfilePage;