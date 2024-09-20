import React from 'react';
import { Container, Typography } from '@mui/material';
import EmergencyNotice from '../components/EmergencyNotice';

interface Notice {
  id: number;
  title: string;
  content: string;
  timestamp: Date;
}

const notices: Notice[] = [
  {
    id: 1,
    title: "포카전에 오신 여러분을 환영합니다!",
    content: "재밌고 안전한 포카전 되시기를 기원합니다.",
    timestamp: new Date('2024-09-20T00:00:00'),
  },
  // 여기에 더 많은 공지사항을 추가할 수 있습니다.
];

const EmergencyNoticePage: React.FC = () => {
  // 타임스탬프를 기준으로 내림차순 정렬
  const sortedNotices = [...notices].sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        긴급 공지사항
      </Typography>
      {sortedNotices.map((notice) => (
        <EmergencyNotice
          key={notice.id}
          title={notice.title}
          content={notice.content}
          timestamp={notice.timestamp}
        />
      ))}
    </Container>
  );
};

export default EmergencyNoticePage;