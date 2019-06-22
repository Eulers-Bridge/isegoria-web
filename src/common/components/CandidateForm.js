// ##TODO## :: Generalize this slightly and use to generate for other types
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import utils from '../../utils';

import * as ElectionActions from '../actions/elections'

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

const CandidateFormValidationSchema =
  Yup.object().shape({
    content: Yup.string()
      .required('Required'),
    creatorEmail: Yup.string()
      .email('Invalid email')
      .required('Required'),
    date: Yup.date()
      .required('Required'),
    title: Yup.string()
      .required('Required')
  })

const CandidateForm = ({candidate, auth, dispatch, enqueueSnackbar}) => {
  const cleanCandidate = {...candidate}
  if (typeof cleanCandidate.date === 'number') {
    cleanCandidate.date = utils.formatDateToYMD(cleanCandidate.date)
  }

  const leadImage = candidate && candidate.photos && candidate.photos.length
    ? candidate.photos[0]
    : null;

  return (
    <Formik
      initialValues={cleanCandidate}
      onSubmit={(values, actions) => {
        dispatch(ElectionActions.postCandidate(result => {
          if (result.status < 200 || result.status >= 300) {
            enqueueSnackbar(
              `Error: ${result.message || 'Unable to save candidate'}`, {
                variant: 'error'
              }
            )
          } else {
            enqueueSnackbar('Candidate saved!', { variant: 'success'});
            setTimeout(() => window.location.href = '/admin/candidates', 2000);
          }
          actions.setSubmitting(false)
        }, Object.assign({}, auth, values)))
      }}
      validationSchema={CandidateFormValidationSchema}
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
          <h2>{cleanCandidate.candidateId ? 'Edit' : 'Create'} Candidate</h2>
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
              label="Title"
              name="title"
              type="text"

              component={TextField}
            />
          </StyledGridItem>

          <StyledGridItem>
            <Field
              label="Email"
              name="creatorEmail"
              type="email"

              component={TextField}
            />
          </StyledGridItem>

          <StyledGridItem>
            <Field
              label="Body"
              name="content"
              type="text"

              component={TextField}
              multiline
              rows="16"
            />
          </StyledGridItem>

          <StyledGridItem>
            <Field
              label="Date"
              name="date"
              type="date"

              component={TextField}
              InputLabelProps={{
                shrink: true
              }}
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
  connect(mapStateToProps)(CandidateForm)
);
