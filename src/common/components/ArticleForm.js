import React from 'react';
import styled from 'styled-components';
import { Formik, Field, Form } from 'formik';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import { TextField } from 'formik-material-ui';

const StyledContentFormGrid = styled(Grid)`
  color: #111;
  padding: 4rem;
  width: 100%;

  *>* {
    width: 100%;
  }

  input[type="submit"] {
    color: #f00;
  }
`;

const StyledGridList = styled(GridList)`
  flex-wrap: nowrap;
  justify-content: space-around;
  margin: 2em auto;
  overflow: scroll;
  transform: translateZ(0);
  width: 100%;
`;

const StyledGridListTile = styled(GridListTile)`
  height: 100%;
  width: auto;
`;

const GridItem = props =>
  <Grid item {...props} />;

const StyledGridItem = styled(GridItem)`
  max-width: 640px;
  width: 100%;
`;

const ArticleForm = ({article}) => {
  const leadImage = article && article.photos && article.photos.length
    ? article.photos[0]
    : null;

  return (
    <Formik
      initialValues={article}
      onSubmit={(values, actions) => {
        console.log(`Values: `, values);
        console.log(`Actions: `, actions);
      }}
      render={({
        errors,
        status,
        touched,
        isSubmitting
      }) => (
        <StyledContentFormGrid
          alignContent="flex-start"
          alignItems="center"
          component={Form}
          container
          direction="column"
          spacing={32}
        >
          <h2>Edit Article</h2>
          { leadImage &&
              <StyledGridList
                cellHeight={160}
              >
                <StyledGridListTile>
                  <img src={leadImage.url} alt={leadImage.description} />
                </StyledGridListTile>
              </StyledGridList>
          }

          <StyledGridItem>
            <Field type="text" name="title" label="Title" component={TextField} />
          </StyledGridItem>

          <StyledGridItem>
            <Field type="email" name="creatorEmail" label="Email" component={TextField} />
          </StyledGridItem>

          <StyledGridItem>
            <Field type="text" name="content" label="Body" multiline rows="20" component={TextField} />
          </StyledGridItem>

          <StyledGridItem>
            <Field type="date" name="date" label="Date" component={TextField} />
          </StyledGridItem>

          <Button color="primary" type="submit" variant="contained" size="large" disabled={isSubmitting}>
            Save
          </Button>
        </StyledContentFormGrid>
      )}
    />
  );
}

export default ArticleForm;
