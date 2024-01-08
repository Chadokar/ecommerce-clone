const product = {
  _id: "659a4efa9c8a6aae6ab46692",
  productname:
    "boAt Airdopes 161 with 40 Hours Playback, ASAP Charge & 10mm Drivers Bluetooth Headset  (Pebble Black, True Wireless)",
  type: "Ear Device",
  price: 32,
  link: "https://shorturl.at/kCQZ7",
  description:
    "It's time to Do Your Groove, with Airdopes 161 TWS earbuds. The 10mm drivers in the earbuds are there to deliver an immersive listening time. It comes equipped with Bluetooth v5.1 wireless technology so that you can enjoy all of your sessions lag-free. The IWP tech enabled TWS earbuds power on as soon as the case lid gets opened. Moreover, the ASAP Charge tech helps the earbuds to gather up to 180Min of playtime in only 10 minutes of charging. Airdopes 161 provides a total playback time of up to 17HRS including up to 5.5HRS of playtime per earbud. With an IPX5 marked water resistant build, the earbuds offer flexibility whether you are at the gym or traversing those far terrains. You can command playback, hands-free and activate voice assistant with ease via the instant response touch controls. Now, stay indulged in your playlists and enjoy a truly immersive auditory experience on Airdopes 161.",
  about: [
    {
      value: "With Mic:Yes",
      id: "1",
      _id: "659a4efa9c8a6aae6ab46693",
    },
    {
      value: "Charge for 10 minutes, enjoy 180 minutes - ASAP Charge",
      id: "2",
      _id: "659a4efa9c8a6aae6ab46694",
    },
    {
      value: "boAt Immersive Sound - 10mm drivers",
      id: "3",
      _id: "659a4efa9c8a6aae6ab46695",
    },
    {
      value: "Up to 40 HRS Total Playback",
      id: "4",
      _id: "659a4efa9c8a6aae6ab46696",
    },
  ],
  __v: 0,
};

let a = "boAt";

// Check if 'a' is present in any value of the product object
const isPresent = Object.values(product).some((value) => {
  if (typeof value === "string") {
    // Case-insensitive check if 'a' is present in the string
    return value.toLowerCase().includes(a.toLowerCase());
  }
  return false;
});

console.log(product);

console.log(isPresent);
