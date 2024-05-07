import React, { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const DynamicWidthInput = ({ value, width, onChange, ...rest }) => {
  const inputRef = useRef(null)
  const [inputValue, setInputValue] = useState(value)

  useEffect(() => {
    setInputValue(value) // Update the input value if the prop value changes
  }, [value])

  useEffect(() => {
    if (inputRef.current) {
      const input = inputRef.current
      input.style.width = width + 'px'
      const inputWidth = Math.max(width, input.scrollWidth)
      input.style.width = `${inputWidth}px`
    }
  }, [inputValue, width])

  const handleChange = (event) => {
    if (onChange) {
      onChange(event)
    }
    setInputValue(event.target.value)
  }

  return (
    <input
      style={{ minWidth: width }}
      ref={inputRef}
      type='text'
      value={inputValue}
      onChange={handleChange}
      placeholder='Type something...'
      {...rest}
    />
  )
}

DynamicWidthInput.propTypes = {
  value: PropTypes.string
  // width: PropTypes.number,
}
// DynamicWidthInput
DynamicWidthInput.defaultProps = {
  width: 50
}

export default DynamicWidthInput
