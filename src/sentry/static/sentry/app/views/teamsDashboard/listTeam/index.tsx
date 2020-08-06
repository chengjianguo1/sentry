import React from 'react';
import styled from '@emotion/styled';

import space from 'app/styles/space';

import TeamCard, {TeamCardProps} from './teamCard';

type Team = TeamCardProps['team'];

type Props = Omit<TeamCardProps, 'team'> & {
  teams: Array<Team>;
};

const ListTeam = ({teams, ...props}: Props) => (
  <TeamCards>
    {teams.map(team => (
      <TeamCard key={team.id} {...props} team={team} />
    ))}
  </TeamCards>
);

export default ListTeam;

const TeamCards = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fit, 360px);
  grid-gap: ${space(3)};
`;
