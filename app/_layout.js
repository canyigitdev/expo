import { Slot } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//Custom Context
import { TopContext } from "../helpers/Context";
import { useState } from "react";

export default function Home(){

    const [isdark,setisdark] = useState(0)

    const data = {
        message:"hello world",
        isdark
    }

    return(
        <TopContext.Provider value={data}>
            <SafeAreaView>
                <View className="flex items-center h-full p-6 w-full bg-blue-500 justify-center">
                    <Slot />
                </View>
            </SafeAreaView>
        </TopContext.Provider>
    )
}