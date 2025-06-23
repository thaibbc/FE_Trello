import { Button, TextField, Typography, Container, Grid, Link, Card, CardContent, Box } from '@mui/material';

const ContainerHome = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: '40px' }}>
      {/* Section 1 */}
      <Box style={{ height: '100vh', display: 'flex', alignItems: 'center'}}>
        <Grid container spacing={5} alignItems="center">
          {/* Left Section */}
          <Grid item md={6}>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              Capture, organize, and tackle your to-dos from anywhere.
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              Escape the clutter and chaos—unleash your productivity with Trello.
            </Typography>
            <Grid container spacing={2} style={{ marginTop: '20px' }}>
              <Grid item xs={6}>
                <TextField variant="outlined" fullWidth placeholder="Email" />
              </Grid>
              <Grid item xs={4} sx={{display:'flex'}}>
                <Button variant="contained" color="primary" fullWidth>Sign up - it’s free!</Button>
              </Grid>
            </Grid>
            <Link href="#" underline="hover" style={{ display: 'inline-block', marginTop: '20px' }}>Watch video ▶</Link>
          </Grid>

          {/* Right Section */}
          <Grid item md={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src="/mockup-phone.png" alt="Phone Mockup" style={{ width: '30%' }} />
          </Grid>
        </Grid>
      </Box>

      {/* Section 2 */}
      <Box style={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
        <Box>
          <Typography variant="h4" fontWeight="bold" gutterBottom>Trello 101</Typography>
          <Typography variant="h5" fontWeight="bold" gutterBottom>Your productivity powerhouse</Typography>
          <Typography variant="body1" color="textSecondary">
            Stay organized and efficient with Inbox, Boards, and Planner.
          </Typography>
          <Grid container spacing={4} marginTop={4}>
            <Grid item md={6}>
              <Typography variant="h6">Inbox</Typography>
              <Typography variant="body2">Capture your thoughts and tasks.</Typography>
              <Typography variant="h6">Boards</Typography>
              <Typography variant="body2">Organize and prioritize your tasks visually.</Typography>
              <Typography variant="h6">Planner</Typography>
              <Typography variant="body2">Manage and plan efficiently.</Typography>
            </Grid>
            <Grid item md={6}>
              <img src="/boards-example.png" alt="Boards Example" style={{ width: '100%' }} />
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Section 3 */}
      <Box style={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
        <Box>
          <Typography variant="h5" fontWeight="bold" textAlign="center">From message to action</Typography>
          <Typography variant="body1" textAlign="center" color="textSecondary">
            Turn communication into tasks with Trello Inbox.
          </Typography>
          <Grid container spacing={4} marginTop={4}>
            <Grid item md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6">EMAIL MAGIC</Typography>
                  <Typography variant="body2">Turn emails into tasks with AI-powered analysis.</Typography>
                  <img src="/email-magic.png" alt="Email Magic" style={{ width: '100%' }} />
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6">SLACKSORCERY</Typography>
                  <Typography variant="body2">Convert Slack messages to actionable tasks.</Typography>
                  <img src="/slack-sorcery.png" alt="Slack Sorcery" style={{ width: '100%' }} />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default ContainerHome;
