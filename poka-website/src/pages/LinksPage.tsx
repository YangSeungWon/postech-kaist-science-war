import React from 'react';
import { Container, Typography } from '@mui/material';
import LinkList from '../components/LinkList';

const links = [
  { title: '포카전 홈페이지', url: 'https://poka2024.notion.site' },
  { title: '2024 POSTECH-KAIST Science war homepage', url: 'https://poka2024global.notion.site/' },
  { title: '포카전 인스타그램', url: 'https://www.instagram.com/poka.sciencewar/' },
  { title: '포카전 관련 링크 트리', url: 'https://linktr.ee/2024poka' },
  // 여기에 더 많은 링크를 추가할 수 있습니다.
];

const LinksPage: React.FC = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        관련 링크
      </Typography>
      <LinkList links={links} />
    </Container>
  );
};

export default LinksPage;