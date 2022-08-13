import React, { useEffect, useState } from "react";
import { MDBBtn, MDBRow } from 'mdb-react-ui-kit';
import { useSearchParams, useNavigate } from "react-router-dom";
import Card from "./card";
import axios from "axios";
import { Datum, SearchResponse } from "../interfaces/responseInterface";
import EndOfPage from "./noResult";

export default function Result(props: any) {
  const [searchParams, setSearchParams] = useSearchParams(window.location.search);
  const query = searchParams.get("q");
  const contentType = searchParams.get('type');
  let off: any = searchParams.get('offset');
  console.log("Query is from result:",query);
  const [response, setResponse] = useState<SearchResponse>({ data: [], meta: { count: 0 }, links: { first: "", prev: "", last: "" } });
  const [lastOffset, setLastOffset] = useState<number>(0);
  const navigate = useNavigate();
  const [URL, setURL] = useState<string>(``);
  const [nextOffset, setNextOffset] = useState<any>(parseInt(off) + 10);

  useEffect(() => {
    let temp: any = searchParams.get('offset');

    setURL(`https://kitsu.io/api/edge/${contentType}?filter[text]=${query}&page[limit]=10&page[offset]=${off}`);
    console.log(URL);
    setNextOffset(parseInt(temp) + 10);
    axios.get(URL)
      .then((response) => {
        setResponse(response.data)
      })
      .catch((error) => console.error(error.message));
    setLastOffset(response.meta.count);
    console.log(response)
  }, [query, URL]);

  function handleClick() {
    setNextOffset(nextOffset + 10);
    setURL(`https://kitsu.io/api/edge/${contentType}?filter[text]=${query}&page[limit]=10&page[offset]=${nextOffset}`);
    navigate(`/search?q=${query}&type=${contentType?.toLowerCase()}&offset=${nextOffset}`);
  }

  return (
    <>

      <MDBRow className='row row-cols-md-3 g-3 pt-5'>
        {Object.keys(response).length > 0 ? response.data.map((obj: Datum, index: number) => {

          return <Card {...obj} key={index} />
        }) : <EndOfPage />}
      </MDBRow>

      <div className="d-flex justify-content-center pb-3 pt-2">
        {(nextOffset < lastOffset || lastOffset == 0) ? <MDBBtn onClick={() => { handleClick(); }}>Next</MDBBtn> : <EndOfPage />}
      </div>
    </>
  )

}