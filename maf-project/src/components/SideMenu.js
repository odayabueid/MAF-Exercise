
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
import MailIcon from '@material-ui/icons/Mail';
import { Route, Redirect } from 'react-router'
import { Container, StylesProvider } from '@material-ui/core';
import InnerContainer from './InnerContainer'
import { SocialMediaIconsReact } from 'social-media-icons-react';

const drawerWidth = 240;

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
    // necessary for content to be below app bar
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
  const [pagesArr, setPagesArr] = React.useState(['700K$-800k$', '800K$-900k$', '900K$-1M$', '> 1M$'])
  const [villas, setVillas] = React.useState([])
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const changeTitleColor = (e) => {
    e.target.style.color = '#b29658';
    e.target.style.cursor = "pointer"

  }
  const resetTitleStyle = (e) => {
    e.target.style.color = '#fff';

  }
  const pagesHandler = (text) => {
    if (text == '700K$-800k$') {
      setVillas([
        { villaLocation: "2100 West Littleton Blvd Littleton, CO 80120", villaPrice: '730K$', villaName: 'The Croft', villaImage: 'https://cdn.villaway.com/202303/external/596951cda0ca05aa32167013/bg_tn_y0i1vuyc15_202303.jpg' },
        { villaLocation: '3541 North California  CTO, CO 85265', villaPrice: '780K$', villaName: 'The Sunnyside', villaImage: 'https://icon-invest.com/images/properties/57_1534933188_5swDUR5x.jpg' }
      ])
    } else if (text == '800K$-900k$') {
      setVillas([
        { villaLocation: '5437 South california Blvd Littleton, CO 7114', villaPrice: '850K$', villaName: 'The Willows', villaImage: 'https://i.pinimg.com/originals/a0/0b/7a/a00b7ad9b8650474e0cfcbaa077ee80e.jpg' },
        { villaLocation: '8541  Washington 1 8streat, CO 78254', villaPrice: '890K$', villaName: 'The Cottage', villaImage: 'https://www.wallpapers13.com/wp-content/uploads/2017/10/Dusit-Thani-Villa-Maldives-island-luxury-resort-on-Mudhdhoo-Island-in-Baa-Atoll-HD-Wallpaper-for-Desktop-1920x1200-915x515.jpg' },
      ])
    } else if (text == '900K$-1M$') {
      setVillas([
        { villaLocation: '8741 East NewYourk  TimeCenter, CO 80120', villaPrice: '910K$', villaName: 'Orchard Cottage', villaImage: 'https://s2.best-wallpaper.net/wallpaper/2880x1800/1812/Bulgaria-Karlovo-house-villa_2880x1800.jpg' },
        { villaLocation: '2100 West California  CityCenter, CO 90521', villaPrice: '990K$', villaName: 'Woodlands', villaImage: 'https://data.1freewallpapers.com/download/luxurious-beach-villa.jpg' }
      ])
    }
  }
  return (
    <div className={classes.root}>
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
          <h1>Villas Price Range</h1>
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
              <ListItemText primary={text} style={styles.listItems} />
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
        <div>
          {/* <SocialMediaIconsReact icon="twitter" url="https://twitter.com/your-twitter-handle" /> */}
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
  }
}


