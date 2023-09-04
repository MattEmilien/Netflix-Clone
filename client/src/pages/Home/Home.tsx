import Content from "../../components/Content/Content";
import MovieRow from "../../components/MovieRows/MovieRow";
import Navbar from "../../components/Navbar/Navbar";
import requests from "../../lib/Requests";

const Home = () => {
  return (
    <>
      <div className="home bg-black overflow-hidden">
        <Navbar />
        <Content />
        <MovieRow
          rowId="1"
          title="Upcoming Movies"
          fetchURL={requests.requestUpcoming}
        />
        <MovieRow
          rowId="2"
          title="Popular Movies"
          fetchURL={requests.requestPopular}
        />
        <MovieRow
          rowId="3"
          title="Trending Movies"
          fetchURL={requests.requestTrending}
        />
        <MovieRow
          rowId="4"
          title="Horror Movies"
          fetchURL={requests.requestHorror}
        />
        <MovieRow
          rowId="5"
          title="Top Rated Movies"
          fetchURL={requests.requestTopRated}
        />
      </div>
    </>
  );
};
export default Home;
