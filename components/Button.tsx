import { View, Text, Pressable } from "react-native";
import React from "react";

type Props = {
  label: string;
  theme?: "green";
  onPress?: () => void;
};

const Button = ({ label, theme, onPress }: Props) => {
  return (
    <Pressable
      className={
        `py-3 rounded-lg` +
        (theme === "green" ? " bg-primary" : " bg-secondary")
      }
      onPress={onPress}
    >
      <Text className="text-white font-medium text-center">{label}</Text>
    </Pressable>
  );
};

export default Button;
