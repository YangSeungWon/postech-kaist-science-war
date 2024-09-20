import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import ScoreBoard, { Score } from '../components/ScoreBoard';

const ScoresPage: React.FC = () => {
  const [scores, setScores] = useState<Score[]>([]);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchScores = async () => {
    // URL에 타임스탬프를 추가하여 매번 새로운 요청으로 인식되게 합니다
    const response = await fetch('/scores.json?_=' + new Date().getTime(), {
      method: 'GET',
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    });
    const data = await response.json();
    setScores(data);
    setLastUpdated(new Date());
  };

  useEffect(() => {
    fetchScores();
    const interval = setInterval(fetchScores, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        점수 현황
      </Typography>
      <Button onClick={fetchScores} variant="contained" color="primary" style={{ marginBottom: '1rem' }}>
        새로고침
      </Button>
      <ScoreBoard scores={scores} />
      {lastUpdated && (
        <Box mt={2}>
          <Typography variant="caption" color="textSecondary">
            마지막 업데이트: {lastUpdated.toLocaleString()}
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default ScoresPage;