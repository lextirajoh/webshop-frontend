import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import GlobalStyle from './styles/GlobalStyle';
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
        theme="dark"
      />
      <Header />
      <Outlet />
    </>
  );
}
