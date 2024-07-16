import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { SERVER_URI } from "@/utils/uri";

export default function useUser() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(true);

  useEffect(() => {
    const supscription = async () => [
      await axios
        .post(`${SERVER_URI}/me`)
        .then((res) => {
          console.log(res);
        })
        .catch((e) => {
          console.log(e);
        }),
    ];
    supscription();
  }, []);

  return { loading, user };
}
