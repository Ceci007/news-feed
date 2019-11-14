import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { categoriesId } from "../../utils/constants";

const categoriesNames = Object.keys(categoriesId);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
}));

class Nav extends Component {
  state = {
    value: 0
  };

  handleNavigate = index => {
    this.setState({ value: index });

    const { history } = this.props;

    const category = categoriesNames[index];
    history.push(category === "home" ? "/" : `/categorias/${category}`);
  };

  render() {
    const { value } = this.state;

    return (
      <div>
        <Tabs
          value={value}
          textColor="secondary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          indicatorColor="secondary"
          onChange={(_event, index) => this.handleNavigate(index)}
        >
          {categoriesNames.map(category => (
            <Tab label={category} key={category} />
          ))}
        </Tabs>
      </div>
    );
  }
}

export default withRouter(Nav);
