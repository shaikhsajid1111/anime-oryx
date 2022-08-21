import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { MangaResponse } from '../interfaces/mangaDetailsResponse';
import PosterCard from '../components/posterCard';
import MangaDataTable from '../components/dataTableManga';
export default function MangaPage(props: any) {
  const [response, setResponse] = useState<MangaResponse>({});

  let params = useParams();
  useEffect(() => {
    axios.get(`https://kitsu.io/api/edge/manga/${params.id}`)
      .then((response) => {
        setResponse(response.data);
      })
  }, [params.id])

  return (
    <>
      <div className="container pt-4">
        <PosterCard {...response} />
        <br />
        <MangaDataTable {...response} />
      </div>
    </>
  )
}