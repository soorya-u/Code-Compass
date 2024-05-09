import { ScrollView } from "react-native";

import { useConstantTheme } from "@/hooks/use-theme";
import AuthProviders from "@/components/AuthProviders";

export default function SignUpScreen() {
  const { styles } = useConstantTheme();
  return (
    <ScrollView style={styles.bg} contentInsetAdjustmentBehavior="automatic">
      <AuthProviders />
    </ScrollView>
  );
}
