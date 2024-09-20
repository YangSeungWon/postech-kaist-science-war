import React from 'react';
import { List, ListItem, ListItemText, Link, Paper } from '@mui/material';
import { styled } from '@mui/system';

const StyledListItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(2),
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const StyledLink = styled(Link)(({ theme }) => ({
  fontSize: '1.2rem',  // 글씨 크기를 키웁니다
  fontWeight: 500,     // 글씨를 약간 더 굵게 만듭니다
}));

interface LinkItem {
  title: string;
  url: string;
}

interface LinkListProps {
  links: LinkItem[];
}

const LinkList: React.FC<LinkListProps> = ({ links }) => {
  return (
    <Paper elevation={3}>
      <List>
        {links.map((link, index) => (
          <StyledListItem key={index} divider={index !== links.length - 1}>
            <ListItemText
              primary={
                <StyledLink href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.title}
                </StyledLink>
              }
            />
          </StyledListItem>
        ))}
      </List>
    </Paper>
  );
};

export default LinkList;