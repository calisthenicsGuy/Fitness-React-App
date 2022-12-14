import React, { useEffect, useState } from 'react';

import { fetchData } from '../utils/fetchData';

// components
import BodyPartsList from '../components/BodyPartComponents/BodyPartsList';
import SearchExercises from '../components/ExercisesComponents/SearchExercises';

const bodyPartsUrl = 'https://localhost:7000/api/BodyParts/all';

function Home() {
  const [exercises, setExercises] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const bodyPartsData = () => {
      fetchData(bodyPartsUrl)
        .then(data => setBodyParts(data));
    }

    bodyPartsData();
  }, []);
  return (
    <>
      <section>
        <img src='./assets/img/hero/hero-1.jpg' />
      </section>

      {bodyParts.length != 0 && <BodyPartsList bodyParts={bodyParts} setExercises={setExercises} />}

      <SearchExercises exercises={exercises} setExercises={setExercises} />
    </>
  )
}

export default Home;