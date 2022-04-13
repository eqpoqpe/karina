import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { DataContext, Sponger } from "../App";
import "./Content.css";

function Card() {
  const _ = (props, index) => {
    return (
      <div className="card" key={`${props.rid}${index}`}>
        <Link to={`${props.rid}`}>
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

  useEffect(() => {
    const [x, y] = Sponger.to();
    window.scrollTo(x, y);
  }, []);

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