import Image from 'next/image'
import React from 'react'

const ErrorPage = () => {
  return (
    <section style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
      <h1 style={{color: '#3e3e3e', textAlign: 'center'}}>Масажери.мк</h1>
      <h2 style={{fontWeight: '600', fontSize: '55px', letterSpacing: -5, textAlign: 'center'}}>Упс...сеуште работиме на оваа страница, вратете се на почетна.</h2>
      <Image src={'/logo.png'} alt='logo' width={300} height={200} />
    </section>
  )
}

export default ErrorPage