// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

jest.unmock('./../Logo')

import React from 'react'
import {shallow, mount} from 'enzyme'

import Logo from './../Logo'

describe('Logo', () => {
  it('should add class to link', () => {
    expect(
      shallow(<Logo href='' />).hasClass('logo')
    ).toBeTruthy()
  })

  it('should add href link', () => {
    const wrapper = mount(<Logo href='/home-link' />)

    expect(
      wrapper.find('MyLink').find('a').prop('href')
    ).toEqual('#')
  })

  it('should trigger onClick', () => {
    const spy = jest.fn()
    const wrapper = shallow(<Logo href='#' onClick={spy} />)

    wrapper.simulate('click')

    expect(
      spy
    ).toHaveBeenCalled()
  })
})
