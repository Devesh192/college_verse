import React from 'react'
import Layout from '../components/Layout'
import Z from '../asset/images/z.png'
import {useNavigate, useHistory } from 'react-router-dom'
import Chat from '../chat/chat'


const Community = () => {
  const navigate = useNavigate()
  const submit = () => {
    navigate('/chat')
  }
  return (
    <Layout>
      <div className='flex justify-center  max-w-screen mx-auto'>
        <div className="grid content-center grid-cols-1   md:grid-cols-2  lg:grid-cols-3 lg:gap-8">
          <div className="border-4 border-amber-800 rounded-xl shadow-inner col-span-1  p-4 m-3  hover:scale-105 duration-200  w-72  h-52 bg bg-cover" >1
            <button onClick={submit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Join</button>
          </div>
          <div className="border-4 border-amber-800 rounded-xl shadow-inner col-span-1 bg2 bg-cover p-4 m-3  hover:scale-105 duration-200  w-72  h-52">2</div>
          <div className="border-4 border-amber-800 rounded-xl shadow-inner col-span-1 bg3 p-4 m-3  bg-cover hover:scale-105 duration-200  w-72  h-52">3</div>
          <div className="border-4 border-amber-800 rounded-xl shadow-inner col-span-1 bg-gradient-to-r from-amber-400 to-yellow-900 p-4 m-3  hover:scale-105 duration-200  w-72  h-52">4</div>
          <div className="border-4 border-amber-800 rounded-xl shadow-inner col-span-1 bg-gradient-to-r from-amber-400 to-yellow-900 p-4 m-3  hover:scale-105 duration-200  w-72  h-52">5</div>
          <div className="border-4 border-amber-800 rounded-xl shadow-inner col-span-1 bg-gradient-to-r from-amber-400 to-yellow-900 p-4 m-3  hover:scale-105 duration-200  w-72  h-52">6</div>
          <div className="border-4 border-amber-800 rounded-xl shadow-inner col-span-1 bg-gradient-to-r from-amber-400 to-yellow-900 p-4 m-3  hover:scale-105 duration-200  w-72  h-52">7</div>
          <div className="border-4 border-amber-800 rounded-xl shadow-inner col-span-1 bg-gradient-to-r from-amber-400 to-yellow-900 p-4 m-3  hover:scale-105 duration-200  w-72  h-52">8</div>
          <div className="border-4 border-amber-800 rounded-xl shadow-inner col-span-1 bg-gradient-to-r from-amber-400 to-yellow-900 p-4 m-3  hover:scale-105 duration-200  w-72  h-52">9</div>
        </div>
      </div>
    </Layout>
  )
}

export default Community