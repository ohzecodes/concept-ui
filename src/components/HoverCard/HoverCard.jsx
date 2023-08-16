import React from 'react'
import { CardContainer, CardFront, CardBack } from './StyledCard'
import PropTypes from 'prop-types'
/**
 * The HoverCard component is a versatile element designed to enhance user interactions on webpages. By concealing its content initially, it creates an element of intrigue that invites users to engage further. Upon hovering over the component, the concealed content elegantly transitions into view, providing a seamless and engaging user experience.
 */
export const HoverCard = ({ variant, frontElement, backElement }) => {
  return (
    <CardContainer className={variant}>
      <CardFront className='card-front'>{frontElement}</CardFront>
      <CardBack className='card-back'>{backElement}</CardBack>
    </CardContainer>
  )
}
HoverCard.propTypes = {
  /**
   * A "variant" defines the specific style that you desire for the hover effect to manifest. At present, this feature accommodates a choice between two distinctive properties:
   */
  variant: PropTypes.oneOf(['flip', 'fade']).isRequired,
  /**
   * This element  constitutes the foreground, commonly taking the form of an image.
   *  */
  frontElement: PropTypes.element.isRequired,
  /**
   * This element typically occupies the background, often comprising content featuring prominent headers in bold and accompanied by paragraph text.
   *  */
  backElement: PropTypes.element.isRequired
}
HoverCard.defaultProps = {
  variant: 'fade'
}
