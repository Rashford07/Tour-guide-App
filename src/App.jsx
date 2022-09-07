import React, { useEffect, useState } from "react";
import PlaceCard from "./PlaceCard";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);
  useEffect(() => {
    getTourJSON("https://course-api.com/react-tours-project");
  }, []);

  const getTourJSON = async function (url) {
    try {
      const response = await fetch(url);
      if (!response) throw new Error();
      const resJSON = await response.json();
      setTours(resJSON);
      setIsLoading(false);
      return resJSON;
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const Createtours = (place, i) => {
    function deleteTour() {
      setTours(
        tours.filter((_, index) => {
          return index !== i;
        })
      );
    }
    return (
      <PlaceCard
        key={place.id}
        imgAlt={place.name}
        img={place.image}
        Info={place.name}
        price={place.price}
        details={place.info}
        deleteTour={deleteTour}
      />
    );
  };
  const TourDisplay = function () {
    if (tours.length === 1) {
      return (
        <main>
          <div className="title">
            <h2>No tours left</h2>
            <button
              className="btn"
              onClick={() => {
                getTourJSON("https://course-api.com/react-tours-project");
                tours.map(Createtours);
              }}
            >
              Refresh
            </button>
          </div>
        </main>
      );
    } else {
      return (
        <main>
          <section>
            <div className="tour-title">
              <h2>Our available beautiful tours</h2>
            </div>
            {tours.map(Createtours)}
          </section>
        </main>
      );
    }
  };
  return (
    <div>
      {isLoading ? (
        <main>
          <div className="loading">
            <h1>loading...</h1>
          </div>
        </main>
      ) : (
        <TourDisplay />
      )}
    </div>
  );
};
export default App;
