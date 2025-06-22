import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
// OUR ICONS
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Feather from "@expo/vector-icons/Feather";

// OUR COMPONENTS
import ButtonShopAndChat from "@/components/buttonShopAndChat";

export default function ProfileTabs() {
  const router = useRouter();
  return (
    <LinearGradient
      colors={["#1475BA", "#399385", "#6BBC3F"]} //
      className="flex-1 items-center justify-start pb-[100px]"
      locations={[0, 0.5, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <View className="bg-[#1475BA] flex-row justify-between w-full items-center px-6 py-5  pb-4 rounded-xl shadow-md">
        <View>
          <Image source={require("@/assets/images/HomeScreen/logo.png")} className="w-44 h-12 object-cover" />
        </View>
        <View className="flex-row gap-6 items-center">
          <ButtonShopAndChat />
        </View>
      </View>
      <ScrollView contentContainerStyle={{ paddingHorizontal: 15, paddingBottom: 10 }} showsVerticalScrollIndicator={false}>
        <View className="py-4 gap-1">
          <Text style={{ fontFamily: "LexBold" }} className="text-white text-2xl">
            Hai, Bhinekka Dev
          </Text>
          <Text style={{ fontFamily: "LexRegular" }} className="text-white">
            selamat datang di pelayanan terpadu satu pintu!
          </Text>
        </View>
        <View className="w-full items-center py-4">
          <Image source={require("@/assets/images/HomeScreen/banner.png")} className="w-full h-40 object-cover rounded-lg" />
        </View>
        <View className="flex-row gap-4 justify-between items-center px-6 py-3">
          <TouchableOpacity activeOpacity={0.4} className="flex-col items-center justify-center gap-1">
            <Ionicons name="grid" size={30} color="white" />
            <Text style={{ fontFamily: "LexRegular" }} className="text-white text-center">
              Katalog{"\n"}Produk
            </Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.4} className="flex-col items-center justify-center gap-1">
            <MaterialCommunityIcons name="google-analytics" size={30} color="white" />
            <Text style={{ fontFamily: "LexRegular" }} className="text-white text-center">
              Monitoring{"\n"}Pesanan
            </Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.4} className="flex-col items-center justify-center gap-1">
            <MaterialIcons name="corporate-fare" size={30} color="white" />
            <Text style={{ fontFamily: "LexRegular" }} className="text-white text-center">
              Tarif{"\n"}Pelayanan
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row gap-14 items-center px-4 py-4">
          <TouchableOpacity activeOpacity={0.4} className="flex-col items-center justify-center gap-1">
            <FontAwesome name="map-signs" size={30} color="white" />
            <Text style={{ fontFamily: "LexRegular" }} className="text-white text-center">
              Panduan{"\n"}Pelayanan
            </Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.4} className="flex-col items-center justify-center gap-1" onPress={() => router.push("/screens/suggestionsAndComplaints")}>
            <MaterialCommunityIcons name="email-fast-outline" size={30} color="white" />
            <Text style={{ fontFamily: "LexRegular" }} className="text-white text-center">
              Saran &{"\n"}Pengaduan
            </Text>
          </TouchableOpacity>
        </View>
        <View className="mt-6">
          <Text style={{ fontFamily: "LexBold" }} className="text-white text-xl">
            Layanan Informasi
          </Text>
          <ScrollView horizontal={true} contentContainerStyle={{ padding: 6 }} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity activeOpacity={0.8} className="bg-white border-2 border-[#3498DB] shadow-md shadow-[#3498DB] rounded-lg justify-center items-center w-36 h-32 mr-4 gap-2">
              <FontAwesome6 name="mountain" size={40} color="#3498DB" />
              <Text style={{ fontFamily: "LexBold" }} className="text-black text-sm text-center">
                Informasi Stasiun{"\n"}Meteorologi
              </Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.8} className="bg-white border-2 border-[#3498DB] shadow-md shadow-[#3498DB] rounded-lg justify-center items-center w-36 h-32 mr-4 gap-2">
              <FontAwesome6 name="cloud-bolt" size={40} color="#3498DB" />
              <Text style={{ fontFamily: "LexBold" }} className="text-black text-sm text-center">
                Informasi Stasiun{"\n"}Meteorologi
              </Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.8} className="bg-white border-2 border-[#3498DB] shadow-md shadow-[#3498DB] rounded-lg justify-center items-center w-36 h-32 gap-2">
              <Feather name="wind" size={40} color="#3498DB" />
              <Text style={{ fontFamily: "LexBold" }} className="text-black text-sm text-center">
                Informasi Stasiun{"\n"}Meteorologi
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View className="mt-3">
          <Text style={{ fontFamily: "LexBold" }} className="text-white text-xl">
            Layanan Jasa
          </Text>
          <ScrollView horizontal={true} contentContainerStyle={{ padding: 6 }} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity activeOpacity={0.8} className="bg-white border-2 border-[#3498DB] shadow-md shadow-[#3498DB] rounded-lg justify-center items-center w-36 h-32 mr-4 gap-2">
              <FontAwesome6 name="mountain" size={40} color="#3498DB" />
              <Text style={{ fontFamily: "LexBold" }} className="text-black text-sm text-center">
                Jasa Stasiun{"\n"}Meteorologi
              </Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.8} className="bg-white border-2 border-[#3498DB] shadow-md shadow-[#3498DB] rounded-lg justify-center items-center w-36 h-32 mr-4 gap-2">
              <FontAwesome6 name="cloud-bolt" size={40} color="#3498DB" />
              <Text style={{ fontFamily: "LexBold" }} className="text-black text-sm text-center">
                Jasa Stasiun{"\n"}Meteorologi
              </Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.8} className="bg-white border-2 border-[#3498DB] shadow-md shadow-[#3498DB] rounded-lg justify-center items-center w-36 h-32 gap-2">
              <Feather name="wind" size={40} color="#3498DB" />
              <Text style={{ fontFamily: "LexBold" }} className="text-black text-sm text-center">
                Jasa Stasiun{"\n"}Meteorologi
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
