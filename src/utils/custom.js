import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

export const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#0063cc',
  borderColor: '#0063cc',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

export const CustomButton = styled(Button)(({ theme }) => ({
  color: '#673d26',
  backgroundColor: '#f8b179',
  boxShadow: '0px 0px 15px 0.01px #f9ba84',
  transition: 'box-shadow 0.3s',
  '&:hover': {
    backgroundColor: '#f2b586',
    color: '#141b2e',
    boxShadow: '0px 0px 15px 1px #f9ba84',
  },
  fontFamily: "Raleway, sans-serif",
}));


export const CustomTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-input': {
    color: '#f3f6f9',
    backgroundColor: '#424669',
    border: 'none',
    outline: 'none',
    paddingLeft: '10px',
    fontFamily: "Raleway, sans-serif",
    '-webkit-text-fill-color': '#f3f6f9',
    '&:-webkit-autofill': {
      transition: 'background-color 5000s ease-in-out 0s',
    },
    '&:hover': {
      backgroundColor: '#424669',
      color: '#f3f6f9',
    },
    '&:focus': {
      color: '#676f9d',
      boxShadow: 'inset 5px 0 0 0 #f9c194',
      fontFamily: "Raleway, sans-serif",
      '& fieldset': {
        borderColor: 'transparent !important',
      },
    },
    '&:active': {
      color: '#676f9d !important',
      boxShadow: 'inset 5px 0 0 0 #f9c194',
      fontFamily: "Raleway, sans-serif",
    },
  },
  '& .MuiInputLabel-root': {
    color: '#676f9d',
    '&.Mui-focused': {
      color: '#676f9d',
    },
  },
  '& .MuiOutlinedInput-root': {
    fontFamily: "Raleway, sans-serif",
    color: '#676f9d',
    '&.Mui-focused': {
      color: '#676f9d',
      outline: 'none',
      boxShadow: 'none',
    },
    '& fieldset': {
      color: '#676f9d',
      border: 'none',
    },
  },
}));
