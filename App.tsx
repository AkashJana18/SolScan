import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { WalletScreen } from "./src/screens/walletScreen";
import { SwapScreen } from "./src/screens/swapScreen";
import { useState } from "react";

export default function App() {
  const [activeTab, setActiveTab] = useState<"wallet" | "swap">("wallet");

  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.safe}>
        {activeTab === "wallet" ? <WalletScreen /> : <SwapScreen />}

        <View style={s.tabBar}>
          <TouchableOpacity
            style={s.tab}
            onPress={() => setActiveTab("wallet")}
          >
            <Ionicons
              name={activeTab == "wallet" ? "wallet" : "wallet-outline"}
              size={24}
              color={activeTab === "wallet" ? "#14F195" : "#6B7280"}
            />
            <Text style={[s.tabLabel, activeTab === "wallet" && s.tabActive]}>
              Wallet
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={s.tab} onPress={() => setActiveTab("swap")}>
            <Ionicons
              name={
                activeTab == "swap"
                  ? "swap-horizontal"
                  : "swap-horizontal-outline"
              }
              size={24}
              color={activeTab === "swap" ? "#14F195" : "#6B7280"}
            />
            <Text style={[s.tabLabel, activeTab === "swap" && s.tabActive]}>
              Swap
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

function Token() {}

const s = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#0D0D12",
  },
  tabBar: {
    flexDirection: "row",
    backgroundColor: "#16161D",
    borderTopWidth: 1,
    borderTopColor: "#2A2A35",
    paddingBottom: 0,
    paddingTop: 12,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    fontSize: 12,
    gap: 4,
  },
  tabLabel: {
    color: "#6B7280",
    fontSize: 12,
  },
  tabActive: {
    color: "#14F195",
  },
});
