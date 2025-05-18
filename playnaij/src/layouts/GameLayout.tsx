import Sidebar from '../components/Sidebar';
import React, { useState } from 'react';
import Navbar1 from '../components/Navbar1';
import { useAuth } from '../redux/AuthContext'
import Navbar2 from '../components/Navbar2';

function Layout({ children }: { children: React.ReactNode }) {
  const [showSidebar, setShowSidebar] = useState(false);
  const { isLoggedIn } = useAuth();

  return (
      <div className="d-flex">
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        
        <div className="flex-grow-1">
          {isLoggedIn ? (
            <Navbar2 onToggleSidebar={() => setShowSidebar(!showSidebar)} />
          ) : (
            <Navbar1 onToggleSidebar={() => setShowSidebar(!showSidebar)} />
          )}
        
          <main className="p-3">{children}</main> 
        </div>
      </div>
  );
};

export default Layout;
