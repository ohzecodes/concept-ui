/* eslint-disable react/jsx-pascal-case */
import React from 'react'

import PropTypes from 'prop-types'
import { MAC, LOGO, IconSpan, TRAP } from './styledMac'
/**
 * The core function of this component is to emulate a Mac monitor display. It facilitates the incorporation of child elements, allowing for the integration of various content within the framework. This flexibility makes it a suitable choice for presenting diverse visual materials while maintaining a consistent digital interface.
 * */
export const Mac = ({ style, children, topStyle, height, width, Icon }) => (
  <div className='mac-container' style={{ ...style, width: width }}>
    <MAC style={{ height: height, ...topStyle }}>{children}</MAC>
    <LOGO>
      {' '}
      <IconSpan>{Icon}</IconSpan>
    </LOGO>
    <TRAP />
  </div>
)

Mac.propTypes = {
  /**
   * This style will serve as the style for the entire container
   */
  style: PropTypes.object,

  /**
   * the height of the monitor's screen with the borders
   */
  height: PropTypes.number.isRequired,
  /**
   * the width of the monitor's screen with the borders
   */
  width: PropTypes.number.isRequired,
  /**
   * The icon of the monitor
   */
  Icon: PropTypes.element
}
Mac.defaultProps = {
  height: 200,
  width: 400,
  Icon: <span>a</span>
}
