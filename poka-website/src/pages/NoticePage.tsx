import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import Notice from '../components/Notice';

interface NoticeData {
  id: number;
  title: string;
  content: string;
  timestamp: string;
}

const NoticePage: React.FC = () => {
  const [notices, setNotices] = useState<NoticeData[]>([]);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchNotices = async () => {
    try {
      const response = await fetch('/notices.json?_=' + new Date().getTime(), {
        method: 'GET',
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
        },
      });
      const data = await response.json();
      setNotices(data);
      setLastUpdated(new Date());
    } catch (error) {
      console.error('Error fetching notices:', error);
    }
  };

  useEffect(() => {
    fetchNotices();
    const interval = setInterval(fetchNotices, 30000); // 30초마다 갱신
    return () => clearInterval(interval);
  }, []);

  // 타임스탬프를 기준으로 내림차순 정렬
  const sortedNotices = [...notices].sort((a, b) => 
    new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        전달 사항
      </Typography>
      <Button onClick={fetchNotices} variant="contained" color="primary" style={{ marginBottom: '1rem' }}>
        새로고침
      </Button>
      {sortedNotices.map((notice) => (
        <Notice
          key={notice.id}
          title={notice.title}
          content={notice.content}
          timestamp={new Date(notice.timestamp)}
        />
      ))}
      {lastUpdated && (
        <Box mt={2}>
          <Typography variant="caption" color="textSecondary">
            마지막 업데이트: {lastUpdated.toLocaleString('ko-KR', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
              hour: '2-digit',
              minute: '2-digit',
              hour12: false
            })}
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default NoticePage;