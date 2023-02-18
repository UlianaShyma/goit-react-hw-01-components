import styled from 'styled-components';

export const Statistics = styled.section`
  width: 450px;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 3px 3px rgba(0, 0, 0, 0.23);
  margin-top: 30px;
  background-color: white;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  text-align: center;
  padding: 30px 0;
  color: rgb(161, 161, 161);
  font-size: 30px;
`;

export const StatList = styled.ul`
  display: flex;
`;

export const StatItem = styled.li`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7px;
  flex-basis: 20%;
  padding-bottom: 20px;
  padding-top: 20px;
  color: white;
`;

export const Label = styled.span`
  font-size: 22px;
`;

export const Percentage = styled.span`
  font-size: 24px;
  font-weight: bold;
`;
