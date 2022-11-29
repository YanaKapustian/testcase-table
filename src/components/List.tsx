import styled, { keyframes } from 'styled-components';

export const ListContainer = styled.div`
  max-height: 315px;
  max-width: 1300px;
  overflow: auto;
  background-color: #fafafa;
  margin: 0 auto;
`;

export const List = styled.ul`
  display: block;
  list-style: none;
  font-size: 16px;
  margin: 0;
  padding: 6px;
`;

export const ListItem = styled.li`
  background-color: #fafafa;
  border: 1px solid #99b4c0;
  padding: 8px;
  margin: 4px;
  display: flex;
`;

export const ListItemContainer = styled.li`
  background-color: #fafafa;
  padding: 8px;
  margin: 4px;
  margin-left: 12px;
  display: flex;
`;

export const Cell = styled.div`
   color: black;
   min-width: 240px;
`

export const CellExpanded = styled.div`
   color: black;
   min-width: 280px;
`

const gradientAnimation = keyframes`
  0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;

const LoadingRoot = styled.div`
  animation: ${gradientAnimation} 2s linear infinite;
  background: linear-gradient(45deg, #298fee, #11c958, #a120bb, #d6612a);
  background-size: 600% 600%;
  color: #fff;
  padding: 8px;
  width: 100%;
`;

export function Loading() {
  return <LoadingRoot>Loading...</LoadingRoot>;
}
