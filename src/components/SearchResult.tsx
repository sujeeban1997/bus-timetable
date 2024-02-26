// import React from 'react'
import React, { useState } from 'react';
import { Space, Tag, Button, Drawer } from 'antd';
import Filter from './Filter';
import { FilterOutlined } from '@ant-design/icons';


const SearchResult = () => {

          const [open, setOpen] = useState(false);

          const showDrawer = () => {
                    setOpen(true);
          };

          const onClose = () => {
                    setOpen(false);
          };

          return (
                    <>
                              <div className='container bus-card-section mt-4'>
                                        <div className='d-flex justify-content-between'>
                                                  <h4 className=''>Search Results Bus Time</h4>
                                                  <Button className="only-for-mobile" onClick={showDrawer}>
                                                            <FilterOutlined />
                                                  </Button>
                                        </div>
                                                  
                                                  <Drawer title="Filter section" onClose={onClose} open={open}>
                                                            <Filter />
                                                  </Drawer>
                                        <div className='row d-flex'>
                                                  <div className='filter-for-home col-md-12 col-lg-3'>
                                                            {/* <div className='filter-for-home'> */}
                                                                      <Filter />
                                                            {/* </div> */}
                                                  </div>
                                                  <div className='col-md-12 col-lg-9'>
                                                            <div className='bus-card-details mt-4 mb-4'>
                                                                      <div className='bus-title-name d-flex justify-content-between'>
                                                                                <h5>Ratna Travels</h5>
                                                                                <h5>89</h5>
                                                                      </div>
                                                                      <div className='bus-type-tag'>
                                                                                <Space size={[1, 20]} wrap>
                                                                                          <Tag color="red">SLTB</Tag>
                                                                                          <Tag color="green">Luxary</Tag>
                                                                                          <Tag color="default">Normal way</Tag>
                                                                                </Space>
                                                                      </div>

                                                                      <div className='bus-start-end-time'>
                                                                                <div className='but-location d-flex mt-2'>
                                                                                          <h6>Colombo</h6>
                                                                                          <h6>Jaffna</h6>
                                                                                </div>
                                                                                <div className='line-dots'>
                                                                                          <span className="dot"></span>
                                                                                          <hr className='hr-line-details'></hr>
                                                                                          <span className="dot"></span>
                                                                                </div>
                                                                                <div className='but-location d-flex'>
                                                                                          <h6>04.00 AM</h6>
                                                                                          <h6>03.30 PM</h6>
                                                                                </div>
                                                                      </div>
                                                            </div>
                                                            <div className='bus-card-details mt-4 mb-4'>
                                                                      <div className='bus-title-name d-flex justify-content-between'>
                                                                                <h5>Ratna Travels</h5>
                                                                                <h5>89</h5>
                                                                      </div>
                                                                      <div className='bus-type-tag'>
                                                                                <Space size={[1, 20]} wrap>
                                                                                          <Tag color="red">SLTB</Tag>
                                                                                          <Tag color="green">Luxary</Tag>
                                                                                          <Tag color="default">Normal way</Tag>
                                                                                </Space>
                                                                      </div>

                                                                      <div className='bus-start-end-time'>
                                                                                <div className='but-location d-flex mt-2'>
                                                                                          <h6>Colombo</h6>
                                                                                          <h6>Jaffna</h6>
                                                                                </div>
                                                                                <div className='line-dots'>
                                                                                          <span className="dot"></span>
                                                                                          <hr className='hr-line-details'></hr>
                                                                                          <span className="dot"></span>
                                                                                </div>
                                                                                <div className='but-location d-flex'>
                                                                                          <h6>09.00 AM</h6>
                                                                                          <h6>05.30 PM</h6>
                                                                                </div>
                                                                      </div>
                                                            </div>
                                                            <div className='bus-card-details mt-4 mb-4'>
                                                                      <div className='bus-title-name d-flex justify-content-between'>
                                                                                <h5>Ratna Travels</h5>
                                                                                <h5>89</h5>
                                                                      </div>
                                                                      <div className='bus-type-tag'>
                                                                                <Space size={[1, 20]} wrap>
                                                                                          <Tag color="red">SLTB</Tag>
                                                                                          <Tag color="green">Luxary</Tag>
                                                                                          <Tag color="default">Normal way</Tag>
                                                                                </Space>
                                                                      </div>

                                                                      <div className='bus-start-end-time'>
                                                                                <div className='but-location d-flex mt-2'>
                                                                                          <h6>Colombo</h6>
                                                                                          <h6>Jaffna</h6>
                                                                                </div>
                                                                                <div className='line-dots'>
                                                                                          <span className="dot"></span>
                                                                                          <hr className='hr-line-details'></hr>
                                                                                          <span className="dot"></span>
                                                                                </div>
                                                                                <div className='but-location d-flex'>
                                                                                          <h6>09.00 AM</h6>
                                                                                          <h6>05.30 PM</h6>
                                                                                </div>
                                                                      </div>
                                                            </div>
                                                            <div className='bus-card-details mt-4 mb-4'>
                                                                      <div className='bus-title-name d-flex justify-content-between'>
                                                                                <h5>Ratna Travels</h5>
                                                                                <h5>89</h5>
                                                                      </div>
                                                                      <div className='bus-type-tag'>
                                                                                <Space size={[1, 20]} wrap>
                                                                                          <Tag color="red">SLTB</Tag>
                                                                                          <Tag color="green">Luxary</Tag>
                                                                                          <Tag color="default">Normal way</Tag>
                                                                                </Space>
                                                                      </div>

                                                                      <div className='bus-start-end-time'>
                                                                                <div className='but-location d-flex mt-2'>
                                                                                          <h6>Colombo</h6>
                                                                                          <h6>Jaffna</h6>
                                                                                </div>
                                                                                <div className='line-dots'>
                                                                                          <span className="dot"></span>
                                                                                          <hr className='hr-line-details'></hr>
                                                                                          <span className="dot"></span>
                                                                                </div>
                                                                                <div className='but-location d-flex'>
                                                                                          <h6>09.00 AM</h6>
                                                                                          <h6>05.30 PM</h6>
                                                                                </div>
                                                                      </div>
                                                            </div>
                                                            <div className='bus-card-details mt-4 mb-4'>
                                                                      <div className='bus-title-name d-flex justify-content-between'>
                                                                                <h5>Ratna Travels</h5>
                                                                                <h5>89</h5>
                                                                      </div>
                                                                      <div className='bus-type-tag'>
                                                                                <Space size={[1, 20]} wrap>
                                                                                          <Tag color="red">SLTB</Tag>
                                                                                          <Tag color="green">Luxary</Tag>
                                                                                          <Tag color="default">Normal way</Tag>
                                                                                </Space>
                                                                      </div>

                                                                      <div className='bus-start-end-time'>
                                                                                <div className='but-location d-flex mt-2'>
                                                                                          <h6>Colombo</h6>
                                                                                          <h6>Jaffna</h6>
                                                                                </div>
                                                                                <div className='line-dots'>
                                                                                          <span className="dot"></span>
                                                                                          <hr className='hr-line-details'></hr>
                                                                                          <span className="dot"></span>
                                                                                </div>
                                                                                <div className='but-location d-flex'>
                                                                                          <h6>10.00 AM</h6>
                                                                                          <h6>06.30 PM</h6>
                                                                                </div>
                                                                      </div>
                                                            </div>
                                                            <div className='bus-card-details mt-4 mb-4'>
                                                                      <div className='bus-title-name d-flex justify-content-between'>
                                                                                <h5>Ratna Travels</h5>
                                                                                <h5>89</h5>
                                                                      </div>
                                                                      <div className='bus-type-tag'>
                                                                                <Space size={[1, 20]} wrap>
                                                                                          <Tag color="red">SLTB</Tag>
                                                                                          <Tag color="green">Luxary</Tag>
                                                                                          <Tag color="default">Normal way</Tag>
                                                                                </Space>
                                                                      </div>

                                                                      <div className='bus-start-end-time'>
                                                                                <div className='but-location d-flex mt-2'>
                                                                                          <h6>Colombo</h6>
                                                                                          <h6>Jaffna</h6>
                                                                                </div>
                                                                                <div className='line-dots'>
                                                                                          <span className="dot"></span>
                                                                                          <hr className='hr-line-details'></hr>
                                                                                          <span className="dot"></span>
                                                                                </div>
                                                                                <div className='but-location d-flex'>
                                                                                          <h6>09.00 AM</h6>
                                                                                          <h6>05.30 PM</h6>
                                                                                </div>
                                                                      </div>
                                                            </div>
                                                  </div>
                                        </div>
                              </div>

                    </>
          )
}

export default SearchResult