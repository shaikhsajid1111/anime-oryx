import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Response, Datum } from "../interfaces/responseInterface";
import { MDBRow } from "mdb-react-ui-kit";
import Card from "../components/card";


export default function Home() {
  const [response, setResponse] = useState<Response>({ data: [] });


  useEffect(() => {
    axios.get('https://kitsu.io/api/edge/trending/anime')
      .then((response) => setResponse(response.data))
      .catch((error) => console.error(error.message));
  }, [])
  return <>
    <h1 className="text-center">Trending Animes</h1>
    <MDBRow className='row row-cols-md-3 g-3'>
      {Object.keys(response).length > 0 ? response.data.map((obj: Datum, index: number) => {
        return <Card  {...obj} key={index} type="anime" />
    }) : ''}
    </MDBRow>
  </>
}