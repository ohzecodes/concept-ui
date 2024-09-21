import { DrawButton, SpinCircleButton, SpinSquareButton } from './button'
import PropTypes from 'prop-types'
import React from 'react'
export const TransitionButton = ({ type, ...rest }) => {
  const buttonVariants = {
    spin: <SpinCircleButton {...rest} />,
    draw: <DrawButton {...rest} />,
    spinSquare: <SpinSquareButton {...rest} />
  }
  return buttonVariants[type]
}
TransitionButton.defaultProps = {
  type: 'draw'
}
TransitionButton.PropTypes = {
  type: PropTypes.oneOf(['spin', 'draw', 'spinSquare'])
}
