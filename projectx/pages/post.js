import Image from 'next/image'
import { ChatOutlined, NotificationsOutlined, SearchOutlined, SettingsOutlined } from '@mui/icons-material'
import { useRouter } from 'next/router'
import NavBar from '../components/navBar'
import { withPageAuthRequired } from '@auth0/nextjs-auth0/dist/frontend'

export default withPageAuthRequired(function Post() {
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
        </div>
    )
})
