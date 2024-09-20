import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, Link, useTheme, useMediaQuery } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';

export interface Score {
  category: string;
  postech: number;
  kaist: number;
  videoUrl?: string;
  status: 'finished' | 'ongoing' | 'upcoming';
}

interface ScoreBoardProps {
  scores: Score[];
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ scores }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const cellStyle = {
    fontSize: isMobile ? '1rem' : '1.2rem',
    padding: isMobile ? '8px' : '16px',
  };

  const postechColor = '#c80150'; // r200g1b80를 16진수로 변환
  const kaistColor = '#004191'; // a0g65b145를 16진수로 변환

  const headerStyle = {
    ...cellStyle,
    fontWeight: 'bold',
    backgroundColor: '#333333', // 어두운 배경
    color: '#ffffff', // 밝은 글씨
  };

  const postechLightColor = '#ffc6ce'; // 연한 POSTECH 색상
  const kaistLightColor = '#c6c6ff'; // 연한 KAIST 색상

  const ongoingColor = '#fff9c4'; // 진행 중인 경기의 배경색 (연한 노란색)
  const finishedColor = '#f5f5f5'; // 끝난 경기의 배경색 (연한 회색)

  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="right" style={headerStyle} width="30%">종목</TableCell>
            <TableCell align="center" style={{ ...headerStyle, backgroundColor: postechColor }} width="35%">POSTECH</TableCell>
            <TableCell align="center" style={{ ...headerStyle, backgroundColor: kaistColor }} width="35%">KAIST</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {scores.map((score) => (
            <TableRow 
              key={score.category} 
              style={{ 
                backgroundColor: 
                  score.status === 'ongoing' ? ongoingColor :
                  score.status === 'finished' ? finishedColor :
                  'inherit'
              }}
            >
              <TableCell component="th" scope="row" style={{...cellStyle, whiteSpace: 'nowrap'}} align="right">
                {score.videoUrl && (
                  <Link href={score.videoUrl} target="_blank" rel="noopener noreferrer" style={{ marginRight: '8px' }}>
                    <YouTubeIcon style={{ color: 'red', fontSize: '1.5rem' }} />
                  </Link>
                )}
                <b>{score.category}</b>
                {score.status === 'ongoing' && ' (진행 중)'}
                {score.status === 'finished' && ' (종료)'}
              </TableCell>
              <TableCell 
                align="center" 
                style={{ 
                  ...cellStyle, 
                  color: postechColor,
                  fontWeight: score.status === 'finished' && score.postech > score.kaist ? 'bold' : 'normal',
                  backgroundColor: score.status === 'finished' && score.postech > score.kaist ? postechLightColor : 'inherit'
                }}
              >
                {score.postech}
              </TableCell>
              <TableCell 
                align="center" 
                style={{ 
                  ...cellStyle, 
                  color: kaistColor,
                  fontWeight: score.status === 'finished' && score.kaist > score.postech ? 'bold' : 'normal',
                  backgroundColor: score.status === 'finished' && score.kaist > score.postech ? kaistLightColor : 'inherit'
                }}
              >
                {score.kaist}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default ScoreBoard;