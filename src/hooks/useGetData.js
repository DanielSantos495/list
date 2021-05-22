import { useState, useEffect } from 'react'

export const useGetData = (api) => {

  const [loader, setLoader] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {

    const getData = async () => {

      try {

        const response = await fetch(api)
        const data = await response.json()
        setData(data)
        setLoader(false)

      } catch(error) {

        setData(error)
        setLoader(false)

      }

    }

    getData()

  }, [])


  return [data, loader]

}