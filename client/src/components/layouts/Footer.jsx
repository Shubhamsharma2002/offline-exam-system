import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-blue-900 text-white px-10 py-10 '>
        {/* Container for the links: Stacked on mobile, 3 columns on medium screens+ */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left mb-8'>
            {/* Column 1 */}
            <div className='flex flex-col gap-2'>
                <p className='font-bold text-lg'>Contact Us</p>
                <p className='text-blue-200'>Email: demo123@gmail.com</p>
                <p className='text-blue-200'>+91 9898798798</p>
            </div>
            {/* Column 2 */}
            <div className='flex flex-col gap-2'>
                <p className='font-bold text-lg'>Support</p>
                <p className='text-blue-200'>Privacy Policy</p>
                <p className='text-blue-200'>Terms of Service</p>
            </div>
            {/* Column 3 - Logo/Branding */}
            <div className='flex flex-col items-center md:items-start justify-center'>
                <div className='bg-white text-blue-900 px-4 py-2 rounded-lg font-black'>
                    LOGO ONE
                </div>
            </div>
        </div>
        
        <hr className='border-blue-700 mb-6' />
        {/* Bottom Section: Centered */}
        <div className='text-center text-sm text-blue-300'>
           © {new Date().getFullYear()} All rights reserved with the team.
        </div>
        
    </footer>
  )
}

export default Footer