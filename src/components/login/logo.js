import React from 'react'
import {FiBox} from 'react-icons/fi'
import {useSelector, shallowEqual} from 'react-redux'
import Link from 'next/link'

const Logo = () => {
  const {config} = useSelector(
    (state) => ({
      config: state.config
    }),
    shallowEqual
  )
  const {name} = {...config}
  return (
    <div className="uppercase font-bold text-base tracking-wider flex flex-row items-center justify-start w-full whitespace-no-wrap text-white">
      <Link href="/">
        <a className="flex flex-row items-center justify-start space-x-2">
          <FiBox size={12} />
          <img
            className="object-contain w-auto h-60 mb-0"
            src="/images/logo/GSInovar.png"
            alt="svg"
          />
        </a>
      </Link>
    </div>
  )
}

export default Logo
