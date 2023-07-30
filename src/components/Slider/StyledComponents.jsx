import styled from 'styled-components'
export const HorizontalWrapper = styled.div`
  display: flex;
  overflow-x: scroll;
  width: inherit;
  justify-content: ${(props) =>
    props.variant === 'children-alone' ? 'space-around' : 'center'};
  font-size: 0;
`
export const MovingButton = styled.button`
  margin: ${(props) => (props.right ? '0 10px 0 0' : '0 0 0 10px')};
  border: 1px solid #2d3142;
  outline: 0;

  border-radius: 5px;
  background-color: white;
  &:hover {
    background-color: #2d3142;
    color: white;
  }
`

export const PageChangeButtons = styled.button`
  background-color: ${(props) => props.color};
  border-radius: 100%;
  border: none;
  margin-left: 10px;
  width: 20px;
  height: 20px;
  border: 1px solid ${(props) => props.borderColor};
`

export const ChildrenWrapper = styled.div`
  justify-content: center;
  display: flex;
  width: 'fit-content';
`

export const MarkerWrapper = styled.div`
  text-align: center;
  margin-top: 12px;
`

export const WidthWrapper = styled.div`
  width: ${(props) => props.width};
`
