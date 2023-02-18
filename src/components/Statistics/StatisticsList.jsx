import PropTypes from 'prop-types';
import { StatisticsItem } from './StatisticsItem';
import { Statistics, Title, StatList } from './Statistics.styled';
export const StatisticsList = ({ title, stats }) => {
  return (
    <Statistics>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsItem key={id} label={label} percentage={percentage} />
        ))}
      </StatList>
    </Statistics>
  );
};

StatisticsList.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
