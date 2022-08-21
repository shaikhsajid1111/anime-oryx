import React from 'react';
import { MDBCard, MDBBadge, MDBCardImage, MDBCardBody, MDBCardTitle, MDBIcon, MDBCardFooter } from 'mdb-react-ui-kit';
import { Datum } from '../interfaces/responseInterface';
import { Link } from 'react-router-dom';
import '../stylesheets/card.css';

const Card: React.FC<Datum> = (cardData) => {
  const link: string = cardData.links.self.includes('https://') ? cardData.links.self.split('edge').slice(-1)[0] : cardData.links.self;
  return (
    <Link to={link}>
      <MDBCard className='result-card'>
        <MDBCardImage position='top' alt='...' className='hover-overlay ripple' src={cardData.attributes.posterImage.medium} />
        <MDBCardBody>
          <MDBCardTitle>{cardData.attributes.titles.en_jp} ({cardData.attributes.titles.ja_jp})</MDBCardTitle>

        </MDBCardBody >
        <MDBCardFooter className='text-center'>
          <MDBIcon fas icon='star' color='success' size='lg' />
          <MDBBadge color='primary' notification pill>
            {cardData.attributes.ratingRank}
          </MDBBadge>
          &nbsp;&nbsp; &nbsp;&nbsp;
          <MDBIcon fas icon='heart' color='danger' size='lg' />
          <MDBBadge color='success' notification pill>
            #{cardData.attributes.popularityRank}
          </MDBBadge>
          &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          <span className='text-success font-weight-bold'>{cardData.attributes.averageRating}%</span>

        </MDBCardFooter>
      </MDBCard>
    </Link>
  );
}

export default Card;