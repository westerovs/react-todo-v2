import React from 'react';

export default class SearchPanel extends React.Component {
  
  render() {
    const inputText = 'search...'
    const styles = {
      fontSize: '16px',
      padding: '10px',
    }
  
    return (
      <input style={styles} placeholder={ inputText }/>
    )
  }

}
