// ##TODO## :: Dedup with ArticleForm
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Formik, Field, FieldArray, Form } from 'formik';
import * as Yup from 'yup';
import utils from '../../utils';

import * as ContentActions from '../actions/content'

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';

import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import DeleteIcon from '@material-ui/icons/Delete';

import { CheckboxWithLabel, TextField } from 'formik-material-ui';
import { withSnackbar} from 'notistack';

const StyledContentFormGrid = styled(Grid)`
  color: #111;
  padding: 4rem;
  width: 100%;
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

  &:last-child {
    margin-bottom: 32px;
  }
`;

// ##TODO## :: Fix client/index jss config
const StyledListItemAvatar = styled(ListItemAvatar)`
  && {
    border-radius: 4px;
    height: 80px;
    width: 80px;
  }
`;
const StyledListItemIcon = styled(ListItemIcon)`
  && {
    align-items: center;
    height: 80px;
    justify-content: center;
    width: 80px;

    svg {
      height: 75%;
      width: 75%;
    }
  }
`;

const PollFormValidationSchema =
  Yup.object().shape({
    question: Yup.string()
      .required('Required'),
    creatorEmail: Yup.string()
      .email('Invalid email')
      .required('Required'),
    start: Yup.date()
      .required('Required')
  })

const PollForm = ({auth, dispatch, enqueueSnackbar, poll}) => {
  const cleanPoll = {...poll}
  if (typeof cleanPoll.start === 'number') {
    cleanPoll.start = utils.formatDateToYMD(cleanPoll.start)
  }

  const leadImage = poll && poll.photos && poll.photos.length
    ? poll.photos[0]
    : null;

  return (
    <Formik
      initialValues={cleanPoll}
      onSubmit={(values, actions) => {
        return dispatch(ContentActions.postPoll(result => {
          if (result.status < 200 || result.status >= 300) {
            enqueueSnackbar(
              `Error: ${result.message || 'Unable to save content'}`, {
                variant: 'error'
              }
            )
          } else {
            enqueueSnackbar('Poll saved!', { variant: 'success'});
            setTimeout(() => window.location.href = '/admin/polls', 2000);
          }
          actions.setSubmitting(false)
        }, Object.assign({}, auth, values)))
      }}
      validationSchema={PollFormValidationSchema}
      render={({
        isSubmitting,
        values
      }) => (
        <StyledContentFormGrid
          alignContent="flex-start"
          alignItems="center"
          component={Form}
          container
          direction="column"
          spacing={4}
        >
          <h2>{cleanPoll.nodeId ? 'Edit' : 'Create'} Poll</h2>
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
              label="Question"
              name="question"
              type="text"

              component={TextField}
              fullWidth
            />
          </StyledGridItem>

          <StyledGridItem>
            <Field
              label="Email"
              name="creatorEmail"
              type="text"

              component={TextField}
              fullWidth
            />
          </StyledGridItem>

          <StyledGridItem>
            <Field
              Label={{label: 'Closed to further submissions'}}
              name="closed"

              component={CheckboxWithLabel}
              fullWidth
            />
          </StyledGridItem>

          <StyledGridItem>
            <Field
              label="Start Date"
              name="start"
              type="date"

              component={TextField}
              fullWidth
              InputLabelProps={{
                shrink: true
              }}
            />
          </StyledGridItem>

          <FieldArray
            name="pollOptions"
            render={arrayHelpers => (
              <StyledGridItem>
                <h2>
                  Answers
                </h2>
                <List>
                { values.pollOptions && values.pollOptions.map((pollOption, i) => {
                  return ([
                    i > 0
                      ? <Divider key={`div-${i}`} />
                      : null
                    ,
                    <ListSubheader
                      key={`sh-${i}`}
                    >
                      Option {i+1}
                    </ListSubheader>,
                    <ListItem
                      alignItems="flex-start"
                      key={`li-${i}`}
                    >
                      { pollOption.photo
                        ? <StyledListItemAvatar>
                            <Avatar
                              alt={pollOption.photo.title}
                              src={pollOption.photo.url}
                            />
                          </StyledListItemAvatar>
                        : <StyledListItemIcon>
                            <AddAPhotoIcon />
                          </StyledListItemIcon>
                      }
                      <ListItemText>
                        <Grid container spacing={16}>
                          <StyledGridItem>
                            <Field
                              label="Answer"
                              name={`pollOptions[${i}].txt`}

                              component={TextField}
                              fullWidth
                              InputLabelProps={{
                                shrink: true
                              }}
                            />
                          </StyledGridItem>

                          { pollOption.photo &&
                            <StyledGridItem>
                              <Field
                                label="Image Title"
                                name={`pollOptions[${i}].photo.title`}

                                component={TextField}
                                fullWidth
                                InputLabelProps={{
                                  shrink: true
                                }}
                              />
                            </StyledGridItem>
                          }

                          <StyledGridItem>
                            <Field
                              label="Votes"
                              name={`pollOptions[${i}].numOfVoters`}

                              component={TextField}
                              disabled
                              fullWidth
                              InputLabelProps={{
                                shrink: true
                              }}
                            />
                          </StyledGridItem>
                        </Grid>
                      </ListItemText>

                      <ListItemSecondaryAction>
                        <IconButton
                          aria-label="Delete"
                          onClick={() => arrayHelpers.remove(i)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  ])
                })}
                </List>

                <Button
                  color="secondary"
                  disabled={isSubmitting}
                  onClick={() => arrayHelpers.push({})}
                  size="large"
                  variant="contained"
                >
                  Add an Answer
                </Button>
              </StyledGridItem>
            )}
          />

          <StyledGridItem>
            <Button
              color="primary"
              disabled={isSubmitting}
              size="large"
              type="submit"
              variant="contained"
            >
              Save
            </Button>
          </StyledGridItem>
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
  connect(mapStateToProps)(PollForm)
);
