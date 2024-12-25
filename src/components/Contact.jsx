import 'react'
import { AiFillLinkedin, AiFillGithub  } from 'react-icons/ai'
import { motion } from 'framer-motion'




const Contact = () => {
  return (
    <div className='px-6 max-w-[1000px] mx-auto md:my-12' id='contact'>
      

      <div className='grid md:grid-cols-2 place-items-center '>
          <div>
            <div className='text-gray-300 my-3'>
              <h3 className='text-4xl font-semibold mb-5'>About <span>Me</span></h3>
              <p className='text-justify leading-7 w-11/12 mx-auto'>
              A frontend developer passionate about coding for over 1.5 years is someone dedicated to crafting user-facing applications and websites using technologies like HTML, CSS, JavaScript, and modern frameworks such as React.js. I focus on creating visually appealing, responsive, and interactive user interfaces while continually honing My skills and exploring innovative solutions in web development.
              </p>
            </div>

            <div className='flex mt-10 ml-12 items-center gap-7'>
                <div className='bg-gray-800/40 p-4 rounded-lg'>
                    <h3 className='md:text-4xl text-2xl font-semibold text-white'>11<span>+</span></h3>
                    <p className='text-xs text-base'><span>Projects</span></p>
                </div>

                <div className='bg-gray-800/40 p-5 rounded-lg'>
                    <h3 className='md:text-4xl text-2xl font-semibold text-white'>1.5<span>+</span></h3>
                    <p className='text-xs text-base'><span>Years of experience</span></p>
                </div>

                <div className='bg-gray-800/40 p-5 rounded-lg'>
                    <h3 className='md:text-4xl text-2xl font-semibold text-white'>5<span>+</span></h3>
                    <p className='text-xs text-base'><span>happy clients</span></p>
                </div>

            </div>
          </div>
          <form
            action="https://getform.io/f/brooegwa"
            method='POST'
            className='max-w-6xl p-5md:p-12'
            id='form'
          >
            <p className='text-gray-100 font-bold text-xl mb-2'>Let's connect</p>
            <input 
            type="text" 
            id='name'
            placeholder='Your Name...'
            name='name'
            className='mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4'
            />

            <input 
            type="email" 
            id='email'
            placeholder='Your Email...'
            name='email'
            className='mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4'
            />

          <textarea 
            name='textarea' 
            id='textarea'
            cols="30"
            rows="4"
            placeholder='Your Message...'
            className='mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4'
            /> 

            <button type='submit' className='w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color'>Send Message</button>
          </form>
      </div>
    </div>
  )
}

export default Contact
