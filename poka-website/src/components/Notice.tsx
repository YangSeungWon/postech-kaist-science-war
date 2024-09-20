import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  borderLeft: `5px solid ${theme.palette.error.main}`,
}));

interface EmergencyNoticeProps {
  title: string;
  content: string;
  timestamp: Date;
}

const EmergencyNotice: React.FC<EmergencyNoticeProps> = ({ title, content, timestamp }) => {
  return (
    <StyledCard>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          {content}
        </Typography>
        <Box display="flex" justifyContent="flex-end">
          <Typography variant="caption" color="text.secondary">
            {timestamp.toLocaleString()}
          </Typography>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default EmergencyNotice;