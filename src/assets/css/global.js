'use strict';

var React = require('react-native');

var { StyleSheet, Dimensions } = React;

//dimensions
let dimensions = Dimensions.get("window");
let imageHeight = Math.round((dimensions.width * 9) / 16);
let width = dimensions.width;
let height = dimensions.height;

module.exports = StyleSheet.create({

  // login
  login: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#1c404a',
    height: height
  },
  title: {
    marginTop: 50,
    fontSize: 28,
    color: 'white',
    marginBottom: 20,
    fontWeight: 'bold'
  },
  logo: {
    marginTop: 30,
    marginBottom: 30,
    height:250,
    width: 220,
    alignItems: 'center'
  },
  subtitle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
  },
  text_label: {
    color: 'white',
    marginBottom: 10
  },
  input: {
    backgroundColor: 'white',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 15,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 5,
    marginBottom: 20,
    fontSize: 16,
    borderRadius: 0,
    width: width-40
  },
  btn_login: {
    backgroundColor: '#1c404a',
    paddingTop: 8,
    paddingBottom: 8,
    borderWidth: 1,
    borderColor: 'white',
    marginBottom: 5,
    marginTop: 25,
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    width: width-100,
    marginBottom: 20
  },
  copyright: {
    color: 'white',
    marginTop: 45,
    marginBottom: 30,
    fontSize: 10
  },

  // profile
  container: {
    marginTop: 30,
    marginBottom: 10,
    alignItems: 'center',
    backgroundColor: '#1c404a'
  },
  avatar: {
    marginTop: 20,
    marginBottom: 10,
    height:60,
    width: 60,
    alignItems: 'center'
  },
  type_user: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 20
  },
  cellphone: {
    color: 'white',
    fontSize: 12,
    marginBottom: 20
  },
  btn: {
    backgroundColor: '#1c404a',
    paddingTop: 8,
    paddingBottom: 8,
    borderWidth: 1,
    borderColor: 'white',
    marginBottom: 5,
    marginTop: 15,
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    width: '50%',
    marginLeft: '25%',
    marginBottom: 10
  },
  list_price: {
    padding: 10,
    margin: 10,
    width: Dimensions.get('window').width-20,
    borderColor: '#0b4c5f',
    borderWidth: 2,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  promotion: {
    backgroundColor: '#0b4c5f',
    borderColor: '#fff',
    borderWidth: 2,
    padding: 10,
    width: '100%'
  },
  text_promotion: {
    color: 'white',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  image_promotion:{
    height: imageHeight,
    width: width-20
  }
});
