import React, {Component} from 'react';
import { ScrollView, Text, StyleSheet,ListView, View } from 'react-native';
import { connect } from 'react-redux';
import Row from './row.js';
import Header from './header.js';
import Footer from './Footer.js';
import SectionHeader from './SectionHeader.js';
import data from '../data.js';

class First extends Component {
 constructor(props) {
    super(props)

    const getSectionData = (dataBlob, sectionId) => dataBlob[sectionId];
    const getRowData = (dataBlob, sectionId, rowId) => dataBlob[`${rowId}`];

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged : (s1, s2) => s1 !== s2,
      getSectionData,
      getRowData,
    });

    const { dataBlob, sectionIds, rowIds } = this.formatData(data);

    this.state = {
      dataSource: ds.cloneWithRowsAndSections(dataBlob, sectionIds, rowIds)
    }
  }

  formatData(){
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const dataBlob = {};
    const sectionIds = [];
    const rowIds = [];

    for (let sectionId = 0; sectionId < alphabet.length; sectionId++) {

      const currentChar = alphabet[sectionId];
      const users = data.filter((user) => user.name.first.toUpperCase().indexOf(currentChar) === 0);
      if (users.length > 0) {
        sectionIds.push(sectionId);
        dataBlob[sectionId] = { character: currentChar };
        rowIds.push([]);
        for (let i = 0; i < users.length; i++) {

          const rowId = `${sectionId}:${i}`;
          rowIds[rowIds.length - 1].push(rowId);
          dataBlob[rowId] = users[i];
        }
      }
    }
    console.log('dataBlob:', dataBlob);
    console.log('sectionIds:', sectionIds);
    console.log('rowIds:', rowIds);
    return { dataBlob, sectionIds, rowIds };
  }
  render() {
    return (
      <View style={styles.container}>
        <ListView
          style={styles.container}
          dataSource={this.state.dataSource}
          renderRow={(data) => <Row {...data} />}
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
          renderHeader={() => <Header />}
          renderFooter={() => <Footer />}
          renderSectionHeader={(sectionData) => <SectionHeader {...sectionData} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
});


const mapStateToProps = (state) => {
  const { user } = state.auth;

  return { user };
};

export default connect(mapStateToProps)( First );