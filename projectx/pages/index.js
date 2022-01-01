import { ChatOutlined, NotificationsOutlined, SearchOutlined, SettingsOutlined } from '@mui/icons-material'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className=''>
      <div className='flex h-screen'>
        <div className='flex flex-col space-y-4 p-5 items-center bg-[#c4c4c4]'>
          <p className='font-mono text-3xl p-2 hover:cursor-pointer'>PROJECT X</p>
          <p><Image className='rounded-full p-2' src="https://variety.com/wp-content/uploads/2013/06/avatar.jpg?w=1000" alt='' width={150} height={150} /></p>
          <button><p className='font-mono text-xl p-2 hover:bg-gray-400 rounded-xl'>PROFILE</p></button>
          <button><p className='font-mono text-xl p-2 hover:bg-gray-400 rounded-xl'>HOME</p></button>
          <button><p className='font-mono text-xl p-2 hover:bg-gray-400 rounded-xl'>CLASSROOM</p></button>
          <button><p className='font-mono text-xl p-2 hover:bg-gray-400 rounded-xl'>POSTS</p></button>
          <button><p className='font-mono text-xl p-2 hover:bg-gray-400 rounded-xl'>PAYMENTS</p></button>
          <button><p className='font-mono text-xl p-2 hover:bg-gray-400 rounded-xl'>LOGOUT</p></button>
        </div>
      </div>
      <header className='flex absolute top-5 right-8'>
        <button><p className='p-2'><SearchOutlined /></p></button>
        <button><p className='p-2'><ChatOutlined /></p></button>
        <button><p className='p-2'><NotificationsOutlined /></p></button>
        <button><p className='p-2'><SettingsOutlined /></p></button>
      </header>
    </div>
  )
}
