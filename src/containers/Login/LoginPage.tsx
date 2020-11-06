import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import LoginForm from '../Login/login-form'
import Text from '../Login//text'
import Logo from '../Login//logo'
import Footer from '../Login//footer'

export function LoginPage() {
    return (
        <>
            <div className="w-full flex flex-row h-screen overflow-hidden">
                <div className="hidden lg:flex lg:flex-col w-1/2 text-white p-8 items-start justify-between relative bg-grey-50 border-r border-grey-100">
                    <Logo />
                    <Text />
                    <Footer />
                </div>
                <div className="w-full lg:w-1/2 bg-white p-8 lg:p-24 flex flex-col items-start justify-center">
                    <p className="text-2xl font-bold text-blue-900 mb-4">
                        <span className="text-blue-900">LOGIN</span><span className="text-orange-900 ml-2">GS</span>
                        <span className="text-blue-900">Inovar</span>
                    </p>
                    {/* <div className="w-full mb-4">
                <Alert
                  color="bg-blue-500 text-white"
                  icon={<FiAlertCircle className="mr-2 stroke-current h-4 w-4" />}>
                  This is an important alert. Check it out!
                </Alert>
              </div> */}
                    <LoginForm />
                </div>
            </div>
        </>
    )
}