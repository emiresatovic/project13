import { useState, useEffect } from 'react';

import Places from './Places.jsx';



export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [ AvailablePlaces, setAvailablePlaces ] = useState([]);

  useEffect(() => {
    setIsFetching(true);
    async function fetchPlaces() {
      const response = await fetch('http://localhost:3000/places');
      const resData = await response.json();
      setAvailablePlaces(resData.places);
      setIsFetching(false);

    }

    fetchPlaces();
  }, []);

  


  return (
    <Places
      title="Available Places"
      places={AvailablePlaces}
      isLoading={isFetching}
      loadingText='Fetching place data...'
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
