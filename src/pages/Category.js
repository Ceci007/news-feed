import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Skeleton from "react-loading-skeleton";

import Card from "../components/Card";
import api from "../utils/api";
import { categoriesId } from "../utils/constants";

class Category extends Component {
  state = {
    isLoading: false,
    categoriesNews: []
  };

  componentDidMount() {
    console.log("monte la pagina Category");
    this.fetchCategoriesNews();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.category !== this.props.match.params.category) {
      this.fetchCategoriesNews();
    }
  }

  componentWillUnmount() {
    console.log("desmonte la pagina Category");
  }

  async fetchCategoriesNews() {
    const { category } = this.props.match.params;
    const categoryId = categoriesId[category].id;

    this.setState({ isLoading: true });

    const categoriesNews = await api.category(categoryId);
    this.setState({
      categoriesNews: categoriesNews.slice(0, 10),
      isLoading: false
    });
  }

  render() {
    const { isLoading, categoriesNews } = this.state;

    return (
      <div style={{ marginTop: "10px" }}>
        <Grid
          container
          spacing={3}
          align="center"
          style={{ marginTop: "10px" }}
        >
          {isLoading &&
            Array.from({ length: 10 }, (_, index) => (
              <Grid item xs={12} lg={4} key={index}>
                <Skeleton width={282} height={337} />
              </Grid>
            ))}

          {categoriesNews.length > 0 &&
            categoriesNews.map(latestNew => (
              <Grid item xs={12} lg={4} key={latestNew.news_id}>
                <Card data={latestNew} />
              </Grid>
            ))}
        </Grid>
      </div>
    );
  }
}

export default Category;
