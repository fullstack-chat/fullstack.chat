'use client'
import React, { useEffect } from 'react'
import { getPublicProfiles } from '../actions'

function Profiles() {
  useEffect(() => {
    async function fetchData() {
      await getPublicProfiles()
    }
    fetchData()
  }, [])
  return (
    <div>Profiles</div>
  )
}

export default Profiles