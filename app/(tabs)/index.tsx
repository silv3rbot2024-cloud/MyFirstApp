// import { Image } from 'expo-image';
// import { Platform, StyleSheet } from 'react-native';

// import { HelloWave } from '@/components/hello-wave';
// import ParallaxScrollView from '@/components/parallax-scroll-view';
// import { ThemedText } from '@/components/themed-text';
// import { ThemedView } from '@/components/themed-view';
// import { Link } from 'expo-router';

// export default function HomeScreen() {
//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
//       headerImage={
//         <Image
//           source={require('@/assets/images/partial-react-logo.png')}
//           style={styles.reactLogo}
//         />
//       }>
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText type="title">Welcome!</ThemedText>
//         <HelloWave />
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 1: Try it</ThemedText>
//         <ThemedText>
//           Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
//           Press{' '}
//           <ThemedText type="defaultSemiBold">
//             {Platform.select({
//               ios: 'cmd + d',
//               android: 'cmd + m',
//               web: 'F12',
//             })}
//           </ThemedText>{' '}
//           to open developer tools.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <Link href="/modal">
//           <Link.Trigger>
//             <ThemedText type="subtitle">Step 2: Explore</ThemedText>
//           </Link.Trigger>
//           <Link.Preview />
//           <Link.Menu>
//             <Link.MenuAction title="Action" icon="cube" onPress={() => alert('Action pressed')} />
//             <Link.MenuAction
//               title="Share"
//               icon="square.and.arrow.up"
//               onPress={() => alert('Share pressed')}
//             />
//             <Link.Menu title="More" icon="ellipsis">
//               <Link.MenuAction
//                 title="Delete"
//                 icon="trash"
//                 destructive
//                 onPress={() => alert('Delete pressed')}
//               />
//             </Link.Menu>
//           </Link.Menu>
//         </Link>

//         <ThemedText>
//           {`Tap the Explore tab to learn more about what's included in this starter app.`}
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 3: Get a fresh start </ThemedText>
//         <ThemedText>
//           {`When you're ready, run `}
//           <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
//           <ThemedText type="defaultSemiBold">app-example</ThemedText>.
//         </ThemedText>
//       </ThemedView>
//     </ParallaxScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });

//I added the greetings. 05/08/2026

// const myName = "Jana";

// const greet = (name) => {

//  return `Howdy, ${name}!`;

// };

// const classmates = ["Vincent", "Yanny", "Jackie","Maychelle","Adam"];

// classmates.map(name => greet(name));
// console.log(classmates.map(name => greet(name)));

// Added my photo, Added my name, Add your course, short bio and did the requirements. 05/10/2026


// import { Image } from 'expo-image';
// import { StyleSheet } from 'react-native';
// import { View, Text } from 'react-native';

// export default function App() {
//   return (
//     <View style={s.screen}>
//       <Image
//         source={{ uri: 'https://scontent.fdvo1-1.fna.fbcdn.net/v/t39.30808-6/502491868_23976036398694573_2572416048249608135_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGEL3dd7J6MzgPnf6lOIKm31fsGPkHYTXTV-wY-QdhNdDYvxOeF3U-BZlgaPCrqKzwXz5Q93k_S3Yq-V6hZoZGc&_nc_ohc=XOCeTo6tB4QQ7kNvwEYn5k-&_nc_oc=AdpocUsXOy-au8XPwaKwu1HqeNMdGhW3JhqqqZ0xNfHv7gzaQMAitJ6cEoJmOENml64&_nc_zt=23&_nc_ht=scontent.fdvo1-1.fna&_nc_gid=nXCeOCK-hiI25YXBYqu-Fg&_nc_ss=7b2a8&oh=00_Af7ue9PRIJ3-FzQXNMdVscsCuHgQOOa6qDpjSfvL86Vqvw&oe=6A061272' }}
//         style={s.photo}
//       />

//       <Text style={s.name}>Jana Marie Vercide</Text>
//       <Text style={s.bio}>MMA Student - A301 I like Cars and Art</Text>
//     </View>
//   );
// }

// const s = StyleSheet.create({
//   screen: { flex:1, alignItems:'center', justifyContent:'center', backgroundColor: '#b6cfd3',},
//   photo: { width:120, height:120, borderRadius:60 },
//   name: { fontSize:24, fontWeight:'bold', marginTop:12 },
//   bio: { fontSize:14, color:'#626262' }
// });


// I made changes to the code and made it interactive 05/10/26

import { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';

export default function App() {
  const [name, setName] = useState('');

  return (
    <View style={s.screen}>
      <Image
        source={{ uri: 'https://i.pinimg.com/474x/5d/a3/60/5da360c98b9af0ad709fe18606992229.jpg' }}
        style={s.photo}
      />

      <TextInput
        placeholder="Type your name..."
        onChangeText={setName}
        style={{
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
          width: 200,
        }}
      />

      <Text style={s.name}>
        Hello, {name}!
      </Text>
    </View>
  );
}

const s = StyleSheet.create({
  screen: { flex:1, alignItems:'center', justifyContent:'center', backgroundColor: '#b6cfd3', },
  photo: { width:120, height:120, borderRadius:60 },
  name: { fontSize:22, fontWeight:'bold', marginTop:12 },
  bio: { fontSize:14, color:'#626262' }
});