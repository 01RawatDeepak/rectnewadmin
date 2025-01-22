import SideMenu from "./assets/components/SideMenu/SideMenu";
import Menu from "./assets/components/Menu/Menu";
// import Header from "./assets/components/Header/Header";
import Footer from "./assets/components/Footer/Footer";
import Dashboard from "./assets/pages/Dashboard";
function App() {
  return (
    <>
    {/* <Header/> */}
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <SideMenu />
          <div className="layout-page">
            <Menu />
            <div className="content-wrapper">
              <div className="container-xxl flex-grow-1 container-p-y">
                <Dashboard />
              </div>
              <Footer />
              <div className="content-backdrop fade"></div>
            </div>
          </div>
        </div>
        <div className="layout-overlay layout-menu-toggle"></div>
        <div className="drag-target"></div>
      </div>
    </>
  );
}

export default App;
