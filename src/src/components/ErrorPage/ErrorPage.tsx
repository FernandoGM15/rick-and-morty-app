import { Typography } from '@mui/material';

interface IError {
  error: string;
}

const ErrorPage = ({ error }: IError) => {
  return (
    <Typography
      variant="h1"
      color="primary"
      textAlign="center"
    >
      {error}
    </Typography>
  );
};

export default ErrorPage;
