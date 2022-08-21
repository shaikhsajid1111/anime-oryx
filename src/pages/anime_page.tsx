import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AnimeResponse } from '../interfaces/animeDetailsResponse';
import PosterCard from '../components/posterCard';
import DataTable from '../components/dataTableAnime';
export default function AnimePage(props: any) {
  let params = useParams();
  const [response, setResponse] = useState<AnimeResponse>({});

  useEffect(() => {
    axios.get(`https://kitsu.io/api/edge/anime/${params.id}`)
      .then((response) => {
        setResponse(response.data);
      })
  }, [params.id])

  return (
    <>
      <div className="container pt-4">
        <PosterCard {...response} />
        <br/>
        <DataTable {...response} />
      </div>
    </>
  )
}