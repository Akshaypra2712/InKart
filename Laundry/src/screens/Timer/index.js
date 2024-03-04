import React, {useLayoutEffect, useState} from 'react';
import { View,Text, TouchableOpacity, FlatList,ScrollView } from 'react-native';
import colors from '../../common/colors';
import CommonHeader from '../../components/CommonHeader';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';



const Timer = () => {

    const [selectedOption, setSelectedOption] = useState('All');
    const [items, setItems] = useState([]);
    const navigation = useNavigation();

    useLayoutEffect(() => {
      getItems();
    }, [])

    const getItems = async () => {
      await firestore().collection('Washing').get().then(( snapshot) => {
          if(!snapshot.empty){
              const result =[];
              snapshot.docs.forEach(doc => {
                  if (doc.exists){
                      
                      result.push(doc.data());
                  }
              });
              setItems(result);
          }
      }).catch(err => {
          console.log(err);
      });
  };

  const filteredItems = selectedOption === 'All' ? items :
  selectedOption === 'Completed' ? items.filter(item => item.completed) :
  items.filter(item => !item.completed);

 
       
    return (
        
        <View style={{flex:1}}>
           <ScrollView style={{backgroundColor:colors.white_level_2}} nestedScrollEnabled showsVerticalScrollIndicator={false} >
            <CommonHeader title={"History"}/>
            
            <Text style={{ color:colors.black,
        fontSize:16,
        fontFamily:'Lato-Regular',
        marginTop: 5 ,}}>There are many variations of passages of Lorem Ipsum available,
        but the majority have suffered alteration in some form, by injected humour</Text>

        <View style={{
            
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 25, // Adjust padding as needed
            marginBottom: 10, 
            padding:20
        }}>


      <TouchableOpacity 
      onPress={() => {}}
      style={{
        height:30,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1, // Border for visualization, you can remove this
        borderColor: colors.primaryGreen, 
        backgroundColor:selectedOption === 'All' ? colors.primaryGreen :colors.white
      }}>
        <Text style={{color: selectedOption === 'All' ? colors.white : colors.primaryGreen,
        fontSize:16,
        fontFamily:'Lato-Regular',}}>All</Text>
      </TouchableOpacity>


      <TouchableOpacity 
      onPress={() => {}}
      style={{
         height:30,
        flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1, // Border for visualization, you can remove this
    borderColor: colors.primaryGreen,
    backgroundColor:selectedOption === 'In Progress' ? colors.primaryGreen :colors.white}}>
        <Text style={{color: selectedOption === 'In Progress' ? colors.white : colors.primaryGreen,
        fontSize:16,
        fontFamily:'Lato-Regular',}}>In Progress</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
      onPress={() => {}}
      style={{
         height:30,
        flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1, // Border for visualization, you can remove this
    borderColor: colors.primaryGreen,
    backgroundColor:selectedOption === 'Delivered' ? colors.primaryGreen :colors.white}}>
        <Text style={{color: selectedOption === 'Delivered' ? colors.white : colors.primaryGreen,
        fontSize:16,
        fontFamily:'Lato-Regular',}}>Delivered</Text>
      </TouchableOpacity>

    </View>


   
    <FlatList data={items}
            
            showsVerticalScrollIndicator={false} keyExtractor={(item, index) => {
                String(index);
            } }
            renderItem={({ item, index }) => {
                return (                
                    <>
                    <TouchableOpacity onPress={() => navigation.navigate('TimeInfo',{ date: item.date , address: item.address })}>
                    <Text style={{
                    fontFamily: 'Lato-Regular',
                    fontSize: 18,
                    color: colors.black,
                    textAlign: 'left',
                    padding: 15
                  }}> {item.date}</Text>
                 
                  <Text style={{
                    fontFamily: 'Lato-Bold',
                    fontSize: 18,
                    color: colors.black,
                    textAlign: 'left',
                    paddingLeft: 5
                  }}>{item.quantity}</Text>
                  </TouchableOpacity>
                  </>      
             
                );
               
            } } />
            <View style={{alignItems:'flex-end',position:'relative',top:-110}}>
            <Text style={{
                    fontFamily: 'Lato-Regular',
                    fontSize: 16,
                    color: colors.red,
                    textAlign: 'left',
                    padding: 15
                  }}>Yet To Complete</Text>
                  </View>
                  <View style={{alignItems:'flex-end',position:'relative',top:-85}}>
            <Text style={{
                    fontFamily: 'Lato-Regular',
                    fontSize: 16,
                    color: colors.primaryGreen,
                    textAlign: 'left',
                    padding: 15
                  }}> Completed</Text>
                  </View>
             </ScrollView>


    

        
        </View>

        
     
    )

}

export default Timer;