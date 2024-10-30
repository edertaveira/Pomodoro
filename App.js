import {
  Animated,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import "./global.css";
import { useEffect, useRef, useState } from "react";
import { Audio } from "expo-av";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Circle } from "react-native-svg";
import { useReducedMotion } from "react-native-reanimated";

const config = {
  Pomodoro: 25 * 60,
  "Short Break": 5 * 60,
  "Long Break": 15 * 60,
};

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export default function App() {
  const [time, setTime] = useState(config.Pomodoro);
  const [mode, setMode] = useState(Object.keys(config)[0]);
  const [isActive, setIsActive] = useState(false);
  const [cicle, setCicle] = useState(0);
  const [startPomodoro, setStartPomodoro] = useState();
  const [startBreak, setStartBreak] = useState();

  const handleModeChange = (newMode) => {
    setIsActive(false);
    if (config?.[newMode]) {
      setTime(config[newMode]);
    }
    setMode(newMode);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };

  const playStartBreak = async () => {
    startBreak.setPositionAsync(0);
    await startBreak.playAsync();
  };

  const playStartPomodoro = async () => {
    startPomodoro.setPositionAsync(0);
    await startPomodoro.playAsync();
  };

  const handleEnd = () => {
    if (mode === "Pomodoro" && cicle < 3) {
      setMode("Short Break");
      setCicle((prev) => prev + 1);
      setTime(config["Short Break"]);
      playStartBreak();
    } else if (mode === "Pomodoro") {
      setMode("Long Break");
      setTime(config["Long Break"]);
      setCicle(0);
      playStartBreak();
    } else {
      setMode("Pomodoro");
      setTime(config.Pomodoro);
      playStartPomodoro();
    }
  };

  useEffect(() => {
    let interval = null;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    } else if (!isActive && time !== 0 && interval) {
      clearInterval(interval);
    }

    if (time === 0) handleEnd();

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [time, isActive]);

  useEffect(() => {
    (async () => {
      const { sound: churchBell } = await Audio.Sound.createAsync(
        require("./assets/church-bell.mp3")
      );

      setStartBreak(churchBell);
      const { sound: bell } = await Audio.Sound.createAsync(
        require("./assets/bell.mp3")
      );
      setStartPomodoro(bell);
    })();
  }, []);

  const circunference = Math.PI * 2 * 100;
  const animatedValue = useRef(new Animated.Value(0)).current;

  const strokeDashoffset = animatedValue.interpolate({
    inputRange: [0, config?.[mode]],
    outputRange: [circunference, 0]
  })

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: config?.[mode] - time,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [time])




  return (
    <LinearGradient colors={["#141E30", "#243B55"]} style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView className="flex-1 p-6">
        <View className="flex-row justify-between items-center my-4">
          {Object.keys(config).map((key) => (
            <TouchableOpacity
              className={` p-2 rounded-md ${
                key === mode ? "bg-red-500" : "bg-gray-700"
              }`}
              onPress={() => handleModeChange(key)}
              key={key}
            >
              <Text className="text-white">
                {key}

                {key === "Pomodoro" && ` (${cicle + 1})`}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View className="relative w-[250px] h-[250px] m-auto">
          <View className=" flex-1 justify-center items-center">
            <Svg height="250" width="250">
              <AnimatedCircle
                stroke="#FF6347"
                fill="none"
                cx="125"
                cy="125"
                r="100"
                strokeWidth="10"
                strokeDasharray={circunference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
              />
            </Svg>

            <Text className="absolute top-[100px] text-4xl font-bold text-green-700">
              {formatTime(time)}
            </Text>
          </View>
        </View>

        <View className="flex-row justify-center">
          <TouchableOpacity
            className="bg-green-500 p-3 rounded-md w-full"
            onPress={() => setIsActive(!isActive)}
          >
            <Text className="text-white text-center">
              {isActive ? "Pause" : "Play"}
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
