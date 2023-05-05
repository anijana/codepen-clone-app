import React from 'react'
import { AppBar, styled, Toolbar } from '@mui/material';

const Container = styled(AppBar)`
    background: #060606;
    height: 9vh;
`

const Header = () => {
  return (
    <>
        <Container position='static'>
            <Toolbar>
                <img src="https://www.etondigital.com/wp-content/uploads/2011/06/codepen.png" alt="img" style={{width: 180, height: 52}}/>
            </Toolbar>
        </Container>
    </>
  )
}

export default Header