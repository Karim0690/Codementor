import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";

export default function DeveloperCard({
  name,
  avatar,
  title,
  skills,
  className,
}) {
  return (
    <>
      <Card
        className={className}
        sx={{
          maxWidth: 345,
          width: "345px",
          display: "flex ",
          alignItems: "center",
          textAlign: "left",
          padding: "20px",
          margin: "12px 20px",
        }}
      >
        <Avatar alt={name} src={avatar} sx={{ width: 100, height: 100 }} />
        <CardContent
          sx={{ marginLeft: "20px", padding: "0" }}
        >
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", marginBottom: "8px" }}
          >
            {title}
          </Typography>
          <Box>
            {skills.map((skill, index) => (
              <span
                className="cards"
                style={{ marginRight: "4px" }}
                key={index}
              >
                <img src={skill} alt="" />
              </span>
            ))}
          </Box>
        </CardContent>
      </Card>
    </>
  );
}
