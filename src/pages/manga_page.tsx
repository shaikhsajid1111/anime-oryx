import React from 'react';
import { useParams } from 'react-router-dom';

export default function MangaPage(props: any) {
  let params = useParams();
  return <h1>Hello {params.id}</h1>
}