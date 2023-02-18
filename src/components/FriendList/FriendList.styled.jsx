import styled from 'styled-components';

const statusColor = ({ isOnline }) => (isOnline ? 'green' : 'red');

export const FriendsList = styled.ul`
  width: 450px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  margin-top: 30px;
`;

export const Item = styled.li`
  box-sizing: border-box;
  background-color: white;
  display: flex;
  align-items: center;
  gap: 13px;

  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 3px 3px rgba(0, 0, 0, 0.23);
  padding: 10px 20px;
`;

export const Status = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${statusColor};
`;

export const Avatar = styled.img`
  width: auto;
  height: 70px;
  border: 1px solid black;
  border-radius: 20px;
`;
export const Name = styled.p`
  font-size: 24px;
  font-weight: 500;
`;
