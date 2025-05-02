import Sidebar from '../components/Sidebar';
import React, { useState } from 'react';
import Navbar1 from '../components/LayoutNavbar';

function Layout({ children }: { children: React.ReactNode }) {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
      <div className="d-flex">
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        
        <div className="flex-grow-1">
          <Navbar1 onToggleSidebar={() => setShowSidebar(!showSidebar)} />
            
          <main className="p-3">{children}</main> 
        </div>
      </div>
  );
};

export default Layout;
