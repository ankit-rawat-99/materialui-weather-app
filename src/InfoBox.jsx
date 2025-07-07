import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';

export default function InfoBox({ info }) {
  const INIT_URL = "https://images.unsplash.com/photo-1662377824580-a540e7728635?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHVzdCUyMHN0b3JtfGVufDB8fDB8fHww";
  const RAIN_URL = "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const HOT_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  const COLD_URL="https://images.unsplash.com/photo-1564314968303-86c5df2b9a4c?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  if (!info) {
    return <div className="InfoBox">No weather data available.</div>;
  }

  return (
    <div className="InfoBox">""
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="Weather image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Temperature: {info.temp}&deg;C<br />
              Humidity: {info.humidity}%<br />
              Min Temp: {info.tempMin}&deg;C<br />
              Max Temp: {info.tempMax}&deg;C<br />
              The weather feels like {info.feels_like}&deg;C
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
  