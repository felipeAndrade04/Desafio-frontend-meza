import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  width: 250px;
  border-radius: 4px;
  border: 0;
  padding: 8px;
  color: #a8a8a8;
  font-weight: 500;
  font-size: 14px;
  margin-top: 24px;
  margin-left: 20px;
  transition: background-color 0.2s;
  &:hover {
    transform: translateY(10px);
  }

  svg {
    margin-right: 6px;
  }
`;
