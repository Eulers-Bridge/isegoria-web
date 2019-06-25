// ##TODO## :: Generalize this slightly and use to generate for other types
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import utils from '../../utils';

import * as ContentActions from '../actions/content'

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import { TextField } from 'formik-material-ui';
import { withSnackbar} from 'notistack';

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

const EventFormValidationSchema =
  Yup.object().shape({
    // content: Yup.string()
    //   .required('Required'),
    // creatorEmail: Yup.string()
    //   .email('Invalid email')
    //   .required('Required'),
    // date: Yup.date()
    //   .required('Required'),
    // title: Yup.string()
    //   .required('Required')
  })

const EventForm = ({event, auth, dispatch, enqueueSnackbar}) => {
  const cleanEvent = {...event}
  if (typeof cleanEvent.date === 'number') {
    cleanEvent.starts = utils.formatDateToYMD(cleanEvent.starts)
    cleanEvent.ends = utils.formatDateToYMD(cleanEvent.ends)
  }

  const leadImage = event && event.photos && event.photos.length
    ? event.photos[0]
    : null;

  return (
    <Formik
      initialValues={cleanEvent}
      onSubmit={(values, actions) => {
        dispatch(ContentActions.postEvent(result => {
          if (result.status < 200 || result.status >= 300) {
            enqueueSnackbar(
              `Error: ${result.message || 'Unable to save content'}`, {
                variant: 'error'
              }
            )
          } else {
            enqueueSnackbar('Event saved!', { variant: 'success'});
            setTimeout(() => window.location.href = '/admin/events', 2000);
          }
          actions.setSubmitting(false)
        }, Object.assign({}, auth, values)))
      }}
      validationSchema={EventFormValidationSchema}
      render={({
        isSubmitting
      }) => (
        <StyledContentFormGrid
          alignContent="flex-start"
          alignItems="center"
          component={Form}
          container
          direction="column"
          spacing={4}
        >
          <h2>{cleanEvent.articleId ? 'Edit' : 'Create'} Event</h2>
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
            <Field
              label="Name"
              name="name"
              type="text"

              component={TextField}
            />
          </StyledGridItem>

          <StyledGridItem>
            <Field
              label="Email"
              name="organizerEmail"
              type="email"

              component={TextField}
            />
          </StyledGridItem>

          <StyledGridItem>
            <Field
              label="Description"
              name="description"
              type="text"

              component={TextField}
              multiline
              rows="16"
            />
          </StyledGridItem>

          <StyledGridItem>
            <Field
              label="Start Date"
              name="starts"
              type="date"

              component={TextField}
              InputLabelProps={{
                shrink: true
              }}
            />

            <Field
              label="End Date"
              name="ends"
              type="date"

              component={TextField}
              InputLabelProps={{
                shrink: true
              }}
            />
          </StyledGridItem>

          <StyledGridItem>
            <Field
              label="Location"
              name="location"
              type="text"

              component={TextField}
            />
          </StyledGridItem>

          <Button
            color="primary"
            disabled={isSubmitting}
            size="large"
            type="submit"
            variant="contained"
          >
            Save
          </Button>
        </StyledContentFormGrid>
      )}
    />
  );
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}
export default withSnackbar(
  connect(mapStateToProps)(EventForm)
);
