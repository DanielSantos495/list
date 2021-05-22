import React, { useState, useEffect } from 'react'

import { Main } from './style'

import { Header } from '../components/Header'
import { useGetData } from '../hooks/useGetData'

export const Layout = ({ children }) => {

  const api = 'http://localhost:3000/data'
  const [data, loader] = useGetData(api)

  console.log(data, loader)
  return(
    <>
      <Header />
      <Main>
        {children}
      </Main>
    </>
  )
}