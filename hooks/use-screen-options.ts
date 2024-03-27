import { useEffect } from "react";
import { useNavigation } from "expo-router";

export const useScreenOptions = (options: {}) => {
  const navigate = useNavigation();

  useEffect(() => {
    navigate.setOptions(options);
  }, [navigate]);
};
