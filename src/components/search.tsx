import React, { useState } from "react";
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { useSearchParams, useNavigate } from "react-router-dom";
import '../stylesheets/search.css';

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("query"));
  const [tempQuery, SetTempQuery] = useState<string>('');

  function handleChange(event: any) {
    SetTempQuery(event.target.value);
    console.log(tempQuery);
  }

  function handleClick(event: any) {
    if (event.key === 'Enter') {
      setQuery(tempQuery);
      setSearchParams({
        query: tempQuery
      })
      console.log('Searched item: ', query);
      navigate(`/result?query=${query}`);
    }
  }
  const navigate = useNavigate();
  return (
    <MDBInputGroup className="search-anime">
      <MDBInput size="lg" label="Search" type="search" onKeyUp={handleClick} onChange={handleChange} />
    </MDBInputGroup>
  )
}