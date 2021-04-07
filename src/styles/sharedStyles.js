import styled from 'styled-components';

export const BackgroundImage = styled.div`
  height: 90vh;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

export const CardContainer = styled.div`
  background-color: #f5f5f5;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 20px;
`;

export const AdminBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;
