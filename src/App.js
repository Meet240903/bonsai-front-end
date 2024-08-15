import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Review from './components/Review';
import Pricing from './components/Pricing';
import SignUp from './components/SignUp';
import SignUpFooter from './components/SignUpFooter';
import SignIn from './components/SignIn';
import SignInHeader from './components/SignInHeader';
import Freelance from './components/Freelance';
import PrivacyPolicy from './components/PrivacyPolicy';
import About from './components/About';
import Affiliates from './components/Affiliates';
import BonsaiCash from './components/BonsaiCash';

function App() {
  return (
    <>
      <BrowserRouter basename='/bonsai-front-end'>
        <Routes>
          {/* Routes that include Header and Footer */}
          <Route
            exact
            path="/"
            element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/review"
            element={
              <>
                <Header />
                <Review />
                <Footer />
              </>
            }
          />
          <Route
            path="/pricing"
            element={
              <>
                <Header />
                <Pricing />
                <Footer />
              </>
            }
          />
          <Route
            path="/freelance/:slugs"
            element={
              <>
                <Header />
                <Freelance />
                <Footer />
              </>
            }
          />
          <Route
            path="/privacy"
            element={
              <>
                <Header />
                <PrivacyPolicy />
                <Footer />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Header />
                <About />
                <Footer />
              </>
            }
          />
          <Route
            path="/affiliate"
            element={
              <>
                <Header />
                <Affiliates />
                <Footer />
              </>
            }
          />
           <Route
            path="/bonsai-cash"
            element={
              <>
                <Header />
                <BonsaiCash />
                <Footer />
              </>
            }
          />
          {/* Route for Signup that does not include Header and Footer */}
          <Route path="/signup" element={
            <>
              <SignUp />
              <SignUpFooter />
            </>
          } />
          <Route path="/signin" element={
            <>
              <SignInHeader />
              <SignIn />
              <SignUpFooter />
            </>
          } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
