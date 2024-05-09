import { useConstantTheme } from "@/hooks/use-theme";
import { ScrollView, Text, View } from "react-native";

export default function LoginScreen() {
  const { styles } = useConstantTheme();

  return (
    <ScrollView style={styles.bg} contentInsetAdjustmentBehavior="automatic">
      <Text style={styles.fg}>
        
      </Text>
    </ScrollView>
  );
}
