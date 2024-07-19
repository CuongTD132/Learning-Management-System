import { useEffect, useState } from "react";
import axios from "axios";
import { SERVER_URI } from "@/utils/uri";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function useUser() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [refetch, setRefetch] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const supscription = async () => {
      const accessToken = await AsyncStorage.getItem("access_token");
      const refreshToken = await AsyncStorage.getItem("refresh_token");

      await axios
        .get(`${SERVER_URI}/me`, {
          headers: {
            "access-token": accessToken,
            "refresh-token": refreshToken,
          },
        })
        .then(async (res) => {
          setUser(res.data.user);
          setLoading(false);
        })
        .catch((e) => {
          setError(e?.message);
          setLoading(false);
        });
    };
    supscription();
  }, [refetch]);

  return { loading, user, error, setRefetch, refetch };
}
