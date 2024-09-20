import React from 'react';
import { Container, Typography } from '@mui/material';
import ScoreBoard, { Score } from '../components/ScoreBoard';

const scoresData = [
  { category: '축구', postech: 0, kaist: 1, location: '대운동장', time: 'Sep 20, 14:00~16:00', videoUrl: 'https://www.youtube.com/watch?v=hXzhe2cl7cA', status: 'finished' },
  { category: '해킹', postech: 3, kaist: 6, location: '박태준학술정보관', time: 'Sep 20, 15:00~24:00', videoUrl: 'https://www.youtube.com/watch?v=GNvbVMpRIOo', status: 'ongoing' },
  { category: '인공지능', postech: 3, kaist: 2, location: 'e스포츠 콜로세움', time: 'Sep 20, 19:30~20:30', videoUrl: 'https://www.youtube.com/watch?v=t2_VMHkVQds', status: 'finished' },
  { category: '리그오브레전드', postech: 1, kaist: 1, location: 'e스포츠 콜로세움', time: 'Sep 20, 20:30~23:00', videoUrl: 'https://www.youtube.com/watch?v=4BVrzDfgcVQ', status: 'ongoing' },
  { category: '야구', postech: 0, kaist: 0, location: '포항야구장', time: 'Sep 21, 10:00~12:30', status: 'upcoming' },
  { category: '과학퀴즈', postech: 0, kaist: 0, location: '대강당', time: 'Sep 21, 14:00~15:30', status: 'upcoming' },
  { category: '농구', postech: 0, kaist: 0, location: '체육관', time: 'Sep 21, 16:00~18:00', status: 'upcoming' },
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