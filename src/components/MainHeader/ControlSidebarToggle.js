// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React, {PropTypes} from 'react'

import Link from './../../utils/Link'

const ControlSidebarToggle = ({href, onToggle}) => {
  return (
    <li>
      <Link href={href} onClick={onToggle}>
        <i className='fa fa-gears' />
      </Link>
    </li>
  )
}

ControlSidebarToggle.propTypes = {
  href: PropTypes.string,
  onToggle: PropTypes.func
}

export default ControlSidebarToggle
