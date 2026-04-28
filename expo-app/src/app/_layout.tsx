import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { initializeSslPinning } from "react-native-ssl-public-key-pinning";

export default function RootLayout() {
  const [isSSLPinningInitialized, setIsSSLPinningInitialized] = useState(false);
  useEffect(() => {
    initializeSslPinning({
      "google.com": {
        includeSubdomains: true,
        publicKeyHashes: [
          "mByPFXGC3qs3pyizMlKet2kRFl+S7endvVxmUoNkpg4=",
          "vh78KSg1Ry4NaqGDV10w/cTb9VH3BQUZoCWNa93W/EY=",
          "mEflZT5enoR1FuXLgYYGqnVEoZvmf9c2bVBpiOjYQ0c=",
          "a1p+fcRExRGObX8ZYsMzrJi1NOzEFxiu8B3rOKOTAK8=",
          "YPtHaftLw6/0vnc2BnNKGF54xiCA28WFcccjkA4ypCM=",
          "hxqRlPTu1bMS/0DITB1SSu0vd4u/8l8TjPgfaAp63Gc=",
        ],
      },
    }).finally(() => {
      setIsSSLPinningInitialized(true);
    });
  }, []);

  if (!isSSLPinningInitialized) {
    return <ActivityIndicator />;
  }

  return <Stack />;
}
