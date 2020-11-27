import React from "react";
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"


import ComingSoon from "./app/screens/ComingSoon";
import CompassTest from "./app/screens/CompassTest";
import Login from "./app/screens/Login";
import Meeting from "./app/screens/Meeting";
import MenuScreen from "./app/screens/MenuScreen"
import PostConversation from "./app/screens/PostConversation";
import Report from "./app/screens/Report";

const Stack = createStackNavigator()

export default function App() {

  // //for viewing one screen at a time
  // return <Meeting/>

  //navigation done by Jason
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{
        headerTitleStyle: {
          //customize all at once
        }
      }}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MenuScreen"
          component={MenuScreen}
          options={{
            headerStyle: { backgroundColor: '#d3d3d3' },
            title: "Dashboard",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ComingSoon"
          component={ComingSoon}
          options={{
            title: " ",
          }}
        />
        <Stack.Screen
          name="PostConversation"
          component={PostConversation}
          options={{
            title: "Feedback",
          }}
        />
        <Stack.Screen
          name="Report"
          component={Report}
          options={{
            title: "Report User",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Meeting"
          component={Meeting}
          options={{
            headerStyle: { backgroundColor: "#4c4c4c" },
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CompassTest"
          component={CompassTest}
          options={{
            title: "Political Compass Test",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
