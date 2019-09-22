import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import fetchSongs from '../queries/fetchSong';
import LyricCreate from './LyricCreate';

class SongDetail extends Component {
  render() {
    const { song } = this.props.data;

    if (!song) { return <div>Loading...</div>; }

    return (
      <div>
        <Link to="/">Back</Link>
        <h3>

          {song.title}
        </h3>
        <LyricCreate />
      </div>
    );
  }
}

// use this pattern to fetch particular record 

export default graphql(fetchSongs, {
  options: (props) => { return { variables: { id: props.params.id } } }
})(SongDetail);