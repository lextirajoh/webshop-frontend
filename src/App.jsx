import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// import Search from './components/Search/Search';

// styles
import GlobalStyle from './styles/GlobalStyle';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer
        transition={Flip}
        position="bottom-right"
        autoClose={1500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Header />
      {/* <Search /> */}
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}
