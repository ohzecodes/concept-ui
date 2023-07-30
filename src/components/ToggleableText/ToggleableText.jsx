import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const ToggleableText = ({
  children,
  delimeter,
  showingNumberOfWords,
  element,
  ...rest
}) => {
  showingNumberOfWords ||= children.length 
  // logical or assignment: check if value is false and assigns instead
  const [less, setLess] = useState(true)
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
  children: PropTypes.string.isRequired,
  showingNumberOfWords: PropTypes.number.isRequired,
  delimeter: PropTypes.string,
  element: PropTypes.element,
  style: PropTypes.object
}

ToggleableText.defaultProps = {
  delimeter: ' ',
  // eslint-disable-next-line react/self-closing-comp
  element: <p></p>
}
