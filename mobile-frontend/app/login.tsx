import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Link, RelativePathString, useRouter } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { useSession } from "./ctx";
import React from 'react'

const Login = () => {
  console.log("Rendering Login Screen");
  const { signIn } = useSession();
  // const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  const {
    control,
    // handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // const onSubmit = async (data: any) => {
  //   console.log("Submitting login form with data:", data);
  //   setLoading(true);
  // };

  return (
    <View style={styles.container}>

      <Text style={styles.text}>Login</Text>

      <Text style={styles.text}>Welcome Back!</Text>

      <Text style={styles.text}> Enter all details below to login to your account.</Text>
      
        <View
          style={{
            gap: 20,
            flex: 1,
          }}
        >
        
        <Controller
          control={control}
          rules={{
            required: true,
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.text}
              placeholder="Email"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          )}
          name="email"
        />
        {errors.email && <Text>This is required and should be a valid email.</Text>}  
        
        <Controller
          control={control}
          rules={{
            required: true,
            minLength: 6,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.text}
              placeholder="Password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry
            />
          )}
          name="password"
        />
        {errors.password && <Text>This is required and should be at least 6 characters.</Text>}

        <Button
        onPress={() => { 
          signIn()
          router.push("/(app)/(tabs)")
        }}
        title="Login"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        />
        
        <View>
        
          <View style={{
            flexDirection: "row", 
            justifyContent: "center", 
            }} />

            <Text style={{ textAlign: "center", fontSize: 16}}> Don't have an account yet? 
              <Link href="/register" style={{ textDecorationLine: "underline"}}>
                <Text style={{fontWeight: "600", fontSize: 16}} >Register</Text> 
              </Link>
            </Text>
          </View>
        
        </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});