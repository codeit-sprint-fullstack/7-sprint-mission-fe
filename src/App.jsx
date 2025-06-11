import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header'
import MarketPage from './pages/MarketPage/MarketPage';

function App() {
  return (
    <>
      <Header />
      <div className="withHeader">
        {/* 중고마켓 페이지 url path가 './'에 보이도록 */}
        <MarketPage /> 
      </div>
      <Footer />
    </>
  );
}

export default App
