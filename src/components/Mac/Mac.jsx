/* eslint-disable react/jsx-pascal-case */
import React from 'react'

import PropTypes from 'prop-types'
import { MAC, LOGO, IconSpan, TRAP } from './styledMac'

export const Mac = ({ style, children, topStyle, height, width, Icon }) => (
  <div
    className='mac-container'
    style={{ ...style, width: width,}}
  >
    <MAC style={{ height: height,...topStyle}} >{children}</MAC>
    <LOGO>
      {' '}
      <IconSpan>{Icon}</IconSpan>
    </LOGO>
    <TRAP ></TRAP>
  </div>
)

Mac.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  Icon: PropTypes.element
}
Mac.defaultProps = {
  height: 200,
  width: 400,
  Icon: <span>a</span>
}
