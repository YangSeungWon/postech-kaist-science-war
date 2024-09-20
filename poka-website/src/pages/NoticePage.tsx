import React from 'react';
import { Container, Typography } from '@mui/material';
import Notice from '../components/Notice';

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
  {
    id: 2,
    title: "리그오브레전드 라이브 시작했습니다.",
    content: "Link: https://www.youtube.com/watch?v=4BVrzDfgcVQ",
    timestamp: new Date('2024-09-20T21:08:00'),
  },
  {
    id: 3,
    title: "2일차 경기 일정/장소 변경",
    content: "* 야구: 기존 공지된 우천시 계획과 동일하게 진행\n* 과학퀴즈: 대강당으로 장소 변경\n* 농구: 체육관 실내에서 그대로 진행\n* 푸드트럭: 1일차와 동일한 장소에서 진행\n* 기획부스 및 교류부스: 1일차와 동일한 학생회관에서 진행\n* 폐막식 및 교류공연: 대강당으로 장소 변경",
    timestamp: new Date('2024-09-20T21:12:00'),
  },
  {
    id: 4,
    title: "리그오브레전드 시작은 21시 20분",
    content: "Link: https://www.youtube.com/watch?v=4BVrzDfgcVQ",
    timestamp: new Date('2024-09-20T21:12:00'),
  }
  // 여기에 더 많은 공지사항을 추가할 수 있습니다.
];

const NoticePage: React.FC = () => {
  // 타임스탬프를 기준으로 내림차순 정렬
  const sortedNotices = [...notices].sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        전달 사항
      </Typography>
      {sortedNotices.map((notice) => (
        <Notice
          key={notice.id}
          title={notice.title}
          content={notice.content}
          timestamp={notice.timestamp}
        />
      ))}
    </Container>
  );
};

export default NoticePage;