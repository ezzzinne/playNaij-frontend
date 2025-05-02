import Sidebar from '../components/Sidebar';
import React from 'react';
import Navbar1 from '../components/LayoutNavbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
      <div className="d-flex flex-column flex-md-row" style={{ minHeight: '100vh' }}>
        <div className="d-md-block" style={{ width: '250px' }}>
           <Sidebar /> 
        </div>
        
        <div className="flex-grow-1 d-flex flex-column w-100">
            <Navbar1 />
            <main className='flex-grow-1 p-4'>
              {children}  
            </main>
            
        </div>
      </div>
  );
};

export default Layout;
