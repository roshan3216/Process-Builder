import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';
import { TextField } from '@mui/material';

export const BootstrapButton = styled(Button)({
  // color:"white",
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

/* THis BUTTON IS WORKING FINE
// export const CustomButton = styled(Button)(({ theme }) => ({
//   color:'#673d26',
//   backgroundColor: '#f8b179',
//   '&:hover': {
//     // backgroundColor: '#f1b587',
//     // // boxShadow:'',
//     // color: "#f3f6f9",
//     backgroundColor: '#7d4825',
//     color: '#f8b179',
//   },
//   fontFamily:"Raleway, sans-serif",
// })); */

/* Added some css properties to this button and is WORKING FINE
export const CustomButton = styled(Button)(({ theme }) => ({
  color: '#673d26',
  backgroundColor: '#f8b179',
  boxShadow: '0px 0px 15px 0.01px #f9ba84', // Add a subtle box shadow
  transition: 'box-shadow 0.3s', // Add a smooth transition for the box shadow
  '&:hover': {
    backgroundColor: '#f2b586',
    color: '#673d26',
    boxShadow: '0px 0px 15px 1px #f9ba84', // Increase box shadow on hover
  },
  fontFamily: "Raleway, sans-serif",
}));*/

export const CustomButton = styled(Button)(({ theme }) => ({
  color: '#673d26',
  backgroundColor: '#f8b179',
  boxShadow: '0px 0px 15px 0.01px #f9ba84', // Add a subtle box shadow
  transition: 'box-shadow 0.3s', // Add a smooth transition for the box shadow
  '&:hover': {
    backgroundColor: '#f2b586',
    color: '#141b2e',
    boxShadow: '0px 0px 15px 1px #f9ba84', // Increase box shadow on hover
  },
  fontFamily: "Raleway, sans-serif",
}));

/*
// export const CustomTextField = styled(TextField)(({ theme }) => ({
//   '& .MuiInputBase-input': {
//     color: '#f4f6fc',
//     backgroundColor: '#424669',
//     // borderRadius :"5px",
//     '&:hover': {
//       backgroundColor: '#424669',
//       color: '#f4f6fc',
//     },
//     '&:focus': {
//       borderLeft: '5px solid rgba(248,177,121,255) !important',
//       '& fieldset': {
//         borderColor: 'transparent !important',
//       },
//     },
//     '&:active': {
//       backgroundColor: '#2d3250',
//       borderColor: 'red !important',
//       borderLeft: '5px solid rgba(248,177,121,255) !important',
//     },
//   },
//   '& .MuiInputLabel-root': {
//     color: '#676f9d', // Change the color of the label to green
//   },
//   '& .MuiOutlinedInput-root': {
//     '&.Mui-focused': {
//       outline: 'none', // Remove the blue outline on focus
//       boxShadow: 'none', // Remove the box shadow on focus
//     },
//   },
// })); */

/*
// export const CustomTextField = styled(TextField)(({ theme }) => ({
//   '& .MuiInputBase-input': {
//     color: '#f3f6f9',
//     backgroundColor: '#424669',
//     border: 'none',
//     outline: 'none',
//     paddingLeft: '10px',
//     transition: 'color 0.25s, background-color 0.25s, padding-left 0.25s', // Apply transition properties
//     '&:hover': {
//       backgroundColor: '#424669',
//       color: '#f3f6f9',
//     },
//     '&:focus': {
//       // borderLeft: '5px solid rgba(248,177,121,255) !important',
//       boxShadow: 'inset 5px 0 0 0 #f9c194',
//       '& fieldset': {
//         borderColor: 'transparent !important',
//       },
//     },
//     '&:active': {
//       backgroundColor: '#2d3250',
//       // borderColor: 'red !important',
//       boxShadow: 'inset 5px 0 0 0 #f9c194',
//       // borderLeft: '5px solid rgba(248,177,121,255) !important',
//     },
//   },
//   '& .MuiInputLabel-root': {
//     color: '#676f9d',
//     transition: 'transform 0.25s', // Apply transition property
//   },
//   '& .MuiOutlinedInput-root': {
//     transition: 'border-left 0.25s', // Apply transition property
//     '&.Mui-focused': {
//       outline: 'none',
//       boxShadow: 'none',
//     },
//     '& fieldset': {
//       border: 'none',
//     },
//   },
// }));*/


/*
// export const CustomTextField = styled(TextField)(({ theme }) => ({
//   '& .MuiInputBase-input': {
//     color: '#f3f6f9',
//     backgroundColor: '#424669',
//     border: 'none',
//     outline: 'none',
//     paddingLeft: '10px',
//     '-webkit-transition': '0.3s', // Apply transition properties
//     transition: '0.3s', // Apply transition properties
//     '&:hover': {
//       backgroundColor: '#424669',
//       color: '#f3f6f9',
//     },
//     '&:focus': {
//       // borderLeft: '5px solid rgba(248,177,121,255) !important',
//       color: '#676f9d',
//       boxShadow: 'inset 5px 0 0 0 #f9c194',
//       '& fieldset': {
//         borderColor: 'transparent !important',
//       },
//     },
//     '&:active': {
//       backgroundColor: '#2d3250',
//       color: '#676f9d',
//       // borderColor: 'red !important',
//       // borderLeft: '5px solid rgba(248,177,121,255) !important',
//       boxShadow: 'inset 5px 0 0 0 #f9c194',
//     },
//   },
//   '& .MuiInputLabel-root': {
//     color: '#676f9d',
//     '-webkit-transition': 'transform 0.25s', // Apply transition property
//     transition: 'transform 0.25s', // Apply transition property
//   },
//   '& .MuiOutlinedInput-root': {
//     '-webkit-transition': 'border-left 0.25s', // Apply transition property
//     transition: 'border-left 0.25s', // Apply transition property
//     '&.Mui-focused': {
//       outline: 'none',
//       boxShadow: 'none',
//     },
//     '& fieldset': {
//       border: 'none',
//     },
//   },
// })); */

/*
// export const CustomTextField = styled(TextField)(({ theme }) => ({
//   '& .MuiInputBase-input': {
//     color: '#f3f6f9',
//     backgroundColor: '#424669',
//     border: 'none',
//     outline: 'none',
//     paddingLeft: '10px',
//     '-webkit-transition': '0.3s', // Apply transition properties
//     transition: '0.3s', // Apply transition properties
//     '&:hover': {
//       backgroundColor: '#424669',
//       color: '#f3f6f9',
//     },
//     '&:focus': {
//       // borderLeft: '5px solid rgba(248,177,121,255) !important',
//       boxShadow: 'inset 5px 0 0 0 #f9c194',
//       '& fieldset': {
//         borderColor: 'transparent !important',
//       },
//     },
//     '&:active': {
//       backgroundColor: '#424669',
//       color: '#676f9d',
//       // borderColor: 'red !important',
//       // borderLeft: '5px solid rgba(248,177,121,255) !important',
//       boxShadow: 'inset 5px 0 0 0 #f9c194',
//     },
//   },
//   '& .MuiInputLabel-root': {
//     color: '#676f9d',
//     // '-webkit-transition': 'transform 0.25s', // Apply transition property
//     // transition: 'transform 0.25s', // Apply transition property
//   },
//   '& .MuiOutlinedInput-root': {
//     // '-webkit-transition': 'border-left 0.25s', // Apply transition property
//     // transition: 'border-left 0.25s', // Apply transition property
//     '&.Mui-focused': {
//       outline: 'none',
//       boxShadow: 'none',
//     },
//     '& fieldset': {
//       border: 'none',
//     },
//   },
// })); */


/* 
export const CustomTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-input': {
    color: '#f3f6f9',
    backgroundColor: '#424669',
    border: 'none',
    outline: 'none',
    paddingLeft: '10px',
    fontFamily:"Raleway, sans-serif",
    '-webkit-transition': '0.3s', // Apply transition properties
    transition: '0.3s', // Apply transition properties
    '&:hover': {
      backgroundColor: '#424669',
      color: '#f3f6f9',
    },
    '&:focus': {
      // borderLeft: '5px solid rgba(248,177,121,255) !important',
      boxShadow: 'inset 5px 0 0 0 #f9c194',
      fontFamily:"Raleway, sans-serif",
      '& fieldset': {
        borderColor: 'transparent !important',
      },
    },
    '&:active': {
    //   backgroundColor: '#2d3250',
      color: '#676f9d',
      // borderColor: 'red !important',
      // borderLeft: '5px solid rgba(248,177,121,255) !important',
      boxShadow: 'inset 5px 0 0 0 #f9c194',
      fontFamily:"Raleway, sans-serif",
    },
    '&:-webkit-autofill': {
      backgroundColor: '#424669 !important', // Override autofill background color
    },
  },
  '& .MuiInputLabel-root': {
    color: '#676f9d',
    // '-webkit-transition': 'transform 0.25s', // Apply transition property
    // transition: 'transform 0.25s', // Apply transition property
  },
  '& .MuiOutlinedInput-root': {
    // '-webkit-transition': 'border-left 0.25s', // Apply transition property
    // transition: 'border-left 0.25s', // Apply transition property
    fontFamily:"Raleway, sans-serif",
    '&.Mui-focused': {
      outline: 'none',
      boxShadow: 'none',
    },
    '& fieldset': {
      border: 'none',
    },
  },
})); */


/* This component workign fine but issue is that color of the label changes when in active state
// export const CustomTextField = styled(TextField)(({ theme }) => ({
//   '& .MuiInputBase-input': {
//     color: '#f3f6f9',
//     backgroundColor: '#424669',
//     border: 'none',
//     outline: 'none',
//     paddingLeft: '10px',
//     fontFamily: "Raleway, sans-serif",
//     '-webkit-text-fill-color': '#f3f6f9', // Set text color for autofill
//     '&:-webkit-autofill': {
//       transition: 'background-color 5000s ease-in-out 0s', // Delay the background color transition for autofill
//     },
//     '&:hover': {
//       backgroundColor: '#424669',
//       color: '#f3f6f9',
//     },
//     '&:focus': {
//         color: '#676f9d',
//       boxShadow: 'inset 5px 0 0 0 #f9c194',
//       fontFamily: "Raleway, sans-serif",
//       '& fieldset': {
//         borderColor: 'transparent !important',
//       },
//     },
//     '&:active': {
//       color: '#676f9d !important',
//       boxShadow: 'inset 5px 0 0 0 #f9c194',
//       fontFamily: "Raleway, sans-serif",
//     },
//   },
//   '& .MuiInputLabel-root': {
//     color: '#676f9d',
//   },
//   '& .MuiOutlinedInput-root': {
//     fontFamily: "Raleway, sans-serif",
//     color: '#676f9d',
//     '&.Mui-focused': {
//         color: '#676f9d',
//         outline: 'none',
//         boxShadow: 'none',
//     },
//     '& fieldset': {
//         color: '#676f9d',
//         border: 'none',
//     },
//   },
// }));*/


export const CustomTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-input': {
    color: '#f3f6f9',
    backgroundColor: '#424669',
    border: 'none',
    outline: 'none',
    paddingLeft: '10px',
    fontFamily: "Raleway, sans-serif",
    '-webkit-text-fill-color': '#f3f6f9', // Set text color for autofill
    '&:-webkit-autofill': {
      transition: 'background-color 5000s ease-in-out 0s', // Delay the background color transition for autofill
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
      color: '#676f9d', // Set label color for active state
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




// export default function CustomizedButtons() {
//   return (
//     <Stack spacing={2} direction="row">
//       <ColorButton variant="contained">Custom CSS</ColorButton>
//       <BootstrapButton variant="contained" disableRipple>
//         Bootstrap
//       </BootstrapButton>
//     </Stack>
//   );
// }
