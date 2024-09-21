import React, { useState } from 'react'
import PropTypes from 'prop-types'
/**
 * This is a Toggleable Text Component tailored to optimize your content display for longer texts. Seamlessly integrating into your web interface or application, this component empowers users to toggle the visibility of extended text segments with a simple click. Streamline the presentation of lengthy content without sacrificing depth or detail. With an intuitive design that ensures smooth interaction, users can effortlessly expand or collapse text sections, maintaining a clean and organized layout.
 */
export const ToggleableText = ({
  children,
  delimeter,
  showingNumberOfWords,
  element,
  ...rest
}) => {
  const [less, setLess] = useState(true)
  if (children.split(delimeter).length <= showingNumberOfWords) {
    return children
  }
  const CompressString = children
    .split(delimeter)
    .slice(0, showingNumberOfWords)
    .join(delimeter)

  return React.cloneElement(
    element,
    { ...rest },
    <span>
      {less ? CompressString : children}
      {showingNumberOfWords === children.length ? null : (
        <a
          style={{ textDecoration: 'underline', cursor: 'pointer' }}
          data-href='#'
          onClick={(e) => {
            e.preventDefault()
            setLess(!less)
          }}
        >
          Show {less ? 'More' : 'Less'}
        </a>
      )}
    </span>
  )
}

ToggleableText.propTypes = {
  /**
   * The text for the element
   */
  children: PropTypes.string.isRequired,
  /**
   * the number of words to show
   */
  showingNumberOfWords: PropTypes.number.isRequired,
  /**
   * the character on which the element should split
   */
  delimeter: PropTypes.string,
  /**
   * the tag that you want to use for the text
   */
  element: PropTypes.element,
  /**
   * style of the text
   */
  style: PropTypes.object
}

ToggleableText.defaultProps = {
  delimeter: ' ',
  showingNumberOfWords: 10,
  element: <p />
}
