import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView,StatusBar, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#4F485A"
        />
      <View style={styles.header}>
        <Image 
        style={styles.headerImage}
        source={
          require('./assets/icons/CinemaIcon_white.png')
        }/>
        <Text style={styles.title}>Cinema History</Text>
      </View>
      <View style={styles.timelineContainer}>
      <View style={styles.timeline}></View>
      <View style={styles.guide}>

        <TouchableOpacity style={styles.card}>
          <Image 
          style={styles.cardImage}
          source={
            require('./assets/cardImages/lumiere_brothers.png')
          }/>
          <View style={styles.firstPin}/>
          <Text style={styles.cardTitle}>The Birth</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Image 
          style={styles.cardImage}
          source={
            require('./assets/cardImages/melies_moon.png')
          }/>
          <View style={styles.pin}/>
          <Text style={styles.cardTitle}>The Pioneers</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Image 
          style={styles.cardImage}
          source={
            require('./assets/cardImages/cabiria.png')
          }/>
          <View style={styles.pin}/>
          <Text style={styles.cardTitle}>The First Epics</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Image 
          style={styles.cardImage}
          source={
            require('./assets/cardImages/muses_eyes.png')
          }/>
          <View style={styles.pin}/>
          <Text style={styles.cardTitle}>Muses of Silent Cinema</Text>
        </TouchableOpacity>

        </View>
      </View>
      
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  timeline:{
    width:'2%',
    marginTop:55.5,
    backgroundColor:'#551AAD'
  },
  firstPin:{
    marginLeft:-310,
    marginTop:-35,
    height:34,
    width:34,
    backgroundColor:'#A770FA',
    borderRadius:17,
    borderWidth:5,
    borderColor:'#551AAD',
  },
  pin:{
    marginLeft:-310,
    marginTop:-25,
    height:20,
    width:20,
    backgroundColor:'#A770FA',
    borderRadius:10,
    borderWidth:5,
    borderColor:'#551AAD',
  },
  timelineContainer:{
    padding:25,
    flex:1,
    flexDirection:'row'
  },
  cardTitle:{
    color: '#E3E3E3',
    fontSize:30,
    fontWeight:'700',
    marginTop:-20,
    textAlign:'center'
  },
  cardImage:{
    width:210,
    height:73
  },
  card:{
    marginBottom:10,
    borderWidth:2,
    borderColor:'#4F485A',
    borderRadius:10,
    padding:10,
    //height:111,
    width:237,
    backgroundColor:'#251D33',
    flex:1,
    alignItems:'center',
  },
  guide:{
    //height:80,
    flex:1,
    alignItems:'center',
    flexDirection:'column',
  }, 
  header:{
    flex:1,
    flexDirection:'row',
    marginTop:20
  },
  headerImage:{
    width:145,
    height:145
  },
  container: {
    flex:1,
    backgroundColor: '#06030C',
    width:'100%'
  },
  title:{
    color: '#FBFBFC',
    fontSize:50,
    flexWrap:'wrap',
    width:'50%',
    fontWeight:'700'
  },
  
});
