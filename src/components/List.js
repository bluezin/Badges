import React from "react";
import "./styles/List.css";
import { Link } from "react-router-dom";
import Gravatar from "./Gravatar";

function useFilterQuery(Listbadges) {
  const [query, setQuery] = React.useState("");

  const [filterBusqueda, setFilterBusqueda] = React.useState(Listbadges);

  React.useMemo(() => {
    const result = Listbadges.filter((badge) => {
      return `${badge.firstName}${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });
    setFilterBusqueda(result);
  }, [Listbadges, query]);

  return { query, setQuery, filterBusqueda };
}

function List(props) {
  const Listbadges = props.Listbadges;
  const { query, filterBusqueda, setQuery } = useFilterQuery(Listbadges);

  if (filterBusqueda.length === 0) {
    return (
      <div className="form-group margin_top">
        <label>Filter badges</label>
        <input
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          value={query}
          className="form-control"
        ></input>

        <div className="t">
          <h1>No badges were found!!!!</h1>
          <Link to="/badges/new" className="btn btn-primary">
            Create you first Badge
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="form-group margin_top">
        <label>Filter badges</label>
        <input
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          value={query}
          className="form-control"
        ></input>
      </div>
      <ul className="margin">
        {filterBusqueda
          .map((badge) => {
            return (
              <li key={badge.id} className="ul margin">
                <Link
                  to={`/badges/${badge.id}`}
                  className="text-reset text-decoration-none"
                >
                  <div className="row">
                    <div>
                      <Gravatar
                        email={badge.email}
                        alt="User"
                        className="imagen"
                      />
                    </div>

                    <div>
                      <div>
                        <strong className="text2">
                          {badge.firstName} {badge.lastName}
                        </strong>
                      </div>

                      <div>
                        <span className="text">{badge.twitter}</span>

                        <p>{badge.jobTitle}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })
          .reverse()}
      </ul>
    </div>
  );
}

export default List;
