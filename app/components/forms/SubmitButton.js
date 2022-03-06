import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useFormikContext } from "formik";

import Button from "../Button";
import AppNavigator from "../../navigation/AppNavigator";

const Stack = createStackNavigator();

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();
  console.log("in submit function");
  <Stack.Navigator>
    <Stack.Screen name="AppNavigator" component={AppNavigator} />
  </Stack.Navigator>
  return <Button title={title}/>
}

export default SubmitButton;