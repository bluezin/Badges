import React from "react";
import PrimeraFase from "../components/PrimeraFase";
import { Link } from "react-router-dom";
import "./style/PaginaDetailits.css";
import DeleteModal from "../components/DeleteModal";

// function useIncreCount(max) {
//   const [count, setCount] = React.useState(0)
//   if (count > max) {
//     setCount(0)
//   }
//   return [count, setCount]
// }

function PaginaDetailits(props) {
  const badges = props.badges;
  // const [count, setCount] = useIncreCount(4)

  return (
    <div>
      <div>
        <div className="color_page">
          <h1 className="color font_size">
            {badges.firstName} {badges.lastName}
          </h1>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <PrimeraFase
              firstName={badges.firstName}
              lastName={badges.lastName}
              email={badges.email}
              twitter={badges.twitter}
              jobTitle={badges.jobTitle}
            />
          </div>

          <div className="col">
            <h1 className="font_size">Actions :</h1>
            <div>
              <Link
                to={`/badges/${badges.id}/edit`}
                className="btn btn-primary"
              >
                Edit
              </Link>
            </div>
            {/* <div>
              <button
                onClick={() => {
                  setCount( count + 1);
                }}
                className="btn btn-primary m-3 font_size"
              >
                Increment count: {count}
              </button>
            </div> */}
            <div className="font_size">
              <button
                onClick={props.onOpenModal}
                className="btn btn-danger mt-4 font_size"
              >
                Delete
              </button>
              <DeleteModal
                onClose={props.onCloseModal}
                isOpen={props.isCloseOpen}
                onDelete={props.onDelete}
              
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaginaDetailits;
