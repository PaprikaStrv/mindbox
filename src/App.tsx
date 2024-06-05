import { Box, Container, Typography } from "@mui/material";
import { Todos } from "@components/Todos/Todos";

function App() {
  
  return (
    <Container>
      <Typography variant="h1" mt={4} textAlign={"center"}>
        Todos
      </Typography>
      <Box mt={4}>
        <Todos/>
      </Box>
    </Container>
  );
}

export default App;
