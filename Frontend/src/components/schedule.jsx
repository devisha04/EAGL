import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import axios from 'axios'

function createData(date, task) {
  return { date, task};
}

export default function BasicTable() {
  const url = window.location.href;
  const parts = url.split('/');
  const lastElement = parts[parts.length - 1];
  const [schedule, setSchedule] = useState({});

  useEffect(() => {

    const fetchData = async () => {
      try {
        console.log(lastElement);
        //console.log(useParams);
        const response = await axios.get(`http://localhost:3000/vet/${lastElement}`);
        console.log(response.data.data.schedule)
        setSchedule(response.data.data.schedule);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once after mount

  const rowsdata = [];

  for (let i = 0; i < schedule.length; i++) {
    rowsdata.push(createData(schedule[i].date, schedule[i].task));
  }

  console.log(rowsdata)
  
  return (
    <div style={{ width: '50vw', height: '30vh', overflow: 'auto' }}>
      <button style={{backgroundColor: 'green', borderRadius: '5px'}}><h1 style={{color: 'white', padding: '5px'}}>Scheduling</h1></button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Day</TableCell>
              <TableCell align="right">Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowsdata.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.date}
                </TableCell>
                <TableCell align="right">{row.task}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
