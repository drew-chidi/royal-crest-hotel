import React from 'react'
import Image from 'next/image'
import Gym from '../../assets/images/gym.svg'

const SectionItem = () => {
  return (
    <div >
        <div>
          <Image src={Gym} />
        </div>
        <div>
            <h2>The Gym</h2>
            <p></p>
        </div>
    </div>
  )
}

export default SectionItem