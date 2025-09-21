import HomeImage from "../../../assets/image.png";
import "./Home.css";
import girl_reading_book from "../../../assets/girl_reading_book.png";
const Home = () => {
  return (
    <>
      {/* <img src={HomeImage} alt="Home" className="home-image" /> */}
      <div className="main">
        <div className="content">
          <h1>
            Best place for <br /> Book lovers
          </h1>
          <p>
            Here we have thousands of best books from the best selling authors
            from around the world.
          </p>

          <div className="search-box">
            <input type="text" placeholder="Type book or author name..." />
            <button>Search</button>
          </div>

          <div className="visitors">
            <img
              className="avatar"
              src="https://i.pravatar.cc/40?img=1"
              alt="user"
            />
            <img
              className="avatar"
              src="https://i.pravatar.cc/40?img=2"
              alt="user"
            />
            <img
              className="avatar"
              src="https://i.pravatar.cc/40?img=3"
              alt="user"
            />
            <span>3000+ Our daily visitors</span>
          </div>
        </div>

        <div className="image">
          <img src={girl_reading_book} alt="Reading illustration" />
        </div>
      </div>
    </>
  );
};

export default Home;
