import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    [theme.breakpoints.down('md')]: {
      padding: '0'
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(2),
    }
  },
  descHeader: {
    textAlign: "center",
    color: theme.palette.primary.main,
    fontWeight: '700',
    padding: theme.spacing(1),
    margin: theme.spacing(0, 0, 5, 0),
    borderRadius: "0 0 4px",
    borderColor: theme.palette.primary.main,
    borderBottomStyle: "solid",
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(1),
      margin: theme.spacing(0,0,4,0)
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3),
      margin: theme.spacing(0,0,12,0)
    }
  },
  product: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    cursor: 'pointer',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      margin: '0',
    },
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(0, 9),
    },
    [theme.breakpoints.up('lg')]: {
      margin: theme.spacing(0, 24),
    },
  },
  modalContent: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid',
    borderRadius: "10px",
    borderColor: theme.palette.primary.main,
    boxShadow: theme.shadows[5],
  },
  modalContentItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(1)
  },
  modalContentImg: {
    borderRadius: '10px',
    [theme.breakpoints.down('md')]: {
      height:"180px",
      width: "180px"
    },
    [theme.breakpoints.up('md')]: {
      height: "90%",
      maxWidth: "100%"
    },
  },
  modalContentArticle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    padding: theme.spacing(1),
    "& > *": {
      margin: theme.spacing(0,0,3)
    },
  }
}));

export default useStyles;