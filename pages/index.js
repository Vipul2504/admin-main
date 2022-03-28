import Head from 'next/head'
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { SendOtp, VerifyOtp } from '../services/api'
import { setAuth } from '../redux/authSlice'

const AdminLogin = () => {

  const dispatch = useDispatch()
  const router = useRouter()
  const [email, setEmail] = useState()
  const [showOtp, setShowOtp] = useState(false)
  const [otp, setOtp] = useState()
  const [response, setResponse] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!otp) {
      try {
        const { data } = await SendOtp({ email })
        setShowOtp(true)
        setResponse(data)
      } catch (err) {
        console.log(err)
      }
    } else {
      try {
        const { data } = await VerifyOtp({ ...response, otp })
        dispatch(setAuth(data))
        router.replace('/dashboard')
      } catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Head>
        <title>Dashboard | Furnito IN</title>
        <link rel="icon" href="/logo.svg" />
      </Head>

      <div className="flex-col container flex justify-center items-center h-full w-full p-4 px-4 lg:px-10 mt-10">
        {/* LEFT */}
        <Image src="/logo.svg" height={200} width={200} alt='' />
        <div className="p-6 border flex flex-col justify-center">
          <h1 className="font-bold text-3xl text-center uppercase">Furnito admin LOGIN</h1>
          <form onSubmit={handleSubmit}>
            <input type='email' onChange={(e) => setEmail(e.target.value)} className="w-full border outline-none mt-8 mb-3 p-3 px-5" placeholder="Enter Email Here..." />


            {
              showOtp && <input type='number' onChange={(e) => setOtp(e.target.value)} className="w-full border outline-none p-3 mb-3 px-5 mt-3" placeholder="Type OTP Here" required />
            }

            <div className='flex items-center justify-between'>
              <button type="submit" className="cursor-pointer bg-black text-white py-3 px-6 flex items-center uppercase font-bold">Log In &nbsp; <HiArrowNarrowRight /></button>
            </div>
          </form>

          <p className='text-xs mt-4'>Do not forget to logout, when you are leaving.</p>
        </div>


      </div>
    </div>
  )
}

export default AdminLogin
