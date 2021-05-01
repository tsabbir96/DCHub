import { Grid } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import React from "react";
import BlogItem from "./BlogItem";
import BlogItemFeatured from "./BlogItemFeatured";
import PeopleChoices from "./PeopleChoices";

export default function BlogCategory() {
  return (
    <div>
      <Grid container>
        <Grid container item xs={8}>
          <BlogItemFeatured />
        </Grid>
        <Grid container item xs={4}>
          <PeopleChoices />
        </Grid>
      </Grid>
      <Grid container>
        <Grid container item xs={4}>
          <BlogItem />
        </Grid>
        <Grid container item xs={4}>
          <BlogItem />
        </Grid>
        <Grid container item xs={4}>
          <BlogItem />
        </Grid>
        <Grid container item xs={4}>
          <BlogItem />
        </Grid>
        <Grid container item xs={4}>
          <BlogItem />
        </Grid>
        <Grid container item xs={4}>
          <BlogItem />
        </Grid>


        <Pagination count={10} variant="outlined" color="primary" />

      </Grid>
    </div>
  );
}
