# React-Native Reference

## Introduction

React Native is an exciting framework that enables web developers to create robust mobile applications using their existing JavaScript knowledge.

## Contents

1. [Core Components](#core-components)

   - [View Component](#view-component)

   - [Text Component](#text-component)

   - [Image Component](#image-component)

   - [ScrollView Component](#scrollview-component)

   - [Button Component](#button-component)

   - [Pressable Component](#pressable-component)

   - [Modal Component](#modal-component)

   - [StatusBar Component](#statusbar-component)

   - [ActivityIndicator Component](#activityindicator-component)

   - [Alert Component](#alert-component)

2. [Styling](#styling)

   - [Box Model](#box-model)

   - [Layout](#layout)

   - [Shadow and Elevation](#shadow-and-elevation)

   - [Dimensions](#dimensions)

3. [Platform Specific Code](#platform-specific-code)

4. [Other Components](#other-components)

   - [SafeAreaView Component](#safeareaview-component)

   - [FlatList Component](#flatlist-component)

   - [SectionList Component](#sectionlist-component)

   - [TextInput Component](#textinput-component)

   - [Switch Component](#switch-component)

5. [Navigation](#navigation)

   - [Stack Navigation](#stack-navigation)

   - [Drawer Navigation](#drawer-navigation)

   - [Tab Navigation](#tab-navigation)

   - [Passing Data between Screens](#passing-data-between-screens)

6. [Expo](#expo)

---

## Core Components

React Native Offers a collection of Essential Pre-Built components known as _Core Components_ which is readily available for building your Native App's User Interface.

All the Core Components are imported from the _react-native_ Package.

### View Component

A container that supports Layout with flexbox, style, some touch handling and accessibility control.

It can nest Other View within it.

It supports Layout and Styling.

```jsx
import { View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "plum",
      }}
    >
      <View
        style={{
          backgroundColor: "skyblue",
          height: 300,
          width: 300,
        }}
      ></View>
    </View>
  );
}
```

### Text Component

It is a Component for Displaying Texts.

It Supports Nesting, Styling and Touch Handling.

```jsx
import { View, Text } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "plum",
      }}
    >
      <Text style={{ color: "#000" }}>
        Hello <Text style={{ color: "greenyellow" }}>Andoid</Text> Simulator
      </Text>
    </View>
  );
}
```

### Image Component

Image Component is capable of displaying various types of Images

These images including Static Images, Network Images and Pictures from Local disk such as Camera Roll.

To Render Images Locally:

```jsx
import { View, Image } from "react-native";

import img from "../assets/android.png";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "plum",
      }}
    >
      <Image style={{ width: 300, height: 300 }} source={img} alt="Android" />
    </View>
  );
}
```

The Dimensions to the Internet Images should be Given explicitely.

To Render Images From Internet:

```jsx
import { View, Image } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "plum",
      }}
    >
      <Image
        style={{ width: 300, height: 300 }}
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Android_logo_2019.png",
        }}
        alt="Android"
      />
    </View>
  );
}
```

There is an _ImageBackground_ Component to Add background Images to the View.

```jsx
import { View, ImageBackground, Text } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "plum",
      }}
    >
      <ImageBackground
        style={{
          width: 300,
          height: 300,
          alignItems: "center",
        }}
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Android_logo_2019.png",
        }}
        alt="Android"
      >
        <Text>IMAGE TEXT</Text>
      </ImageBackground>
    </View>
  );
}
```

### ScrollView Component

A generic scrolling container that can contain multiple components and views.

ScrollView require a Bounded Height to Function Properly.

It is recommended to wrap the ScrollView within the View.

```jsx
import { ScrollView, Image, Text, View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ScrollView style={{ flex: 1 }}>
        <Image
          style={{ width: 300, height: 300 }}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Android_logo_2019.png",
          }}
          alt="Android"
        />
        <Text>Lorem222</Text>
        <Image
          style={{ width: 300, height: 300 }}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Android_logo_2019.png",
          }}
          alt="Android"
        />
      </ScrollView>
    </View>
  );
}
```

### Button Component

Button is a Pressable Component.

It is a Self Closing Tag with a title prop.

The Press Event can be Handled with `onPress` Prop.

There are Other Props as well such as color and disbled.

```jsx
import { Button, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
      }}
    >
      <Button
        onPress={() => console.log("Button is Pressed")}
        title="Press Me"
        color={"purple"}
        disabled={false}
      />
    </View>
  );
}
```

### Pressable Component

It is a Wrapper Component that detects various stages of Press Interactions on its Defined Children.

It also has the `onPress` Prop to Handle Press Events.

A Custom Button can be Created with Pressable.

There are Other Event handlers as well such as:

- onPressIn &rarr; When a Press is Activated.
- onLongPress &rarr; When a Press is held for longed than 500ms.
- onPressOut &rarr; When a Press gesture is deactivated.

```jsx
import { Pressable, Text, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
      }}
    >
      <Pressable
        onPress={() => console.log("Text Pressed")}
        onLongPress={() => console.log("Text Long Press")}
      >
        <Text
          style={{
            color: "ghostwhite",
            paddingLeft: 15,
            paddingRight: 15,
            textAlign: "center",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio enim
        </Text>
      </Pressable>
    </View>
  );
}
```

### Modal Component

Modal is a Screen that overlays the app Content to Provide Important Information or prompt user for decisions.

Modal has a `onRequestClose` Prop which handles the Back Press or Back Gesture Event.

Animation can be added with `animationType` Prop.

`presentationStyle` Prop displays different type of Presentations of Modal. It is available only in iOS Devices.

```jsx
import { useState } from "react";
import { Button, Modal, View, Text } from "react-native";

export default function App() {
  const [modalState, setModalState] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
      }}
    >
      <Button
        onPress={() => setModalState(true)}
        color={"red"}
        title="Open Modal"
      />
      <Modal
        visible={modalState}
        onRequestClose={() => setModalState(false)}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            gap: 25,
            alignItems: "center",
            backgroundColor: "skyblue",
          }}
        >
          <Text>Modal Contents</Text>
          <Button onPress={() => setModalState(false)} title="Close Modal" />
        </View>
      </Modal>
    </View>
  );
}
```

### StatusBar Component

StatusBar Component allows control over the Application's Status Bar.

It is the Zone where the Battery level, time etc is Located.

The `backgroundColor` Prop for StatusBar is only for the Android.

```jsx
import { StatusBar, View } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor={"red"}
        hidden={false}
      />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#000",
        }}
      ></View>
    </>
  );
}
```

### ActivityIndicator Component

It Displays a Cicular Loading Indicator.

It is used to Indicate Loading.

```jsx
import { ActivityIndicator, Text, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
      }}
    >
      <Text style={{ color: "white" }}>Hello World 1</Text>
      <ActivityIndicator size="large" color="red" animating={true} />
      <Text style={{ color: "white" }}>Hello World 2</Text>
    </View>
  );
}
```

### Alert Component

Alert Launches an Alert Dialogue with Title and Description

Alert is a Callable Component Rather than jsx.

It can also have a bunch of Buttons with the limit of 3 on Android.

```jsx
import { Alert, Button, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
      }}
    >
      <Button
        onPress={() =>
          Alert.alert("Alert Dialogue", "This is the Description", [
            {
              text: "Button 1",
              onPress: () => console.log("Button 1 Pressed"),
            },
            {
              text: "Button 2",
              onPress: () => console.log("Button 2 Pressed"),
            },
          ])
        }
        title="press to Alert"
      />
    </View>
  );
}
```

---

## Styling

React Native does not use CSS for Styling but rather is done using JavaScript.

There are 2 Approaches for Styling a Component.

- Inline Styles: It is done similarly to that of inline Styles in React.
- StyleSheet API: It is Done with the help of StyleSheet API provided by React-Native.

```jsx
import { Text, View, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "red" }}>Inline Styles Approach</Text>
      <Text style={styles.text}>StyleSheet API Approach</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  text: {
    color: "blue",
  },
});
```

The Array is used to Add Multiple Styles to a Component.

The Last Element in the Array takes the Precedence over Others.

```jsx
import { Text, View, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.lightBlueBox]}>
        <Text style={styles.text}>Lightblue Box</Text>
      </View>
      <View style={[styles.box, styles.lightGreenBox]}>
        <Text style={styles.text}>Lightgreen Box</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "plum",
  },
  box: {
    width: "25%",
    height: "25%",
    padding: 10,
  },
  lightBlueBox: {
    backgroundColor: "lightgreen",
  },
  lightGreenBox: {
    backgroundColor: "lightblue",
  },
  text: {
    color: "#000",
  },
});
```

### Box Model

The Dimensions are unitless and represent Density independent Pixels. There are no rem, em, vw, vw etc. But there is a **%** unit.

There are paddingHorizontal, paddingVerical, marginHorizontal, marginVerical Property.

There are no Short Hand Property. Each Property should be specified Individually.

In iOS, the Border-Radius cannot be applied to the Text Component.

### Layout

All the Component are _Flex_ by Default.

There are no Block, Inline, Grid etc.

The Flex Direction is _Column_ By Default.

There are 2 kinds of Layout:

1. Relative Layout

   - An Element is Postitioned according to Normal Flow of Layout.
   - It remains in its original Position and can be offset from that position using top, right, bottom, left values.
   - This Offset does not Affect the Siblings or Parents.

2. Absolute Layout

   - An Element does not participate in Normal Flow of Layout.
   - It is laid out Independently.
   - The position is deteermined by top, left, bottom, right values which is specified relative to its parent Container.

### Shadow and Elevation

There is no common Way to Apply Shadow to both Android and iOS.

```js
const styles = StyleSheet.create({
  boxShadow: {
    shadowColor: "#333333",
    shadowOffset: {
      width: 6, // can be positive or negative
      height: 6, // can be positive or negative
    },
    shadowOpacity: 0.7, // ranged 0 to 1
    shadowRadius: 4,
  },
  androidShadow: {
    elevation: 10,
  },
});
```

### Dimensions

Dimensions is an API used to get the width and height of either the Screen or Window.

It can be accessed and used as follows:

```js
import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  box: {
    width: windowWidth > 500 ? "70%" : "90%",
    height: windowHeight > 600 ? "60%" : "90%",
    padding: 10,
  },
});
```

Although, the Dimensions does not Update Automatically when the Screen is Turned to Landscape Mode.

Hence we make use of useState and useEffect Hook from React.

```js
const [dimension, setDimension] = useState({
  window: Dimensions.get("window"),
});

useEffect(() => {
  const subscription = Dimensions.addEventListener("change", ({ window }) => {
    setDimensions({ window });
  });

  return () => subscription?.remove();
});
```

Although there is a Hook provided by the React Native called _useWindowDimensions_ which performs the Same task.

```js
import { useWindowDimensions } from "react-native";

const windowWidth = useWindowDimensions().width;
const windowHeight = useWindowDimensions().height;
```

---

## Platform Specific Code

There are Situations where it becomes necessary to Tailor the Code Depending on Specific Platforms.

React Native achieves this by two Approaches:

1. Platform Module

```jsx
import { Platform, View, Text, SafeAreaView, StyleSheet } from "react-native";

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
      }}
    >
      <View>
        {Platform.OS === "android" && (
          <Text style={styles.text}>Hello Android</Text>
        )}
        {Platform.OS === "ios" && <Text style={styles.text}>Hello iOS</Text>}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    ...Platform.select({
      android: {
        color: "lightgreen",
        fontSize: 25,
        fontWeight: "900",
      },
      ios: {
        color: "lightgrey",
        fontSize: 20,
        fontWeight: "500",
      },
    }),
  },
});
```

2. Platform-specific File Extensions

A Specific Component can be created either for Android or iOS.

```tree
component/
└── componentName/
    ├── component.android.jsx
    └── component.ios.jsx
```

```jsx
// component.android.jsx

import { View, Text } from "react-native";

function Component() {
  return (
    <View>
      <Text style={{ color: "lightgreen" }}>An Android Component</Text>
    </View>
  );
}

export default Component;
```

```jsx
// component.ios.jsx

import { View, Text } from "react-native";

function Component() {
  return (
    <View>
      <Text style={{ color: "lightgrey" }}>An iOS Component</Text>
    </View>
  );
}

export default Component;
```

```jsx
import { Platform, View, Text, SafeAreaView, StyleSheet } from "react-native";

// @ts-ignore
import Component from "@/components/PlatformSpecificComponent/component";

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
      }}
    >
      <Component />
    </SafeAreaView>
  );
}
```

---

## Other Components

React Native Offers a collection ofother components for better User Interface.

All these Components are imported from the _react-native_ Package.

### SafeAreaView Component

SafeAreaView Component is used to render content within Safe Area Boundry of a Device.

```jsx
import { Text, View, SafeAreaView, ScrollView } from "react-native";

export default function App() {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ScrollView style={{ flex: 1 }}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              marginHorizontal: 15,
            }}
          >
            <Text
              style={{
                fontSize: 30,
                textAlign: "justify",
                marginVertical: 25,
              }}
            >
              Some Heading
            </Text>
            <Text style={{ fontSize: 15, textAlign: "justify" }}>lorem500</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
```

### FlatList Component

FlatList Component is a Component is used to Render the List.

This Component supports Laxy Loading by Default.

There are 2 Mandatory Props for Flatlist: _data_ and _renderItem_.

_data_ is the data to be rendered.
_renderItem_ is the Component to be rendered for each Item in _data_.

There are few Other Props as Well which can be Handy During Rendering.

```jsx
import { FlatList, View, Text, SafeAreaView } from "react-native";

const data = ["Alex", "Bob", "Bobby", "City", "Dog", "Egg", "Fish"];

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
      }}
    >
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View>
            <Text style={{ color: "red", fontSize: 30 }}>{item}</Text>
          </View>
        )}
        keyExtractor={(_, idx) => idx.toString()}
        horizontal={false}
        ItemSeparatorComponent={() => (
          <Text style={{ color: "white", fontSize: 30, marginHorizontal: 15 }}>
            -------
          </Text>
        )}
        ListEmptyComponent={
          <Text style={{ color: "white", fontSize: 30, marginHorizontal: 15 }}>
            No Items Found
          </Text>
        }
        ListHeaderComponent={
          <Text style={{ color: "white", fontSize: 30, marginHorizontal: 15 }}>
            List Header
          </Text>
        }
        ListFooterComponent={
          <Text style={{ color: "white", fontSize: 30, marginHorizontal: 15 }}>
            List Footer
          </Text>
        }
      />
    </SafeAreaView>
  );
}
```

### SectionList Component

SectionList Component is used to Render Data with Various Sections.

```jsx
import { SectionList, View, Text, SafeAreaView } from "react-native";

const data = [
  {
    class: 1,
    data: ["Alex", "Bob"],
  },
  {
    class: 2,
    data: ["Bobby", "Bob"],
  },
  {
    class: 3,
    data: ["Lorem", "Ipsum"],
  },
];

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
      }}
    >
      <SectionList
        sections={data}
        renderItem={({ item }) => (
          <View>
            <Text style={{ color: "red", fontSize: 25 }}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={{ color: "white", fontSize: 30 }}>
            class {section.class}
          </Text>
        )}
        ItemSeparatorComponent={() => (
          <Text style={{ color: "red", fontSize: 25 }}>-------</Text>
        )}
        SectionSeparatorComponent={() => (
          <Text style={{ color: "white", fontSize: 25 }}>-------</Text>
        )}
      ></SectionList>
    </SafeAreaView>
  );
}
```

### TextInput Component

It is the Component to Accept user Input.

```jsx
import { useState } from "react";
import { TextInput, Text, SafeAreaView } from "react-native";

export default function App() {
  const [input, setInput] = useState("");
  const isMultiline = false;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextInput
        style={{
          borderColor: "red",
          height: isMultiline ? "40%" : 40,
          width: "80%",
          margin: 12,
          padding: 10,
          borderWidth: 1,
          textAlignVertical: "top", // For Aligning Texts in Multiline Mode
        }}
        value={input}
        onChangeText={setInput}
        placeholder="Your Number"
        secureTextEntry={false} // For Passwords
        keyboardType="default"
        autoCorrect={false}
        autoCapitalize="none"
        multiline={isMultiline} // For Textarea
      />
      <Text style={{ fontSize: 30, color: "red" }}>Your Input: {input}</Text>
    </SafeAreaView>
  );
}
```

## Switch Component

Switch Component Serves the Purpose of Toggle into User Interface.

It is used to Make a Binary Choice such as Enabling and Disabling.

```jsx
import { useState } from "react";
import { Switch, Text, SafeAreaView, StyleSheet } from "react-native";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const styles = StyleSheet.create({
    view: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: isDarkMode ? "black" : "white",
    },
    text: {
      fontSize: 18,
      color: isDarkMode ? "white" : "black",
    },
  });

  return (
    <SafeAreaView style={styles.view}>
      <Text style={styles.text}>Dark Mode</Text>
      <Switch
        value={isDarkMode}
        onValueChange={() => setIsDarkMode((prev) => !prev)}
        trackColor={{ false: "black", true: "white" }}
        thumbColor={"red"}
      />
    </SafeAreaView>
  );
}
```

---

## Navigation

The Mechanism that allows Users to Move across Different Screens.

There are 3 types of Naviators namely Stack, Drawer and Tab Navigators.

### Stack Navigation

Stack Navigator provides a way to transition between Screens where each new screen is placed on top of Stack

The Stack Navigator can be created as shown:

```jsx
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "@/screens/Home";
import AboutScreen from "@/screens/About";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

The Navigation can be achieved by 2 Different Ways:

1. Using Navigate Props

   ```jsx
   import { Text, View, Button } from "react-native";

   export default function Home({ navigation }: { navigation: any }) {
     return (
       <View
         style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
       >
         <Text style={{ fontSize: 24 }}>Home Screen</Text>
         <Button
           title="Go to About"
           onPress={() => navigation?.navigate("About")}
         />
       </View>
     );
   }
   ```

2. Using Navigate Hooks

   ```jsx
   import { Text, View, Button } from "react-native";

   import { useNavigation } from "@react-navigation/native";

   export default function About() {
     const navigation = useNavigation();
     return (
       <View
         style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
       >
         <Text style={{ fontSize: 24 }}>About Screen</Text>
         <Button
           title="Go to Home"
           onPress={() => navigation.navigate("Home")}
         />
       </View>
     );
   }
   ```

#### Options

```jsx
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "@/screens/Home";
import AboutScreen from "@/screens/About";
import { Pressable, Text } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          // For Common Option Values Between Screens
          headerStyle: {
            backgroundColor: "#6a51ac",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerRight: () => (
            <Pressable onPress={() => console.log("Menu Button Pressed")}>
              <Text style={{ color: "#fff", fontSize: 16 }}>Menu</Text>
            </Pressable>
          ),
          contentStyle: {
            backgroundColor: "#e8e4f3",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          options={{
            // Option Values for each Screens
            title: "Home Title",
          }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="About"
          options={({ route }) => ({
            title: route.params.user, // Dynamic Paramters
          })}
          component={AboutScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

Dynamic Parameters can be Within the Component as well.

```jsx
import { Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";

function About({ route }: { route: any }) {
  const navigation = useNavigation();
  const { user } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: user,
    });
  }, [navigation, user]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title="Change Params"
        onPress={() =>
          navigation?.setParams(
            // @ts-ignore
            {
              user: "Bobby",
            }
          )
        }
      />
    </View>
  );
}

export default About;
```

### Drawer Navigation

Drawer Navigator renders a navigation drawer to the side of the screen which can be opened and closed via gestures.

```jsx
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DashboardScreen from "@/screens/Dashboard";
import SettingsScreen from "@/screens/Settings";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer independent={true}>
        <Drawer.Navigator>
          <Drawer.Screen name="Dashboard" component={DashboardScreen} />
          <Drawer.Screen name="Settings" component={SettingsScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}
```

```jsx
// Dashboard Component

import { Text, View, Button } from "react-native";

export default function Dashboard({ navigation }: { navigation: any }) {
  return (
    <View>
      <Text>Dashboard Screen</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.jumpTo("Settings")}
      />
      <Button title="Toggle Drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
}
```

#### Options

```jsx
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DashboardScreen from "@/screens/Dashboard";
import SettingsScreen from "@/screens/Settings";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer independent={true}>
        <Drawer.Navigator
          screenOptions={{
            drawerActiveTintColor: "#333",
            drawerActiveBackgroundColor: "lightblue",
            drawerContentStyle: {
              backgroundColor: "#c6cbef",
            },
          }}
        >
          <Drawer.Screen
            name="Dashboard"
            component={DashboardScreen}
            options={{
              title: "App Dashboard",
              drawerLabel: "Move to Dashboard",
            }}
          />
          <Drawer.Screen name="Settings" component={SettingsScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}
```

### Tab Navigation

Tab Navigator at Bottom of the screen lets to switch between 2 different routes.

```jsx
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "@/screens/Profile";
import BlogsScreen from "@/screens/Blogs";
import SettingsScreen from "@/screens/Settings";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer independent={true}>
        <Tab.Navigator>
          <Tab.Screen name="Profile" component={ProfileScreen} />
          <Tab.Screen name="Blogs" component={BlogsScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
```

#### Options

```jsx
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "@/screens/Profile";
import BlogsScreen from "@/screens/Blogs";
import SettingsScreen from "@/screens/Settings";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer independent={true}>
        <Tab.Navigator
          screenOptions={{
            tabBarShowLabel: true,
            tabBarLabelPosition: "below-icon",
            tabBarActiveTintColor: "purple",
            tabBarInactiveTintColor: "red",
          }}
        >
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarLabel: "My Profile",
              title: "Profile Screen",
              tabBarIcon: ({ color }) => (
                <Ionicons name="person" size={20} color={color} />
              ),
              tabBarBadge: 21,
            }}
          />
          <Tab.Screen
            name="Blogs"
            component={BlogsScreen}
            options={{
              tabBarLabel: "Check Blogs",
              title: "Blogs Screen",
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              tabBarLabel: "Open Settings",
              title: "Settings Screen",
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
```

### Passing Data between Screens

The Below Code demonstrates the Usage and Updation of Data between the Screens

```jsx
// Home Component

import { Text, View, Button } from "react-native";

export default function Home({ navigation }: { navigation: any }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24 }}>Home Screen</Text>
      <Button
        title="Go to About"
        onPress={() =>
          navigation?.navigate("About", {
            user: "Bob", // Sending Params
          })
        }
      />
    </View>
  );
}
```

```jsx
// About Component

import { Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function About({
  navigation,
  route,
}: {
  navigation: any,
  route: any,
}) {
  const { user } = route.params;
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24 }}>Heyy {user}</Text>
      <Text style={{ fontSize: 24 }}>About Screen</Text>
      <Button
        title="Change Params"
        onPress={() =>
          navigation?.setParams({
            user: "Bobby", // Updating Params
          })
        }
      />
    </View>
  );
}
```

---

## Expo

Expo is an open-source framework for making universal native apps for Android, iOS, and the web with JavaScript and React.

Expo has a suite of tools and services around React Native which greatly simplifies the Development Process.

With Expo, An app can be developed on Windows and Linux Machine and can be run on Physical iphone.

The Command to create a New Expo Project is:

```bash
npx create-expo-app@latest --template
```
