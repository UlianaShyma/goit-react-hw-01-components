import PropTypes from 'prop-types';
import { StatItem, Label, Percentage } from './Statistics.styled';

function getRandomHexColor() {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return randomColor;
}
export const StatisticsItem = ({ label, percentage }) => {
  return (
    <StatItem style={{ backgroundColor: getRandomHexColor() }}>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </StatItem>
  );
};

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
