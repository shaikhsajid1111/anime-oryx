import React, { FC } from 'react';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import { AnimeResponse } from '../interfaces/animeDetailsResponse';
import { MangaResponse } from '../interfaces/mangaDetailsResponse';
const PosterCard: React.FC<AnimeResponse | MangaResponse> = (cardData) => {
  return (
    <MDBCard>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src={cardData.data?.attributes?.posterImage.large} alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>{cardData.data?.attributes?.titles.en_jp} ({ cardData.data?.attributes?.titles.ja_jp })</MDBCardTitle>
            <br/>
            <MDBCardText>
              {cardData.data?.attributes?.description}
            </MDBCardText>
          </MDBCardBody>
          <MDBCardBody>

          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  );
}

export default PosterCard;