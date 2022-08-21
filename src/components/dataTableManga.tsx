import React from 'react';
import { MDBTable, MDBTableBody } from 'mdb-react-ui-kit';
import { MangaResponse } from '../interfaces/mangaDetailsResponse';

const MangaDataTable: React.FC<MangaResponse> = (response) => {
  return (
    <MDBTable striped hover bordered small responsive>
      <MDBTableBody>
        <tr className='text-center'>
          <td>Age Rating</td>
          <td>{response.data?.attributes?.ageRating}</td>
        </tr>
        <tr className='text-center'>
          <td>Rating Rank</td>
          <td>{response.data?.attributes?.ratingRank}</td>
        </tr>
        <tr className='text-center'>
          <td>Chapter Count</td>
          <td>{response.data?.attributes?.chapterCount}</td>
        </tr>
        <tr className='text-center'>
          <td>Volume Count</td>
          <td>{response.data?.attributes?.volumeCount}</td>
        </tr>
        <tr className='text-center'>
          <td>Popularity </td>
          <td>#{response.data?.attributes?.popularityRank}</td>
        </tr>
        <tr className='text-center'>
          <td>Manga Type</td>
          <td>{response.data?.attributes?.mangaType}</td>
        </tr>
        <tr className='text-center'>
          <td>Start Date</td>
          <td>{response.data?.attributes?.startDate}</td>
        </tr>
        <tr className='text-center'>
          <td>End Date</td>
          <td>{response.data?.attributes?.endDate}</td>
        </tr>
        <tr className='text-center'>
          <td>Status</td>
          <td>{response.data?.attributes?.status}</td>
        </tr>
        <tr className='text-center'>
          <td>Serialization</td>
          <td>{response.data?.attributes?.serialization}</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
  );
}

export default MangaDataTable;