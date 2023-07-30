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

export const Slider = ({
  children,
  Page,
  setPage,
  pageElementCount,
  style,
  width,
  variant,
  // moveBackBtn,
  // moveForwardBtn,
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
        ></PageChangeButtons>
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
    <WidthWrapper width={width} style={style?.WidthWrapper}>
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
  Page: greaterOrEqualsOne,
  setPage: PropTypes.func.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,

  pageElementCount: PropTypes.number,
  style: PropTypes.shape({
    WidthWrapper: PropTypes.object,
    markerWrapper: PropTypes.object,
    HorizontalWrapper: PropTypes.object
  }),
  variant: PropTypes.oneOf(['marker-alone', 'children-alone']),
  activeMarkerColor: PropTypes.string,
  uniDirectional: PropTypes.bool,
  moveForwardStyle: PropTypes.object,
  moveBackStyle: PropTypes.object,
  moveForwardIcon: PropTypes.element,
  moveBackIcon: PropTypes.element,
  showMarkers: PropTypes.bool
}

Slider.defaultProps = {
  uniDirectional: false,
  activeMarkerColor: '#2d3142',
  pageElementCount: 1,
  variant: 'marker-alone',
  width: '500px',
  showMarkers: true,
  moveForwardIcon: <span>&gt;</span>,
  moveBackIcon: <span>&lt;</span>
}
