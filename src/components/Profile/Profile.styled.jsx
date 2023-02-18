import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  width: 450px;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 3px 3px rgba(0, 0, 0, 0.23);
  font-size: 24px;
  background-color: white;
`;

export const ProfileDescription = styled.div`
  text-align: center;
  padding: 30px 40px;
  color: rgb(161, 161, 161);
`;

export const Avatar = styled.img`
  max-width: 160px;
  border: 1px solid grey;
  border-radius: 50%;
  margin: 0 auto;
`;

export const UserName = styled.p`
  margin-top: 40px;
  font-weight: 700;
  color: black;
`;

export const UserTag = styled.p`
  margin-top: 10px;
`;

export const Userlocation = styled.p`
  margin-top: 10px;
`;

export const StatsSection = styled.ul`
  display: flex;
  text-align: center;

  background-color: rgb(244, 246, 249);
  border-top: 1px solid rgb(229, 234, 240);
  margin-top: 10px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: calc(100% / 3);
  color: rgb(161, 161, 161);
  border: 1px solid rgb(229, 234, 240);
  padding: 25px 10px;
`;

export const Label = styled.span`
  display: block;
`;

export const Quantity = styled.span`
  color: black;
  font-weight: 700;
`;
