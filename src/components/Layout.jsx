import React, {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import MobileSidebar from "../components/MobileSidebar"
import Chatbot from './elementComponents/Chatbot';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header onToggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen}/>
      <main className="flex-grow min-h-screen overflow-hidden">{children}</main>
      <Footer />

      {/*  */}
      {/* <Chatbot /> */}
      <MobileSidebar
        isSidebarOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </div>
  );
};

export default Layout;
