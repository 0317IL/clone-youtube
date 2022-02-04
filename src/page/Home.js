import React from 'react';
import { makeStyles, AppBar, Toolbar, IconButton, Drawer, Button, List, Typography,
        Divider, ListItem, ListItemIcon, ListItemText, ListSubheader, Box,
        Grid, Hidden, Switch, Icon, TextField, Input, InputAdornment} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';

import Apps from '@material-ui/icons/Apps';
import MoreVert from '@material-ui/icons/MoreVert';
import VideoCall from '@material-ui/icons/VideoCall';

import HomeIcon from '@material-ui/icons/Home';
import Subscriptions from '@material-ui/icons/Subscriptions';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';

import VideoLibrary from '@material-ui/icons/VideoLibrary';
import History from '@material-ui/icons/History';
import OndemandVideoOutlinedIcon from '@material-ui/icons/OndemandVideoOutlined';
import QueryBuilderOutlinedIcon from '@material-ui/icons/QueryBuilderOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';

import YouTubeIcon from '@material-ui/icons/YouTube';
import LocalMoviesOutlinedIcon from '@material-ui/icons/LocalMoviesOutlined';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import SportsIcon from '@material-ui/icons/Sports';

import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import FeedbackIcon from '@material-ui/icons/Feedback';
import SettingsIcon from '@material-ui/icons/Settings';

import logoBranco from '../assets/logo_branco.png';
import logoPreto from '../assets/logo_preto.png';
import img from '../assets/avatar.jpg';
import thumb from '../assets/thumb.png';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundColor: theme.palette.background.dark,
  },
  appBar: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
  },
  logo: {
    height: 25,
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    borderRight: 'none',
  },
  menuIcon: {
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(6),
  },
  icons: {
    paddingRight: theme.spacing(5),
  },
  grow: {
    flexGrow: 1,
  },
  input:{
    width: 350,
  },
  buttonSearch:{
    width: 50,
    height: 55,
    backgroundColor: '#eeeeee',
    borderRadius: 0,
    borderColor: 'black',
    borderWidth: 2
  },
  listItemText: {
    fontSize: 14,
  },
  listItem: {
    paddingTop: 4,
    paddingBottom: 4,
  },
}));

const videos = [
  {
    id: 1,
    title: 'Criando um clone do youtube utilizando o Reactjs e o Material UI',
    channel: 'Canal 1',
    views: '100 mil visualizações',
    date: 'há 3 meses',
    avatar: img,
    thumb: thumb,
  },
  {
    id: 2,
    title: 'Criando um clone do youtube utilizando o Reactjs e o Material UI',
    channel: 'Canal 2',
    views: '100 mil visualizações',
    date: 'há 3 meses',
    avatar: img,
    thumb: thumb,
  },
  {
    id: 3,
    title: 'Criando um clone do youtube utilizando o Reactjs e o Material UI',
    channel: 'Canal 3',
    views: '100 mil visualizações',
    date: 'há 3 meses',
    avatar: img,
    thumb: thumb,
  },
  {
    id: 4,
    title: 'Criando um clone do youtube utilizando o Reactjs e o Material UI',
    channel: 'Canal 4',
    views: '100 mil visualizações',
    date: 'há 3 meses',
    avatar: img,
    thumb: thumb,
  },
  {
    id: 5,
    title: 'Criando um clone do youtube utilizando o Reactjs e o Material UI',
    channel: 'Canal 5',
    views: '100 mil visualizações',
    date: 'há 3 meses',
    avatar: img,
    thumb: thumb,
  },
  {
    id: 6,
    title: 'Criando um clone do youtube utilizando o Reactjs e o Material UI',
    channel: 'Canal 6',
    views: '100 mil visualizações',
    date: 'há 3 meses',
    avatar: img,
    thumb: thumb,
  },
  {
    id: 7,
    title: 'Criando um clone do youtube utilizando o Reactjs e o Material UI',
    channel: 'Canal 7',
    views: '100 mil visualizações',
    date: 'há 3 meses',
    avatar: img,
    thumb: thumb,
  },
  {
    id: 8,
    title: 'Criando um clone do youtube utilizando o Reactjs e o Material UI',
    channel: 'Canal 8',
    views: '100 mil visualizações',
    date: 'há 3 meses',
    avatar: img,
    thumb: thumb,
  },
];

function Home({ darkMode, setDarkMode }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <AppBar color='inherit' className={classes.appBar}>
        <Toolbar>
          <IconButton edge='start'className={classes.menuIcon}
            aria-label='menu'>
            <MenuIcon />
          </IconButton>

          <img src={ theme.palette.type === 'dark' ? logoBranco : logoPreto}
            alt='logo' className={classes.logo} 
          />

          <div className={classes.grow} />

          <TextField label='Pesquisar' variant='outlined' className={classes.input} />
          <IconButton className={classes.buttonSearch} >
            <SearchIcon />
          </IconButton>

          <div className={classes.grow} />

          <Switch value={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className={classes.icons}
          />

          <IconButton className={classes.icons}>
            <VideoCall />
          </IconButton>
          <IconButton className={classes.icons}>
            <Apps />
          </IconButton>
          <IconButton className={classes.icons}>
            <MoreVert />
          </IconButton>

          <Button startIcon={<AccountCircle />}
            variant='outlined' color='secondary'
          >
            Fazer Login
          </Button>
        </Toolbar>
      </AppBar>

      <Box display='flex'>
        <Hidden mdDown>
          <Drawer className={classes.drawer}
            variant='permanent' classes={{ paper: classes.drawerPaper,}}
          >
            <Toolbar />

            <div className={classes.drawerContainer}>
              <List>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                  <ListItemText classes={{ primary: classes.listItemText,}}
                    primary={'Início'}
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <ExploreOutlinedIcon />
                  </ListItemIcon>

                  <ListItemText classes={{primary: classes.listItemText,}}
                    primary={'Explorar'}
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <Subscriptions />
                  </ListItemIcon>

                  <ListItemText classes={{ primary: classes.listItemText,}}
                    primary={'Inscrições'}
                  />
                </ListItem>
              </List>

              <Divider />

              <List>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon> 
                    <VideoLibrary />
                  </ListItemIcon>

                  <ListItemText
                    classes={{ primary: classes.listItemText, }}
                    primary={'Biblioteca'}
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <History />
                  </ListItemIcon>

                  <ListItemText
                    classes={{primary: classes.listItemText,}}
                    primary={'Histórico'}
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon> 
                    <OndemandVideoOutlinedIcon /> 
                  </ListItemIcon>

                  <ListItemText
                    classes={{ primary: classes.listItemText,}}
                    primary={'Seus vídeos'}
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon> 
                    <QueryBuilderOutlinedIcon /> 
                  </ListItemIcon>

                  <ListItemText
                    classes={{ primary: classes.listItemText,}}
                    primary={'Assistir mais tarde'}
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon> 
                    <ThumbUpAltOutlinedIcon /> 
                  </ListItemIcon>

                  <ListItemText
                    classes={{ primary: classes.listItemText,}}
                    primary={'Videos marcados c...'}
                  />
                </ListItem>
              </List>

              <Divider />

              <List component='nav' aria-labelledby='nested-list-subheader'
                subheader={
                  <ListSubheader
                    component='div'
                    id='nested-list-subheader'
                    style={{fontWeight: 600, fontSize: 17, marginLeft: 10,}}
                  >
                    Inscrições
                  </ListSubheader>
                }
              >
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <Icon />
                  </ListItemIcon>

                  <ListItemText
                    classes={{ primary: classes.listItemText, }}
                    primary={'Canal'}
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <Icon />
                  </ListItemIcon>

                  <ListItemText
                    classes={{ primary: classes.listItemText, }}
                    primary={'Canal'}
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <Icon />
                  </ListItemIcon>

                  <ListItemText
                    classes={{ primary: classes.listItemText, }}
                    primary={'Canal'}
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <Icon />
                  </ListItemIcon>

                  <ListItemText
                    classes={{ primary: classes.listItemText, }}
                    primary={'Canal'}
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <Icon />
                  </ListItemIcon>

                  <ListItemText
                    classes={{ primary: classes.listItemText, }}
                    primary={'Canal'}
                  />
                </ListItem>

               <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <Icon />
                  </ListItemIcon>

                  <ListItemText
                    classes={{ primary: classes.listItemText, }}
                    primary={'Canal'}
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <Icon />
                  </ListItemIcon>

                  <ListItemText
                    classes={{ primary: classes.listItemText, }}
                    primary={'Canal'}
                  />
                </ListItem>
              </List>

              <Divider />

              <List component='nav' aria-labelledby='nested-list-subheader'
                subheader={
                  <ListSubheader
                    component='div'
                    id='nested-list-subheader'
                    style={{fontWeight: 600, fontSize: 15, marginLeft: 8,}}
                  >
                    MAIS DO YOUTUBE
                  </ListSubheader>
                }
              >
                 <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <YouTubeIcon />
                  </ListItemIcon>

                  <ListItemText
                    classes={{ primary: classes.listItemText, }}
                    primary={'Youtube Premium'}
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <LocalMoviesOutlinedIcon />
                  </ListItemIcon>

                  <ListItemText
                    classes={{ primary: classes.listItemText, }}
                    primary={'Filmes'}
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <VideogameAssetIcon />
                  </ListItemIcon>

                  <ListItemText
                    classes={{ primary: classes.listItemText, }}
                    primary={'Jogos'}
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <LiveTvIcon />
                  </ListItemIcon>

                  <ListItemText
                    classes={{ primary: classes.listItemText, }}
                    primary={'Ao vivo'}
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <EmojiObjectsIcon />
                  </ListItemIcon>

                  <ListItemText
                    classes={{ primary: classes.listItemText, }}
                    primary={'Aprender'}
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <SportsIcon />
                  </ListItemIcon>

                  <ListItemText
                    classes={{ primary: classes.listItemText, }}
                    primary={'Esportes'}
                  />
                </ListItem>

              </List>

              <Divider />

              <List>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <SettingsIcon />
                  </ListItemIcon>

                  <ListItemText
                    classes={{ primary: classes.listItemText, }}
                    primary={'Configurações'}
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <EmojiFlagsIcon />
                  </ListItemIcon>

                  <ListItemText
                    classes={{ primary: classes.listItemText, }}
                    primary={'Histórico de denúncias'}
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <HelpOutlineIcon />
                  </ListItemIcon>

                  <ListItemText
                    classes={{ primary: classes.listItemText, }}
                    primary={'Ajuda'}
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <FeedbackIcon />
                  </ListItemIcon>

                  <ListItemText
                    classes={{ primary: classes.listItemText, }}
                    primary={'Enviar feedback'}
                  />
                </ListItem>
              </List>

              <Divider />
            </div>
          </Drawer>
        </Hidden>

        <Box p={8}>
          <Toolbar />

          <Typography variant='h5'
            color='textPrimary' style={{ fontWeight: 600 }}
          >
            Recomendados
          </Typography>

          <Grid container spacing={4}>
            {videos.map((item, index) => (
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <Box>
                  <img  src={item.thumb}
                    style={{ width: '100%' }}
                    alt={item.title}
                  />

                  <Box>
                    <Typography style={{ fontWeight: 600 }}
                      gutterBottom variant='body1'
                      color='textPrimary'
                    >
                      {item.title}
                    </Typography>

                    <Typography display='block'
                      variant='body2' color='textSecondary'
                    >
                      {item.channel}
                    </Typography>

                    <Typography variant='body2' color='textSecondary'>
                      {`${item.views} • ${item.date}`}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default Home;