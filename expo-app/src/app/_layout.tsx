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
          "CLOmM1/OXvSPjw5UOYbAf9GKOxImEp9hhku9W90fHMk=",
          "hxqRlPTu1bMS/0DITB1SSu0vd4u/8l8TjPgfaAp63Gc=",
          "Vfd95BwDeSQo+NUYxVEEIlvkOlWY2SalKK1lPhzOx78=",
          "QXnt2YHvdHR3tJYmQIr0Paosp6t/nggsEGD4QJZ3Q0g=",
          "mEflZT5enoR1FuXLgYYGqnVEoZvmf9c2bVBpiOjYQ0c=",
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
