import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
// import '../styles/deepak.css'
import anuj from '../asset/images/anuj.svg'
import TypewriterEffect from '../asset/type_writer/type';

const Home = () => {
  return (
    <Layout>
        <div className="flex justify-between">
          {/* <h1>Intra College Community web application</h1> */}
        <div className='w-1/2 p-5 text-3xl mt-20 font-bold font-serif text-yellow-900'>
            <TypewriterEffect text={"HI! let's walk together No boundries ahead"} />
            {/*  */}
          </div>
          <div className="w-1/2 hidden md:flex">
            <img className="" src={anuj} alt="anuj" />

          </div>
        </div>

          {/* <div className="btn">
            <Stack spacing={2} direction="row">
              <Link to="/Menu"><Button variant="outlined">Menu</Button></Link>
              <Link to="/About"><Button variant="outlined">About</Button></Link>
              <Link to="/Contact"><Button variant="outlined">Contact</Button></Link>
            </Stack>
          </div> */}
        {/* </div> */}

      

    </Layout>
  )
}

export default Home
