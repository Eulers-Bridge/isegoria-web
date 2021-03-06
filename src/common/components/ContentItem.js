import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Divider from '@material-ui/core/Divider';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelActions   from '@material-ui/core/ExpansionPanelActions';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import HowToVoteIcon from '@material-ui/icons/HowToVote';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MailIcon from '@material-ui/icons/Mail';

// PositionRenderer
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
// + TicketRenderer
import CardMedia from '@material-ui/core/CardMedia';

import utils from '../../utils';

const StyledContentItem = styled.div`
  align-items: center;
  border-bottom: 1px solid #ccc;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  /* justify-content: space-between; */
  margin: 1rem;
  padding-bottom: 1rem;
  /* width: 100%; */

  &:last-of-type {
    border-bottom: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;

const ContentItemImage = styled.div`
  max-width: 240px;
  padding: 1rem;

  img {
    border-radius: 12px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
    width: 100%;
  }
`;

const ContentItemDetail = styled.div`
  h4 {
    margin-bottom: 0.25rem;
  }

  em {
    color: #aaa;
    display: block;
    font-style: normal;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
  }
`;

const ContentItemPollOption = styled.li`
  display: inline-block;
  list-style: none;
  margin-right: 2em;
  text-align: center;

  img {
    display: block;
    margin: 1em;
    max-width: 120px;
  }
`;

const ElectionDetails = styled(Grid)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: start;

  h6 {
    margin: 1rem auto;
  }

  ul {
    margin: 0;
  }
`;

const ElectionStyledPanel = styled(ExpansionPanel)`
  width: 100%;
`;

const StyledCreator = styled.strong`
  color: #aaa;
  font-size: 1rem;
  font-weight: bold;

  a {
    color: #666;
  }
`;

const PollOption = styled.p`
  && {
    margin-bottom: 0.5rem;
  }
`;

const VoteCount = styled.p`
  opacity: 0.5;
`;

const TicketCardMedia = styled(CardMedia)`
    height: 0;
    padding-top: 56.25%;
`;

const CandidateItem = props => {
  const { item } = props;

  return (
    <Card>
      <CardHeader
        title={ `${item.givenName || ''} ${ item.familyName || ''}` }
        subheader={ item.email }
      />

      <CardContent>
        <Typography element="h3">{ `{{position.title}}` }</Typography>
        <Typography>{ item.information }</Typography>
        <Typography>{ item.policyStatement }</Typography>
      </CardContent>

      <Divider />

      <CardActions>
        <Button size="small">
          <MailIcon />
        </Button>
        <Button size="small">
          <EditIcon />
        </Button>
        <Button size="small">
          <DeleteIcon />
        </Button>
      </CardActions>
    </Card>
  )
}

const DefaultItem = props => {
  const {
    item, itemLink, itemDate,
    creatorName, creatorEmail, previewAlt, previewPhoto,
  } = props;

  return (
    <React.Fragment>
      {
        previewPhoto &&
          <ContentItemImage>
            <Link to={itemLink}>
              <img
                alt={previewAlt}
                src={previewPhoto} />
            </Link>
          </ContentItemImage>
      }
      <ContentItemDetail>
        <h4>
          <Link to={itemLink}>
            {item.title || item.name || item.question}
          </Link>
        </h4>
        {
          itemDate &&
            <em>{utils.formatDate(item.date || item.created || item.start)}</em>
        }
        {/* {
          // ##TODO## :: "getChildContent" per type
          item.content &&
            <p>{utils.truncate(item.content, 120)}</p>
        } */}
        {
          // ##TODON'T##
          item.pollOptions &&
            <ul>
              {item.pollOptions.map(pollOption =>
                <ContentItemPollOption key={`ci-poll-${item.nodeId}-po-${pollOption.id}`}>
                  {pollOption.photo &&
                    <img
                      alt={pollOption.photo.description}
                      src={pollOption.photo.url}
                      title={pollOption.photo.title}
                      width="120" />
                  }
                  <PollOption>{pollOption.txt}</PollOption>
                  <VoteCount>{pollOption.numOfVoters} votes</VoteCount>
                </ContentItemPollOption>
              )}
            </ul>
        }
        {
          creatorName &&
            <StyledCreator>Added by <a href={`mailto:${creatorEmail}`}>{creatorName}</a></StyledCreator>
        }
      </ContentItemDetail>
    </React.Fragment>
  )
}

const ElectionItem = props => {
  const { item, itemDate, itemLink } = props;

  return (
    <ElectionStyledPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Grid container direction="row">
          <Grid item xs={1}>
            <HowToVoteIcon />
          </Grid>
          <Grid item xs={11}>
            <h4>
              <Link to={itemLink}>
                {item.title || item.name || item.question}
              </Link>
            </h4>
            {
              itemDate &&
                <Typography>{utils.formatDate(item.date || item.created || item.start)}</Typography>
            }
          </Grid>
        </Grid>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Grid container spacing={16}>
          <ElectionDetails item xs>
            <Typography variant="h6">Candidates</Typography>
            {
              !item.candidates && <CircularProgress />
            }
            {
              item.candidates &&
              <ul>
                { item.candidates.map((candidate, i) =>
                  <li key={i}>{candidate.givenName} {candidate.familyName}</li>
                ) }
              </ul>
            }
          </ElectionDetails>
          <ElectionDetails item xs>
            <Typography variant="h6">Positions</Typography>
            {
              !item.positions && <span>–</span>
            }
            {
              item.positions &&
              <ul>
                { item.positions.map((position, i) =>
                  <li key={i}>{position.name}</li>
                ) }
              </ul>
            }
          </ElectionDetails>
          <ElectionDetails item xs>
            <Typography variant="h6">Tickets</Typography>
            {
              !item.tickets && <CircularProgress />
            }
            {
              item.tickets &&
                <ul>
                  { item.tickets.map((ticket, i) =>
                    <li key={i}>{ticket.name}</li>
                  ) }
                </ul>
            }
          </ElectionDetails>
        </Grid>
      </ExpansionPanelDetails>
      <Divider />
      <ExpansionPanelActions>
        <Button size="small">
          <EditIcon />
        </Button>
        <Button size="small">
          <DeleteIcon />
        </Button>
      </ExpansionPanelActions>
    </ElectionStyledPanel>
  );
}

const PositionItem = props => {
  const { item } = props;

  return (
    <Card>
      <CardHeader
        title={ item.name }
      />

      <CardContent>
        { item.description }
      </CardContent>

      <Divider />

      <CardActions>
        <Button size="small">
          <EditIcon />
        </Button>
        <Button size="small">
          <DeleteIcon />
        </Button>
      </CardActions>
    </Card>
  )
}

const TicketItem = props => {
  const { item } = props;

  return (
    <Card>
      <CardHeader
        title={ item.name }
      />

      <TicketCardMedia
        image={ item.logo }
        title={ item.name }
      />

      <CardContent>
        { item.information }
      </CardContent>

      <Divider />

      <CardActions>
        <Button size="small">
          <EditIcon />
        </Button>
        <Button size="small">
          <DeleteIcon />
        </Button>
      </CardActions>
    </Card>
  )
}


// ##TODO## :: Split to files
const RENDERERS = {
  candidate: CandidateItem,
  default: DefaultItem,
  election: ElectionItem,
  position: PositionItem,
  ticket: TicketItem
};

const ContentItem = props => {
  const { contentType, item } = props

  const {
    creatorEmail,
    creatorProfile = {},
    photos = []
  } = item
  const { givenName, familyName } = creatorProfile

  const idField = item[`${contentType}Id`]
    ? `${contentType}Id`
    : 'nodeId'

  const itemDate = item.date || item.created || item.start || false;
  const itemLink = `/admin/${contentType}s/${item[idField]}`

  const creatorName = givenName && familyName
    ? `${givenName} ${familyName}`
    : givenName
      ? `${givenName}`
      : ``;

  // ##TODO## :: Clean up, generally
  const photoObject = contentType === 'photo'
    ? item
    : photos && photos[0]
      ? photos[0]
      // ##TODO## :: Default / placeholder
      : {}

  const previewPhoto = photoObject.url
  const previewAlt = photoObject.description

  // ##TODO## :: Port / centralise remaining
  const Renderer = (contentType in RENDERERS)
    ? RENDERERS[contentType]
    : RENDERERS.default;

  return (
    <StyledContentItem>
      <Renderer
        creatorEmail={creatorEmail}
        creatorName={creatorName}
        item={item}
        itemDate={itemDate}
        itemLink={itemLink}
        previewAlt={previewAlt}
        previewPhoto={previewPhoto}
        />
    </StyledContentItem>
  );
}

export default ContentItem;
