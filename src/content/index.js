import { useEffect } from "react";
<<<<<<< HEAD
import { Link, useParams } from "react-router-dom";
import { DataContext, Sponger } from "../App";
// import { scrollTo } from "sponge-dev-0.0.3";
=======
import { Link, useLocation, useParams } from "react-router-dom";
import { DataContext } from "../App";
>>>>>>> 51fa5457c4e67b4d0fbe080e7b672b0c2cc91763
import "./Content.css";

function Card() {
  const _ = (props, index) => {
    return (
      <div className="card" key={`${props.rid}${index}`}>
        <Link to={`${props.rid}`} state={[window.scrollX, window.scrollY]}>
          <div className="preview-post">
            <h2>{props.title}</h2>
            <p>{props.context}</p>
            <div className="">
              <div className="type-post" title={`${props.tag}`}>
                <p>{props.tag}</p>
              </div>
              <div className="type-post">
                <p>{props.date}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  };

  return (
    <DataContext.Consumer>
      {(value) => {
        return (
          <>
            {[...value.data].map((obj, index) => (_(obj, index)))}
          </>
        );
      }}
    </DataContext.Consumer>
  );
}

function Decorate(props) {
  return (
    <div className="center-front">
      {props.children}
    </div>
  );
}

const Post = () => {
  const { slug } = useParams();
  const { state } = useLocation();

<<<<<<< HEAD
  useEffect(() => { Sponger.to(); }, []);
=======
  useEffect(() => {
    console.log(state);
    window.scrollTo(state[0], state[1]);
  }, []);
>>>>>>> 51fa5457c4e67b4d0fbe080e7b672b0c2cc91763

  return (
    <div className="preview-post">
      <DataContext.Consumer>
        {(tk) => (!tk.paths.includes(slug) ? <Loadin /> : <div className="t"><h2>karina</h2></div>)}
      </DataContext.Consumer>
    </div>
  );
};

const Oops = () => {
  return (
    <div className="oops">
      <p>Oops!</p>
      <p>Not Found</p>
      <p>anything</p>
    </div>
  );
}

const Loadin = () => {
  return (
    <div className="oops">
      <p>Loading...</p>
    </div>
  );
}
export { Card, Decorate, Post, Oops };
