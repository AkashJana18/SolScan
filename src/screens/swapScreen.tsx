import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  ScrollView,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export function SwapScreen() {
  const [fromAmount, setFromAmount] = useState("100");
  const [toAmount, setToAmount] = useState("0.2801");
  const [fromToken, setFromToken] = useState("USDC");
  const [toToken, setToToken] = useState("SOL");

  function swapTokens() {
    setFromAmount(toAmount);
    setFromToken(toToken);
    setToAmount(fromAmount);
    setToToken(fromToken);
  }

  function handleSwap() {
    if (!fromAmount) return Alert.alert("Enter an valid amount");
    Alert.alert(
      "Swap",
      `Swapping ${fromAmount} ${fromToken} to ${toAmount} ${toToken}`,
    );
  }

  return (
    <ScrollView style={s.scroll} contentContainerStyle={s.content}>
      <Text style={s.title}>Swap Tokens</Text>
      <View style={[s.card, { marginBottom: 10 }]}>
        <View style={s.cardHeader}>
          <TouchableOpacity style={s.tokenSelector}>
            <View style={s.tokenIcon}>
              <Text style={s.tokenIconText}>S</Text>
            </View>
            <Text style={s.tokenName}>{fromToken}</Text>
            <Ionicons name="chevron-down" size={18} color={"#888"} />
          </TouchableOpacity>
          <TextInput
            style={s.amountInput}
            value={fromAmount}
            onChangeText={setFromAmount}
            keyboardType="numeric"
            placeholder="0"
            placeholderTextColor="#666"
          />
        </View>
        <View style={s.cardFooter}>
          <Text style={s.balanceText}>Balance: 0.0551 {fromToken}</Text>
          <Text style={s.balanceText}>$499.749</Text>
        </View>
      </View>

      <View style={s.arrowContainer}>
        <TouchableOpacity style={s.swapArrow} onPress={swapTokens}>
          <Ionicons name="arrow-down" size={20} color={"#FFF"} />
        </TouchableOpacity>
      </View>
      <View style={s.card}>
        <View style={s.cardHeader}>
          <TouchableOpacity style={s.tokenSelector}>
            <View style={s.tokenIcon}>
              <Text style={s.tokenIconText}>S</Text>
            </View>
            <Text style={s.tokenName}>{toToken}</Text>
            <Ionicons name="chevron-down" size={18} color={"#888"} />
          </TouchableOpacity>
          <TextInput
            style={s.amountInput}
            value={toAmount}
            onChangeText={setToAmount}
            keyboardType="numeric"
            placeholder="0"
            placeholderTextColor="#666"
          />
        </View>
        <View style={s.cardFooter}>
          <Text style={s.balanceText}>Balance: 0.0551 {fromToken}</Text>
          <Text style={s.balanceText}>$499.749</Text>
        </View>
      </View>
      <TouchableOpacity style={s.swapBtn} onPress={handleSwap}>
        <Text style={s.swapBtnText}>Swap</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: "flex-start",
    justifyContent: "center",
    // backgroundColor: "#FFFFFF",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: 700,
    marginBottom: 20,
  },
  scroll: {
    flex: 1,
    backgroundColor: "#0D0D12",
  },
  content: {
    padding: 20,
  },
  card: {
    backgroundColor: "#1A1A24",
    borderRadius: 20,
    padding: 8,
    borderWidth: 1,
    borderColor: "#2A2A35",
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tokenSelector: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#252530",
    paddingVertical: 8,
    paddingLeft: 6,
    paddingRight: 12,
    borderRadius: 24,
    gap: 6,
  },
  tokenIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  tokenIconText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  tokenName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  amountInput: {
    fontSize: 40,
    fontWeight: "600",
    color: "#FFFFFF",
    textAlign: "right",
    flex: 1,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  balanceText: {
    fontSize: 14,
    color: "#666666",
  },
  arrowContainer: {
    alignItems: "center",
    marginVertical: -22,
    zIndex: 10,
  },
  swapArrow: {
    backgroundColor: "#0D0D12",
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "#0D0D12",
  },
  swapBtn: {
    backgroundColor: "#14F195",
    alignItems: "center",
    marginTop: 24,
    borderRadius: 14,
    paddingVertical: 18,
  },
  swapBtnText: { fontSize: 18, fontWeight: "600", color: "#000000" },
});
