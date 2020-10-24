
import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import InnerContainer from './InnerContainer'
import { SocialIcon } from 'react-social-icons';
import villasData from '../data.json'

var drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,

    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#b29658',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function SideMenu() {

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [pagesArr] = React.useState([700000, 800000, 900000, 1000000])
  const [villas, setVillas] = React.useState([])

  // handle navSlide open
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  // handle navSlide close
  const handleDrawerClose = () => {
    setOpen(false);
  };
  // change title color
  const changeTitleColor = (e) => {
    e.target.style.color = '#b29658';
    e.target.style.cursor = "pointer"

  }
  // reset title color 
  const resetTitleStyle = (e) => {
    e.target.style.color = '#fff';
  }

  // handle the data of villas from data.json file
  const pagesHandler = (price) => {
    var handleVillasData = []
    villasData.villas.forEach(el => {
      if (price >= 700000 && price < 800000 && el.villaPrice >= 700000 && el.villaPrice < 800000) {
        handleVillasData.push(el)
      } else if (price >= 800000 && price < 900000 && el.villaPrice >= 800000 && el.villaPrice < 900000) {
        handleVillasData.push(el)
      } else if (price >= 900000 && price < 1000000 && el.villaPrice >= 900000 && el.villaPrice < 1000000) {
        handleVillasData.push(el)
      } else if (price >= 1000000 && el.villaPrice >= 1000000) {
        handleVillasData.push(el)
      }
      setVillas(handleVillasData)
      setOpen(false)
    })
  }

  return (
    <div
      className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar style={styles.header}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
            style={styles.hamburgerIcon}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap onMouseOver={changeTitleColor} onMouseLeave={resetTitleStyle}>

            MAF Exercise
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}

      >
        <div className={classes.drawerHeader}>
          <h3 style={styles.slideSize}>Villas Price Range</h3>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {pagesArr.map((text, index) => (

            <ListItem button key={text} onClick={() => {
              pagesHandler(text)
            }}>
              <ListItemIcon style={styles.listIcon}><InboxIcon /> </ListItemIcon>
              <ListItemText primary={text < 1000000 ? `${Math.sign(text) * ((Math.abs(text) / 1000).toFixed(1)) + 'k'}-${Math.sign(text + 100000) * ((Math.abs(text + 100000) / 1000).toFixed(1)) + 'k'}` : '>1M'} style={styles.listItems} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <InnerContainer villas={villas} />
        <div style={styles.mediaStyle}>
          <SocialIcon url="https://github.com/odayabueid?tab=repositories" target="_blank" />
          <SocialIcon url="https://www.linkedin.com/in/oday-abueid-7321b1128/" target="_blank" />
          <SocialIcon url="https://twitter.com/MajidAlFuttaim" target="_blank" />
        </div>
      </main>
    </div>
  );

}
const styles = {
  header: {
    backgroundColor: '#31261d',
  },
  hamburgerIcon: {
    color: '#b39759'
  },
  listItems: {
    color: '#31261d'

  },
  listIcon: {
    color: '#b39759'
  },
  mediaStyle: {
    textAlign: 'center',
    marginTop: '20px'
  },

}


