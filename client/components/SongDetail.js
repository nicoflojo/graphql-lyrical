import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import fetchSongs from '../queries/fetchSong';

class SongDetail extends Component {
  render() {
    const { song } = this.props.data;

    if (!song) { return <div>Loading...</div>; }

    return (
      <div>
        <h3>
          {song.title}
        </h3>
      </div>
    );
  }
}

// use this pattern to fetch particular record 

export default graphql(fetchSongs, {
  options: (props) => { return { variables: { id: props.params.id } } }
})(SongDetail);