import React from 'react'

import PropTypes from 'prop-types'
import {
  HorizontalWrapper,
  MovingButton,
  PageChangeButtons,
  ChildrenWrapper,
  MarkerWrapper,
  WidthWrapper
} from './StyledComponents'

/**
 * This is a slider component that seamlessly integrates form and function, promising an enhanced user experience across a spectrum of applications.
 * Effortlessly adaptable and visually striking, the slider offers intuitive navigation through a spectrum of options, inviting users to explore and select with utmost ease.
 * Its frictionless motion and customizable design make it an ideal choice for a myriad of contexts, from fine-tuning settings to elegantly browsing image galleries.
 */
export const Slider = ({
  children,
  Page,
  setPage,
  pageElementCount,
  style,
  variant,
  moveForwardStyle,
  moveBackStyle,
  moveForwardIcon,
  moveBackIcon,
  activeMarkerColor,
  uniDirectional,
  showMarkers
}) => {
  const movePage = (operation) => {
    if (operation === '+') {
      if (uniDirectional && Page === maxPages) {
        return
      }
      if (Page === maxPages) {
        setPage(1)
        return
      }
      setPage(Page + 1)
    } else if (operation === '-') {
      if (uniDirectional && Page === 1) {
        return
      }
      if (Page === 1) {
        setPage(maxPages)
        return
      }
      setPage(Page - 1)
    }
  }
  // moveBackBtn = React.cloneElement(moveBackBtn, {onClick: () => movePage("-")});
  // moveForwardBtn = React.cloneElement(moveForwardBtn, { onClick: () => movePage("+")});
  // moveBackBtn &&= React.cloneElement(moveBackBtn, { onClick: () => movePage("-") })
  // moveForwardBtn &&= React.cloneElement(moveForwardBtn, { onClick: () => movePage("+") })

  const moveForwardBtn = (
    <MovingButton
      id='left'
      style={moveForwardStyle}
      left
      onClick={() => movePage('+')}
    >
      {/* &gt; */ moveForwardIcon}
    </MovingButton>
  )
  const moveBackBtn = (
    <MovingButton
      id='right'
      right
      style={moveBackStyle}
      onClick={() => movePage('-')}
    >
      {/* &lt; */ moveBackIcon}
    </MovingButton>
  )

  const lengthOfChildren = children?.length
  const maxPages = Math.ceil(lengthOfChildren / pageElementCount)

  const markers = showMarkers
    ? [...Array(maxPages).keys()]?.map((e, k) => (
        <PageChangeButtons
          key={k}
          borderColor={activeMarkerColor}
          onClick={() => setPage(e + 1)}
          color={Page === e + 1 ? activeMarkerColor : 'transparent'}
        />
      ))
    : null

  children = children?.filter(
    (_, k) => k >= (Page - 1) * pageElementCount && k < Page * pageElementCount
  )

  const childrenAlone = (
    <div>
      <ChildrenWrapper width='inherit'>{children}</ChildrenWrapper>
      {maxPages > 1 ? (
        <HorizontalWrapper
          variant={variant}
          style={{ marginTop: 20, ...style?.HorizontalWrapper }}
        >
          {moveBackBtn}
          <MarkerWrapper style={{ ...style?.markerWrapper }}>
            {markers}
          </MarkerWrapper>
          {moveForwardBtn}
        </HorizontalWrapper>
      ) : null}
    </div>
  )

  const childrenWithMoveButtons = (
    <div>
      <HorizontalWrapper style={style?.HorizontalWrapper} variant={variant}>
        {maxPages > 1 ? moveBackBtn : null}
        <ChildrenWrapper width='fit-content'>{children}</ChildrenWrapper>
        {maxPages > 1 ? moveForwardBtn : null}
      </HorizontalWrapper>
      {maxPages > 1 ? (
        <MarkerWrapper style={style?.markerWrapper}>{markers}</MarkerWrapper>
      ) : null}
    </div>
  )

  return (
    <WidthWrapper width='fit-content' style={style?.WidthWrapper}>
      {variant.toLowerCase() === 'children-alone'
        ? childrenAlone
        : childrenWithMoveButtons}
    </WidthWrapper>
  )
}
function greaterOrEqualsOne(props, propName, componentName) {
  const value = props[propName]
  if (value !== undefined && (typeof value !== 'number' || value < 1)) {
    return new Error(
      `The prop ${propName} must be greater than or equal to 1. Invalid supplied to ${componentName}.`
    )
  }
}

Slider.propTypes = {
  /**
   * Page: a state component, that is greater than or equal to 1
   */
  Page: greaterOrEqualsOne,
  /**
   * setPage: a function that modifies the page variable
   */
  setPage: PropTypes.func.isRequired,
  /**
   * Children are an array of elements the resultant of map function
   */
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  /**
   * a count of elements per page
   */
  pageElementCount: PropTypes.number,
  /**
   * the style is an object  of various element that yuo can style
   */
  style: PropTypes.shape({
    WidthWrapper: PropTypes.object,
    markerWrapper: PropTypes.object,
    HorizontalWrapper: PropTypes.object
  }),
  /**
   * variant defines where the move buttons are;
   * marker alone: move buttons are next to the children
   * children alone: move buttons are next to the marker
   */
  variant: PropTypes.oneOf(['marker-alone', 'children-alone']),
  /**
   * changes the color of active marker by using this
   */
  activeMarkerColor: PropTypes.string,
  /**
   *  toggles the functionalituy where the slider loops arround the array
   */
  uniDirectional: PropTypes.bool,
  /**
   * styles for the button move forward button
   */
  moveForwardStyle: PropTypes.object,
  /**
   * styles for the button move back button
   */
  moveBackStyle: PropTypes.object,
  /**
   * Icon in the move forward button
   */
  moveForwardIcon: PropTypes.element,
  /**
   * Icon in the move back button
   */
  moveBackIcon: PropTypes.element,
  /**
   * toggles that visibility of the marker
   */
  showMarkers: PropTypes.bool
}

Slider.defaultProps = {
  uniDirectional: false,
  activeMarkerColor: 'grey',
  pageElementCount: 1,
  variant: 'marker-alone',

  showMarkers: true,
  moveForwardIcon: <span>&gt;</span>,
  moveBackIcon: <span>&lt;</span>
}
