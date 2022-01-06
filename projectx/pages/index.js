import { ChatOutlined, NotificationsOutlined, SearchOutlined, SettingsOutlined } from '@mui/icons-material'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import { useUser } from '@auth0/nextjs-auth0';
import { route } from 'next/dist/server/router'
import NavBar from '../components/navBar'
import { withPageAuthRequired } from '@auth0/nextjs-auth0/dist/frontend'

export default withPageAuthRequired(function Home() {

  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div className='flex text-[#5D5FEF]'>
      <NavBar />
      <div className='flex-grow m-7'>
        <label className='flex bg-[#FCDDEC] p-2 rounded-2xl space-x-4'>
          <SearchOutlined />
          <input className='outline-none w-full bg-[#FCDDEC]' placeholder='Search...' type='text' id='search' />
          <button><p><ChatOutlined /></p></button>
          <button><p><NotificationsOutlined /></p></button>
          <button><p><SettingsOutlined /></p></button>
        </label>
      </div>
      <select name="sort-by" className='absolute top-[100px] right-[38px]' id="sort-by">
        <option>SORT BY</option>
        <option value="1">DATE</option>
        <option value="2">POPULARITY</option>
      </select>
    </div>
  )
})
