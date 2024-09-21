import styled from 'styled-components'
import PropTypes from 'prop-types'
const BaseButton = styled.button`
  background: none;
  border: 0;
  box-sizing: border-box;
  margin: 1em;
  padding: 1em 2em;
  color: ${({ color }) => color || 'white'};
  font-size: inherit;
  font-weight: 700;
  position: relative;
  overflow: hidden;

  &::before,
  &::after {
    box-sizing: inherit;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid transparent;
    transition: all 0.25s ease-out;
  }

  &::before {
    top: 0;
    left: 0;
    width: 0;
    height: 0;
  }

  &::after {
    bottom: 0;
    right: 0;
    width: 0;
    height: 0;
  }

  &:hover {
    color: ${({ hoverColor }) => hoverColor || 'white'};

    &::before {
      width: 100%;
      height: 100%;
      border-top-color: ${({ hoverColor }) => hoverColor || 'white'};
      border-right-color: ${({ hoverColor }) => hoverColor || 'white'};
      transition: width 0.25s ease-out, height 0.25s ease-out 0.25s;
    }

    &::after {
      width: 100%;
      height: 100%;
      border-bottom-color: ${({ hoverColor }) => hoverColor || 'white'};
      border-left-color: ${({ hoverColor }) => hoverColor || 'white'};
      transition: border-color 0s ease-out 0.5s, width 0.25s ease-out 0.5s,
        height 0.25s ease-out 0.75s;
    }
  }
`

const DrawButton = styled(BaseButton)`
  padding: 1em 2em;
`

const SpinCircleButton = styled(BaseButton)`
  width: 5em;
  height: 5em;
  border-radius: 50%; // Make it circular
  padding: 0;

  &::before,
  &::after {
    border-radius: 50%; // Ensure rounded corners
  }

  &:hover {
    &::after {
      transform: rotate(360deg); // Full spin effect
      transition: transform 0.4s linear; // Ensure smooth rotation
    }
  }
`

const SpinSquareButton = styled.button`
  width: 5em;
  height: 5em;
  padding: 0;
  background: none;
  border: 0;
  color: ${({ color }) => color || 'white'};
  font-size: inherit;
  font-weight: 700;
  position: relative;
  cursor: pointer;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid transparent;
    border-radius: 0%;
  }

  &::before {
    // Initial state
  }

  &:hover {
    color: ${({ hoverColor }) => hoverColor || '#0eb7da'};
  }

  &:hover::before {
    border-top-color: ${({ hoverColor }) => hoverColor || '#0eb7da'};
    border-right-color: ${({ hoverColor }) => hoverColor || '#0eb7da'};
    border-bottom-color: ${({ hoverColor }) => hoverColor || '#0eb7da'};

    transition: border-top-color 0.15s linear,
      border-right-color 0.15s linear 0.1s,
      border-bottom-color 0.15s linear 0.2s;
  }

  &::after {
    border: 0 solid transparent; // Set up for rotation
  }

  &:hover::after {
    border-top: 2px solid ${({ hoverColor }) => hoverColor || '#0eb7da'};
    border-left-width: 2px;
    border-right-width: 2px;
    transform: rotate(270deg); // Rotate effect
    transition: transform 0.4s linear, border-left-width 0s linear 0.35s; // Solid edge after rotation
  }
`
const defaultProps = {
  color: 'black',
  hoverColor: 'white'
}
const propTypes = {
  color: PropTypes.string,
  hoverColor: PropTypes.string
}
DrawButton.propTypes = propTypes
SpinCircleButton.propTypes = propTypes
SpinSquareButton.propTypes = propTypes

DrawButton.defaultProps = defaultProps
SpinCircleButton.defaultProps = defaultProps
SpinSquareButton.defaultProps = defaultProps

export { DrawButton, SpinCircleButton, SpinSquareButton }
