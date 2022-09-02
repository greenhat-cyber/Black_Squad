import React from 'react';
import Footer from '../../components/Footer';
import './About.css';

function About() {
  return (
    <div>

      <div className="bg1">
        <div className="container align1">
          <div className="glass-bg text-black shadow-lg" data-aos="fade-up" data-aos-duration="1000">
            <h1 className='fw-bolder tx-hed' data-aos="fade-up" data-aos-duration="1000">About Us <hr /> </h1>
            <div className="container  ">

              <p data-aos="fade-up" data-aos-duration="1000">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem animi impedit excepturi cumque, corporis reprehenderit perferendis eos omnis fugiat fuga aperiam aliquam et mollitia quo, nisi quas quos ab laudantium, hic culpa est temporibus neque illo nam? Ducimus similique velit, repudiandae sunt magni non rem blanditiis. Provident fuga voluptas harum accusantium consequatur facilis, ea totam corrupti, ratione nulla accusamus. Fugiat placeat unde non illo assumenda fuga impedit quas consequuntur, sapiente quis inventore rem! Obcaecati ex odio, maxime nostrum quo dolores.</p>
            </div>


          </div>
        </div>
      </div>
      <Footer/>

    </div>
  )
}

export default About