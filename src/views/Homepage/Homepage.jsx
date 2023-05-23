import './Homepage.css'
import Characters from "../../components/Characters/Characters";

const Homepage = () => {
  return (
    <div className="container">
      <h1 className="title">All Rick and Morty Characters</h1>
      <Characters />
    </div>
  );
};
export default Homepage;
