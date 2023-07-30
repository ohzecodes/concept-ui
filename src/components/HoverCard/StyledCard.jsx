import styled from 'styled-components'
export const CardContainer = styled.div`
  width: 19rem;
  height: 15rem;
  text-align: center;
  border: 2px solid purple;
  margin: 1rem 5rem;
  overflow: hidden;
  position: relative;
  &.flip .card-front {
    transform: perspective(1000px) rotateY(0deg);
    backface-visibility: hidden;
    transition: transform 0.5s linear 0s;
  }
  &.flip .card-back {
    transition: transform 0.5s linear 0s;
  }

  &.flip:hover .card-front {
    transform: perspective(1000px) rotateY(-180deg);
  }

  &.flip:hover .card-back {
    transform: perspective(1000px) rotateY(0deg);
  }

  &.fade:hover > .card-front {
    opacity: 0.2;
  }
`
export const CardFront = styled.div`
  position: absolute;
  overflow: hidden;
  z-index: 1;
  display: block;
  -webkit-transition: 2s ease;
  transition: 2s ease;
  height: 100%;
  width: 100%;
  background-color: white;
  > * {
    height: 100%;
    width: 100%;
  }
`
export const CardBack = styled.div`
  z-index: 0;
  opacity: 1;
  position: relative;
  -webkit-transition: 4s ease;
  transition: 4s ease;
`
