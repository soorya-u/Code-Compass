import { ScrollView, Text } from "react-native";

import { useConstantTheme } from "@/hooks/use-theme";

export default function SignUpScreen() {
  const { styles } = useConstantTheme();
  return (
    <ScrollView style={styles.bg} contentInsetAdjustmentBehavior="automatic">
      <Text style={styles.fg}></Text>
    </ScrollView>
  );
}
