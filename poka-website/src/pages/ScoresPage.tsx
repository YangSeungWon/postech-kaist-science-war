import React from 'react';
import { Container, Typography } from '@mui/material';
import ScoreBoard, { Score } from '../components/ScoreBoard';

const scoresData = [
  { category: '축구', postech: 0, kaist: 1, videoUrl: 'https://www.youtube.com/watch?v=hXzhe2cl7cA', status: 'finished' },
  { category: '해킹', postech: 3, kaist: 6, videoUrl: 'https://www.youtube.com/watch?v=GNvbVMpRIOo', status: 'ongoing' },
  { category: '인공지능', postech: 0, kaist: 0, videoUrl: 'https://www.youtube.com/watch?v=t2_VMHkVQds', status: 'ongoing' },
  { category: '리그오브레전드', postech: 0, kaist: 0, status: 'upcoming' },
  { category: '야구', postech: 0, kaist: 0, status: 'upcoming' },
  { category: '과학퀴즈', postech: 0, kaist: 0, status: 'upcoming' },
  { category: '농구', postech: 0, kaist: 0, status: 'upcoming' },
];

const scores: Score[] = scoresData.map(score => ({
  ...score,
  status: score.status as 'finished' | 'ongoing' | 'upcoming'
}));

const ScoresPage: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        점수 현황
      </Typography>
      <ScoreBoard scores={scores} />
    </Container>
  );
};

export default ScoresPage;