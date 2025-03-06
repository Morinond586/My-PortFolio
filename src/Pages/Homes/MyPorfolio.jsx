import React from 'react'
import data from '../../data/index.json'
import {FaGithub, FaUpRightFromSquare} from 'react-icons/fa6'

export default function MyPorfolio() {
    return (
      <section className='portfolio--section' 
      id='Myportfolio'>
        <div className='portfolio--container-box'>
          <div className='portfolio--container'>
            <p className='sub--title'>
              Projets
            </p>
            <h2 className='section--heading'>
               Projets recents
            </h2>
          </div>
          <div>
               <a className='btns btn-github' href='https://github.com/morinond586/'><FaGithub />  Visit My Github </a>
          </div>
        </div>
        <div className='portfolio--section--container'>
          {data?.portfolio?.map((item, index) => (
            <div key={index}
            className='portflio--section--card'>
               <div className='portflio--section--img'>
                  <img src={item.src} alt='Placholder'/>
               </div>
               <div className='portfolio--section--card--content'>
                 <div>
                  <h3 className='portfolio--section--title'>
                    {item.title}
                  </h3>
                  <p className='text-md'>
                    {item.description}
                  </p>
                 </div>
                 <p className='text-sm portfolio--link'>
                  {item.link}
                   <FaUpRightFromSquare className='path'/>
                 </p>
               </div>
            </div>
          )
          )}
        </div>
      </section>
    )
}