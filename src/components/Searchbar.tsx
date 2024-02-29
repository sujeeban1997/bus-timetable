import React, { useState } from 'react'
import { DatePicker } from 'antd';
import { Select, TimePicker, Button } from 'antd';
import type { SelectProps } from 'antd';

const Searchbar = () => {

          const [options, setOptions] = useState<SelectProps<object>['options']>([]);


          const onChange = (value: string) => {
                    console.log(`selected ${value}`);
          };

          const onSearch = (value: string) => {
                    console.log('search:', value);
          };

          const filterOption = (input: string, option?: { label: string; value: string }) =>
                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

          const onFinish = (fieldsValue: any) => {
                    const rangeTimeValue = fieldsValue['range-time-picker'];
                    const values = {
                              'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),
                    };
          }

          return (
                    <div className='form-section'>
                                                  <div className='form-text-field'>
                                                            <h6 className='form-title-name'>Start location</h6>
                                                            <Select className='form-field'
                                                                      showSearch
                                                                      allowClear
                                                                      placeholder="Select a place"
                                                                      optionFilterProp="children"
                                                                      onChange={onChange}
                                                                      onSearch={onSearch}
                                                                      filterOption={filterOption}
                                                                      options={[
                                                                                {
                                                                                          value: 'jack',
                                                                                          label: 'Jack',
                                                                                },
                                                                                {
                                                                                          value: 'lucy',
                                                                                          label: 'Lucy',
                                                                                },
                                                                                {
                                                                                          value: 'tom',
                                                                                          label: 'Tom',
                                                                                },
                                                                      ]}
                                                            />
                                                  </div>

                                                  <div className='form-text-field'>
                                                            <h6 className='form-title-name'>End location</h6>
                                                            <Select className='form-field'
                                                                      showSearch
                                                                      allowClear
                                                                      placeholder="Select a place"
                                                                      optionFilterProp="children"
                                                                      onChange={onChange}
                                                                      onSearch={onSearch}
                                                                      filterOption={filterOption}
                                                                      options={[
                                                                                {
                                                                                          value: 'jack',
                                                                                          label: 'Jack',
                                                                                },
                                                                                {
                                                                                          value: 'lucy',
                                                                                          label: 'Lucy',
                                                                                },
                                                                                {
                                                                                          value: 'tom',
                                                                                          label: 'Tom',
                                                                                },
                                                                      ]}
                                                            />
                                                  </div>

                                                  <div className='form-time-picker d-flex'>
                                                            <div className='form-text-field'>
                                                                      <h6 className='form-title-name'>Start time</h6>
                                                                      <TimePicker className='form-field' />
                                                            </div>

                                                            <div className='form-text-field'>
                                                                      <h6 className='form-title-name'>End time</h6>
                                                                      <TimePicker className='form-field' />
                                                            </div>
                                                  </div>

                                                  <div className='form-text-field'>
                                                            <h6 className='form-title-name'>Date</h6>
                                                            <DatePicker className='form-field' />
                                                  </div>

                                                  <div className='form-text-field'>
                                                            <Button className='search-button'>
                                                            Search buses
                                                            </Button>
                                                  </div>
                                        </div>
  )
}

export default Searchbar