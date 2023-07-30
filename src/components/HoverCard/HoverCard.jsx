import React from 'react'
import { CardContainer, CardFront, CardBack } from './StyledCard'
import PropTypes from 'prop-types'

export const HoverCard = ({ variant, frontElement, backElement }) => {
  return (
    <CardContainer className={variant}>
      <CardFront className='card-front'>{frontElement}</CardFront>
      <CardBack className='card-back'>{backElement}</CardBack>
    </CardContainer>
  )
}
HoverCard.propTypes = {
  variant: PropTypes.oneOf(['flip', 'fade']).isRequired,
  frontElement: PropTypes.element.isRequired,
  backElement: PropTypes.element.isRequired
}
HoverCard.defaultProps = {
  variant: 'fade'
}
