import React, { useEffect } from 'react'
import { getProviders,useSession,signIn } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';
import Loader from '../../../components/Loader'

function Signin({ providers }) {
  const { data: session }=useSession();
  const router = useRouter();

  useEffect(() => {
    if(session){
      router.push('/');
    }
  },[session]);

  if (session) return <Loader/>;
  return (
    <div className='h-screen flex flex-col items-center pt-40 space-y-8 bg-black'>
      <Head>
        <title>Login - Spotify</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Image
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        height={250}
        width={600}
        className='animate-pulse'
      />
      {Object.values(providers).map((provider)=>(
        <div key={provider.id}>
          <button className='text-white py-4 px-6 rounded-full
          bg-[#1db954] transition duration-300 ease-out border border-transparent uppercase font-bold text-xs md:text-base tracking-wider hover:scale-105 hover:bg-[#0db146]' onClick={()=>signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  )
}

export default Signin

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}