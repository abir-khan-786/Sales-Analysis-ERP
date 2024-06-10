'use client'

import Image from 'next/image'
import React, { useState, useRef } from 'react'
import { Camera } from 'react-camera-pro'
const DataPagess = () => {
  const camera = useRef(null)
  const [numberOfCameras, setNumberOfCameras] = useState(0)
  const [image, setImage] = useState(null)
  return (
    <div>
      <Camera ref={camera} numberOfCamerasCallback={setNumberOfCameras} />
      <img src={image} alt="Image preview" />
      <button
        onClick={() => {
          const photo = camera.current.takePhoto()
          setImage(photo)
        }}
      />
      <button
        hidden={numberOfCameras <= 1}
        onClick={() => {
          camera.current.switchCamera()
        }}
      />
    </div>
  )
}

export default DataPagess
