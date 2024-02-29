import React, { useState } from 'react'
import { Select, Typography } from 'antd';
import Searchbar from './Searchbar';


const { Option } = Select;
const { Title } = Typography;

const getRandomInt = (max: number, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min;

const Home = () => {

         

          return (
                    <div className='home-page-hero'>
                              <div className='card-form-section'>
                                        <h2 className='form-main-heading'>Where do you want to go?</h2>
                                        <Searchbar />
                              </div>
                    </div>

          )
}

export default Home