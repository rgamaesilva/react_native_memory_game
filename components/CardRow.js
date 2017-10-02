import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../utils/colors';
import Card from './Card';

// import { getCardStyle } from '../../utils/helpers';
// import './card.css';

const CardRow = (props) => {
  // const { card, handleCardClick } = props;
  // const style = getCardStyle(card)
  return (
    <View style={styles.cardRow}>
      <Card word="test"/>
      <Card word="whaaaat"/>
      <Card word="thisssss"/>
    </View>

  );
};

const styles = StyleSheet.create({
  cardRow: {
    flex: 1,
    flexDirection: "row"
  }
})

export default CardRow;
