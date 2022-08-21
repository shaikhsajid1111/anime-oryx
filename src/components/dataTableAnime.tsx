import React from 'react';
import { MDBTable, MDBTableBody } from 'mdb-react-ui-kit';
import { AnimeResponse } from '../interfaces/animeDetailsResponse';

const DataTable: React.FC<AnimeResponse> = (response) => {
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
          <td>Episode Count</td>
          <td>{response.data?.attributes?.episodeCount}</td>
        </tr>
        <tr className='text-center'>
          <td>Episode Length</td>
          <td>{response.data?.attributes?.episodeLength} Minutes</td>
        </tr>
        <tr className='text-center'>
          <td>Popularity Rank</td>
          <td>#{response.data?.attributes?.popularityRank}</td>
        </tr>
        <tr className='text-center'>
          <td>Show Type</td>
          <td>{response.data?.attributes?.showType}</td>
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
      </MDBTableBody>
    </MDBTable>
  );
}

export default DataTable;