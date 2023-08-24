import styled from "styled-components";

export const Card = styled.div`
  font-size: 30px;
  width: 300px;
  padding-top: 50px;
  padding-left: 50px;
  padding-right: 50px;
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 5%;
`;

export const Description = styled.div`
  display: block;
  text-align: center;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  border: 1px solid black;
  margin-bottom: 40px;
  background-color: gray;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 32px;
  margin-bottom: 20px;
`;

export const Tag = styled.p`
  color: gray;
  margin-bottom: 20px;
`;

export const Location = styled.p`
  color: gray;
  margin-bottom: 40px;
`;

export const Stats = styled.ul`
  width: 100%;
  gap: 10px;
  display: flex;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.span`
  margin-bottom: 10px;
`;


export const Quantity = styled.span`
  margin-bottom: 10px;
`;