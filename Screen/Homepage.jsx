import React from 'react';
import { SafeAreaView, Text, Image, View } from 'react-native';
const imageUri = require("./profile.png");

const Homepage = () => {
  return (
    <SafeAreaView>
      <View style={{ paddingTop: 10 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" }}>
            <View>
                <Text style={{ textAlign: 'start',marginTop:60,marginBottom:20 ,fontSize:24, fontWeight:"bold" }}>
                Motion<Text style={{color:"#6C44E9"}} >Script</Text>
                </Text>
            </View>
            <View style={{width:40}}>
            <Image
                source={imageUri}
                style={{ height: 40, resizeMode: 'cover',width: '100%' ,width:60}}
                
            />
            </View>
        </View>
        <View>
            {/* video */}
        </View>
        <View>
            {/* models */}
        </View>
        <View>
            {/* navbar */}
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Homepage;
