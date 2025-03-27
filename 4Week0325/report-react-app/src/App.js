import Header from "./Component/Header/header"
import Footer from "./Component/Footer/footer";
import Detail from "./Component/Detail/detail"
import Comment from "./Component/Comment/CommentList";
import './App.css';

function App() {
  return (
    <div>
      <nav>
        <Header />
      </nav>

      <div id="main">
        <div id="detail">
          <Detail />
        </div>

        <div id="comment">
          <Comment />
        </div>
      </div>

      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
