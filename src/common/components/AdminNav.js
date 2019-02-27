import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import utils from '../../utils';

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import BallotIcon from '@material-ui/icons/Ballot';
import BookIcon from '@material-ui/icons/Book';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import EventNoteIcon from '@material-ui/icons/EventNote';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import HowToVoteIcon from '@material-ui/icons/HowToVote';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import PollIcon from '@material-ui/icons/Poll';

import logo from '../../../public/resources/logo_white.png';

const BetaBadge = styled.em`
  background-color: #FF3B30;
  border-radius: 100px;
  color: white;
  font-size: 0.6em;
  font-style: normal;
  font-weight: 900;
  margin-left: 8px;
  padding: 4px;
  padding-left: 12px;
  padding-right: 12px;
  text-transform: uppercase;
`;

const DrawerWrapper = styled.div`
  width: 240px;
`;

const Logo = styled.a`
  && {
    align-items: center;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 960px) {
      margin: 0 auto;
    }
  }
`;

const LogoImage = styled.img`
  margin-right: 16px;
`;

const ProfileMenuWrapper = styled.div`
  margin-left: auto;
`;

const StyledAppBar = styled(AppBar)`
  && {
    background-color: #333;
    color: #fff;
    font-family: 'MuseoSansRounded';

    a {
      color: #fff;
      text-decoration: none;
    }
  }
`;

const StyledAdminNav = styled.div`
  && {
    display: flex;
    width: 240px;

    a {
      color: inherit;
      margin: 0;
      padding: 0;
    }
  }
`;

const StyledDrawer = styled.nav`
  && {
    @media screen and (min-width: 960px){
      width: 240px;
      flex-shrink: 0;
    }
  }
`;

const StyledDrawerInner = styled(Drawer)`
  && {
    width: 240px;
  }
`;

const StyledSpacer = styled(Toolbar)`
  && {
    @media screen and (max-width: 960px) {
      display: none;
    }
  }
`;

const MenuButton = styled(IconButton)`
  && {
    margin-right: 20px;

    @media screen and (min-width: 960px) {
      display: none;
    }
  }
`;

const MENU_ICONS = {
  account: <AccountBoxIcon />,
  article: <BookIcon />,
  candidate: <PersonIcon />,
  election: <HowToVoteIcon />,
  event: <EventNoteIcon />,
  logout: <ExitToAppIcon />,
  photo: <PhotoLibraryIcon />,
  poll: <PollIcon />,
  position: <DirectionsRunIcon />,
  profile: <HowToRegIcon />,
  ticket: <BallotIcon />
}

const generateMenuItem = (contentType, title, clickHandler) => (
  <ListItem
    button key={contentType}
    onClick={() => clickHandler()}
  >
    <ListItemIcon>
      { MENU_ICONS[contentType] }
    </ListItemIcon>

    <ListItemText primary={title} />
  </ListItem>
)

class AdminNav extends React.Component {
  state = {
    anchorEl: null,
    mobileOpen: false
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  handleProfileMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleProfileMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  navigateTo = url => {
    const { dispatch } = this.props;
    dispatch(push(url));
  }

  render() {
    const { logout } = this.props;
    const { anchorEl } = this.state;

    const {
      CONTENT_TYPES,
      ELECTION_TYPES,
      POLL_TYPES
    } = utils;

    const profileMenuOpen = !!anchorEl;

    const drawer = (
      <DrawerWrapper>
        <StyledSpacer />

        <Divider />
        <List>
          <ListSubheader>News Feed</ListSubheader>
          {
            Object.keys(CONTENT_TYPES).map(contentType => {
              const { slug, title } = CONTENT_TYPES[contentType];
              return generateMenuItem(contentType, title,
                this.navigateTo.bind(this, `/admin/${slug}`)
              );
            })
          }
        </List>

        <Divider />
        <List>
          <ListSubheader>Polls</ListSubheader>
          {
            Object.keys(POLL_TYPES).map(contentType => {
              const { slug, title } = POLL_TYPES[contentType];
              return generateMenuItem(contentType, title,
                this.navigateTo.bind(this, `/admin/${slug}`)
              );
            })
          }
        </List>

        <Divider />
        <List>
        <ListSubheader>Elections</ListSubheader>
          {
            Object.keys(ELECTION_TYPES).map(contentType => {
              const { slug, title } = ELECTION_TYPES[contentType];
              return generateMenuItem(contentType, title,
                this.navigateTo.bind(this, `/admin/${slug}`)
              );
            })
          }
        </List>

        <Divider />
        <List>
          <ListSubheader>Account</ListSubheader>
          {
            generateMenuItem('account', 'Account',
              this.navigateTo.bind(this, `/admin/account`)
            )
          }
          {
            generateMenuItem('profile', 'My Profile',
              this.navigateTo.bind(this, `/admin/account`)
            )
          }
          { generateMenuItem('logout', 'Logout', () => logout()) }
        </List>
      </DrawerWrapper>
    );

    const profileMenu = (
      <ProfileMenuWrapper>
        <IconButton
          aria-owns={profileMenuOpen ? 'menu-appbar' : undefined}
          aria-haspopup="true"
          onClick={this.handleProfileMenu}
          color="inherit"
        >
          <AccountCircleIcon fontSize="large" />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          open={profileMenuOpen}
          onClose={this.handleProfileMenuClose}
        >
          <MenuItem onClick={this.handleProfileMenuClose}>Account</MenuItem>
          <MenuItem onClick={this.handleProfileMenuClose}>My Profile</MenuItem>
          <MenuItem onClick={() => logout()}>Logout</MenuItem>
        </Menu>
      </ProfileMenuWrapper>
    );

    return (
      <StyledAdminNav>
        <CssBaseline />

        <StyledAppBar position="fixed">
          <Toolbar>
            <MenuButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
            >
              <MenuIcon />
            </MenuButton>

            <Logo href="/admin">
              <LogoImage src={logo} alt="Isegoria Logo" />
              <Typography variant="h6" color="inherit" noWrap>
                Isegoria <BetaBadge>Beta</BetaBadge>
              </Typography>
            </Logo>

            {profileMenu}
          </Toolbar>
        </StyledAppBar>

        <StyledDrawer>
          <Hidden smUp implementation="css">
            <StyledDrawerInner
              container={this.props.container}
              variant="temporary"
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              ModalProps={{
                keepMounted: true
              }}
            >
              {drawer}
            </StyledDrawerInner>
          </Hidden>
          <Hidden smDown implementation="css">
            <StyledDrawerInner
              variant="permanent"
              open
            >
              {drawer}
            </StyledDrawerInner>
          </Hidden>
        </StyledDrawer>
      </StyledAdminNav>
    );
  }
}

export default connect()(AdminNav);
