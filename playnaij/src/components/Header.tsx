import './Header.css'; // Optional if you want to separate styling

export default function Header() {
  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <img src="/public/playnaij logo.jpg" />
      </div>

      {/* Search Bar */}
      <div className="search-container">
        <input type="text" placeholder="Search" />
        <button>🔍</button>
      </div>

      {/* Navigation & Buttons */}
      <div className="header-actions">
        <div className="categories">
          Categories <span>▼</span>
        </div>
        <button className="connect-wallet">Connect Wallet</button>
        <button className="login-btn">Log In</button>
      </div>
    </header>
  );
}
