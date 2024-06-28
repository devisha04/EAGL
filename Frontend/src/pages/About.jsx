import * as React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../../src/Divider.css';
import SearchAppBar from '@/components/ui/matbar';

export default function NGOInformation() {
  return (
    <>
    <SearchAppBar/> 
    <div className="container">
      <div className="content">
        <div className="heading-container">
          <Typography variant="h4" gutterBottom style={{ textAlign: 'center' }}>
            Every Contribution Counts
          </Typography>
        </div>

        <div className="section">
          <Typography variant="h5" gutterBottom>
            Vision
          </Typography>
          <ul>
            <li>Eradicate poverty and extreme hunger at the base of the economic pyramid.</li>
            <li>Promote inclusive sustainable development.</li>
            <li>Reach and impact 125,000 families over the next five years.</li>
          </ul>
        </div>

        <div className="section">
          <Typography variant="h5" gutterBottom>
            Mission
          </Typography>
          <ul>
            <li>Create entrepreneurs by promoting agriculture-based livelihoods.</li>
            <li>Empower individuals, especially in rural areas, through skills and resources.</li>
            <li>Drive economic growth by uplifting communities.</li>
          </ul>
        </div>

        <div className="section">
          <Typography variant="h5" gutterBottom>
            Strategy
          </Typography>
          <ul>
            <li>Economic empowerment of individuals at the base of the pyramid.</li>
            <li>Develop sustainable livelihood opportunities.</li>
            <li>Foster partnerships to bring about social and economic empowerment.</li>
          </ul>
        </div>

        <div className="form-container">
          <Typography variant="h5" gutterBottom>
            Donate Now
          </Typography>
          <form className="donation-form" noValidate autoComplete="off">
            <TextField
              label="Company Name"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Donation Amount"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <Button variant="contained" color="primary" type="submit">
              Donate
            </Button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}