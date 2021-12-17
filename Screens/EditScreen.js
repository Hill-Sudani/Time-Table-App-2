import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import firebase from 'firebase';
import db from '../Config';

export default class EditScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      Msub1: '',
      Msub2: '',
      Msub3: '',
      Msub4: '',
      Msub5: '',
      Msub6: '',
      TUsub1: '',
      TUsub2: '',
      TUsub3: '',
      TUsub4: '',
      TUsub5: '',
      TUsub6: '',
      Wsub1: '',
      Wsub2: '',
      Wsub3: '',
      Wsub4: '',
      Wsub5: '',
      Wsub6: '',
      THsub1: '',
      THsub2: '',
      THsub3: '',
      THsub4: '',
      THsub5: '',
      THsub6: '',
      Fsub1: '',
      Fsub2: '',
      Fsub3: '',
      Fsub4: '',
      Fsub5: '',
      Fsub6: '',
      Ssub1: '',
      Ssub2: '',
      Ssub3: '',
      Ssub4: '',
      Ssub5: '',
      Ssub6: '',
    };
  }

  updateSubjects = () => {
    db.collection('Mon').add({
      Msub1: this.state.Msub1,
      Msub2: this.state.Msub2,
      Msub3: this.state.Msub3,
      Msub4: this.state.Msub4,
      Msub5: this.state.Msub5,
      Msub6: this.state.Msub6,
      TUsub1: this.state.TUsub1,
      TUsub2: this.state.TUsub2,
      TUsub3: this.state.TUsub3,
      TUsub4: this.state.TUsub4,
      TUsub5: this.state.TUsub5,
      TUsub6: this.state.TUsub6,
      Wsub1: this.state.Wsub1,
      Wsub2: this.state.Wsub2,
      Wsub3: this.state.Wsub3,
      Wsub4: this.state.Wsub4,
      Wsub5: this.state.Wsub5,
      Wsub6: this.state.Wsub6,
      THsub1: this.state.THsub1,
      THsub2: this.state.THsub2,
      THsub3: this.state.THsub3,
      THsub4: this.state.THsub4,
      THsub5: this.state.THsub5,
      THsub6: this.state.THsub6,
      Fsub1: this.state.Fsub1,
      Fsub2: this.state.Fsub2,
      Fsub3: this.state.Fsub3,
      Fsub4: this.state.Fsub4,
      Fsub5: this.state.Fsub5,
      Fsub6: this.state.Fsub6,
      Ssub1: this.state.Ssub1,
      Ssub2: this.state.Ssub2,
      Ssub3: this.state.Ssub3,
      Ssub4: this.state.Ssub4,
      Ssub5: this.state.Ssub5,
      Ssub6: this.state.Ssub6,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}> Mon | Tue | Wed | Thu | Fri  | Sat</Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <TextInput
            placeholder="sub1"
            onChangeText={(text) => {
              this.setState({
                Msub1: text,
              });
            }}
            value={this.state.Msub1}
            style={styles.formTextInput}
          />
          <TextInput
            placeholder="sub1"
            onChangeText={(text) => {
              this.setState({
                TUsub1: text,
              });
            }}
            value={this.state.TUsub1}
            style={styles.formTextInput}
          />
          <TextInput
            placeholder="sub1"
            onChangeText={(text) => {
              this.setState({
                Wsub1: text,
              });
            }}
            value={this.state.Wsub1}
            style={styles.formTextInput}
          />
          <TextInput
            placeholder="sub1"
            onChangeText={(text) => {
              this.setState({
                THsub1: text,
              });
            }}
            value={this.state.THsub1}
            style={styles.formTextInput}
          />
          <TextInput
            placeholder="sub1"
            onChangeText={(text) => {
              this.setState({
                Fsub1: text,
              });
            }}
            value={this.state.Fsub1}
            style={styles.formTextInput}
          />
          <TextInput
            placeholder="sub1"
            onChangeText={(text) => {
              this.setState({
                Ssub1: text,
              });
            }}
            value={this.state.Ssub1}
            style={styles.formTextInput}
          />
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <TextInput
            placeholder="sub2"
            onChangeText={(text) => {
              this.setState({
                Msub2: text,
              });
            }}
            value={this.state.Msub2}
            style={styles.formTextInput}
          />
          <TextInput
            placeholder="sub2"
            onChangeText={(text) => {
              this.setState({
                TUsub2: text,
              });
            }}
            value={this.state.TUsub2}
            style={styles.formTextInput}
          />
          <TextInput
            placeholder="sub2"
            onChangeText={(text) => {
              this.setState({
                Wsub2: text,
              });
            }}
            value={this.state.Wsub2}
            style={styles.formTextInput}
          />
          <TextInput
            placeholder="sub2"
            onChangeText={(text) => {
              this.setState({
                THsub2: text,
              });
            }}
            value={this.state.THsub2}
            style={styles.formTextInput}
          />
          <TextInput
            placeholder="sub2"
            onChangeText={(text) => {
              this.setState({
                Fsub2: text,
              });
            }}
            value={this.state.Fsub2}
            style={styles.formTextInput}
          />
          <TextInput
            placeholder="sub2"
            onChangeText={(text) => {
              this.setState({
                Ssub2: text,
              });
            }}
            value={this.state.Ssub2}
            style={styles.formTextInput}
          />
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <TextInput
            placeholder="sub3"
            onChangeText={(text) => {
              this.setState({
                Msub3: text,
              });
            }}
            value={this.state.Msub3}
            style={styles.formTextInput}
          />
          <TextInput
            placeholder="sub3"
            onChangeText={(text) => {
              this.setState({
                TUsub3: text,
              });
            }}
            value={this.state.TUsub3}
            style={styles.formTextInput}
          />
          <TextInput
            placeholder="sub3"
            onChangeText={(text) => {
              this.setState({
                Wsub3: text,
              });
            }}
            value={this.state.Wsub3}
            style={styles.formTextInput}
          />
          <TextInput
            placeholder="sub3"
            onChangeText={(text) => {
              this.setState({
                THsub3: text,
              });
            }}
            value={this.state.THsub3}
            style={styles.formTextInput}
          />
          <TextInput
            placeholder="sub3"
            onChangeText={(text) => {
              this.setState({
                Fsub3: text,
              });
            }}
            value={this.state.Fsub3}
            style={styles.formTextInput}
          />
          <TextInput
            placeholder="sub3"
            onChangeText={(text) => {
              this.setState({
                Ssub3: text,
              });
            }}
            value={this.state.Ssub3}
            style={styles.formTextInput}
          />
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <TextInput
            placeholder="sub4"
            onChangeText={(text) => {
              this.setState({
                Msub4: text,
              });
            }}
            value={this.state.Msub4}
            style={styles.formTextInput}
          />
          <TextInput
            placeholder="sub4"
            onChangeText={(text) => {
              this.setState({
                TUsub4: text,
              });
            }}
            value={this.state.TUsub4}
            style={styles.formTextInput}
          />
          <TextInput
            placeholder="sub4"
            onChangeText={(text) => {
              this.setState({
                Wsub4: text,
              });
            }}
            value={this.state.Wsub4}
            style={styles.formTextInput}
          />
          <TextInput
            placeholder="sub4"
            onChangeText={(text) => {
              this.setState({
                THsub4: text,
              });
            }}
            value={this.state.THsub4}
            style={styles.formTextInput}
          />
          <TextInput
            placeholder="sub4"
            onChangeText={(text) => {
              this.setState({
                Fsub4: text,
              });
            }}
            value={this.state.Fsub4}
            style={styles.formTextInput}
          />
          <TextInput
            placeholder="sub4"
            onChangeText={(text) => {
              this.setState({
                Ssub4: text,
              });
            }}
            value={this.state.Ssub4}
            style={styles.formTextInput}
          />
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <TextInput
            placeholder="sub5"
            onChangeText={(text) => {
              this.setState({
                Msub5: text,
              });
            }}
            value={this.state.Msub5}
            style={styles.formTextInput}
          />
          <TextInput
            placeholder="sub5"
            onChangeText={(text) => {
              this.setState({
                TUsub5: text,
              });
            }}
            value={this.state.TUsub5}
            style={styles.formTextInput}
          />
          <TextInput
            placeholder="sub5"
            onChangeText={(text) => {
              this.setState({
                Wsub5: text,
              });
            }}
            value={this.state.Wsub5}
            style={styles.formTextInput}
          />
          <TextInput
            placeholder="sub5"
            onChangeText={(text) => {
              this.setState({
                THsub5: text,
              });
            }}
            value={this.state.THsub5}
            style={styles.formTextInput}
          />
          <TextInput
            placeholder="sub5"
            onChangeText={(text) => {
              this.setState({
                Fsub5: text,
              });
            }}
            value={this.state.Fsub5}
            style={styles.formTextInput}
          />
          <TextInput
            placeholder="sub5"
            onChangeText={(text) => {
              this.setState({
                Ssub5: text,
              });
            }}
            value={this.state.Ssub5}
            style={styles.formTextInput}
          />
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <TextInput
            placeholder="sub6"
            onChangeText={(text) => {
              this.setState({
                Msub6: text,
              });
            }}
            value={this.state.Msub6}
            style={styles.formTextInput}
          />
          <TextInput
            placeholder="sub6"
            onChangeText={(text) => {
              this.setState({
                TUsub6: text,
              });
            }}
            value={this.state.TUsub6}
            style={styles.formTextInput}
          />
          <TextInput
            placeholder="sub6"
            onChangeText={(text) => {
              this.setState({
                Wsub6: text,
              });
            }}
            value={this.state.Wsub6}
            style={styles.formTextInput}
          />
          <TextInput
            placeholder="sub6"
            onChangeText={(text) => {
              this.setState({
                THsub6: text,
              });
            }}
            value={this.state.THsub6}
            style={styles.formTextInput}
          />
          <TextInput
            placeholder="sub6"
            onChangeText={(text) => {
              this.setState({
                Fsub6: text,
              });
            }}
            value={this.state.Fsub6}
            style={styles.formTextInput}
          />
          <TextInput
            placeholder="sub6"
            onChangeText={(text) => {
              this.setState({
                Ssub6: text,
              });
            }}
            value={this.state.Ssub6}
            style={styles.formTextInput}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.button}>
            <Text>SAVE</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8BE85',
  },
  title: {
    fontSize: 23,
    fontWeight: '300',
    paddingBottom: 30,
    color: 'black',
  },
  formTextInput: {
    width: 35,
    height: 20,
    borderColor: '#000000',
    borderRadius: 1,
    borderWidth: 1,
    marginLeft: 10,
    marginRight: 10,
  },

  button: {
    width: 100,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#ff9800',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16,
    marginLeft: '35%',
  },
});
