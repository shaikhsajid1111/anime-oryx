import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBCollapse,
  MDBBtn,
  MDBIcon,
  MDBNavbarNav,
  MDBInputGroup,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownLink,
  MDBDropdownItem
} from 'mdb-react-ui-kit';
import { Link, useMatch, useResolvedPath, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [showNavNoTogglerSecond, setShowNavNoTogglerSecond] = useState(false);
  const [page, setPage] = useState<string>('anime');
  const [query, setQuery] = useState<string>('');
  const navigate = useNavigate();
  const [contentType, setContentType] = useState<string>('Anime');


  return (
    <>
      <MDBNavbar expand='lg' light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>AnimeOryx</MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarTogglerDemo02'
            aria-controls='navbarTogglerDemo02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavNoTogglerSecond(!showNavNoTogglerSecond)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNavNoTogglerSecond}>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
              <MDBNavbarItem>
                {page == 'anime' ? <CustomLink to='/manga'>Manga</CustomLink>
                  : <CustomLink to='/'>Anime</CustomLink>}
              </MDBNavbarItem>
            </MDBNavbarNav>
            <MDBDropdown className='d-flex w-auto mb-3 ml-3'>
              <MDBDropdownToggle color='light'>{contentType}</MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem onClick={() => setContentType('anime')}>
                  <MDBDropdownLink >Anime</MDBDropdownLink>
                </MDBDropdownItem>
                <MDBDropdownItem>
                  <MDBDropdownLink onClick={() => setContentType('manga')}>Manga</MDBDropdownLink>
                </MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
            <MDBInputGroup className='d-flex w-auto mb-3'>
              <input className='form-control' placeholder="Type query" aria-label="Search" type='Search' onChange={(e) => setQuery(e.target.value)} />
              <MDBBtn outline onClick={() => {
                setQuery(query);
                navigate(`/search?q=${query}&type=${contentType.toLowerCase()}&offset=1`);
              }}>Search</MDBBtn>

            </MDBInputGroup>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );


}

interface Props {
  to: string,
  children: any,

}

const CustomLink: React.FC<Props> = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  return (
    <>
      {isActive ? <Link className='nav-link' to='' {...props} > Anime </Link > :
        <Link className='nav-link' to={to} {...props}> Manga </Link>}
    </>
  )
}