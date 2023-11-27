export const bb = [
  {
    mode: "Sleep",
    variants: [
      {
        type: "Delta (𝛿)",
        mode: "A",
        frequency: "3 Hz",
        base: "250 Hz",
        left: 250,
        right: 253,
      },
      {
        type: "Thita (θ)",
        mode: "B",
        frequency: "6 Hz",
        base: "250 Hz",
        left: 250,
        right: 256,
      },
    ],
  },
  {
    mode: "Study",
    variants: [
      {
        type: "Beta (β)",
        mode: "A",
        frequency: "15 Hz",
        base: "240 Hz",
        left: 255,
        right: 240,
      },
      {
        type: "Beta (β)",
        mode: "B",
        frequency: "14 Hz",
        base: "440 Hz",
        left: 454,
        right: 440,
      },
    ],
  },
  {
    mode: "Relax",
    variants: [
      {
        type: "Beta (β)",
        mode: "A",
        frequency: "15 Hz",
        base: "200 Hz",
        left: 215,
        right: 200,
      },
      {
        type: "Alpha (α)",
        mode: "B",
        frequency: "10 Hz",
        base: "200 Hz",
        left: 210,
        right: 200,
      },
    ],
  },
  {
    mode: "Sports",
    variants: [
      {
        type: "Beta (β)",
        mode: "A",
        frequency: "16 Hz",
        base: "432 Hz",
        left: 448,
        right: 432,
      },
      {
        type: "Gamma (γ)",
        mode: "B",
        frequency: "40 Hz",
        base: "432 Hz",
        left: 472,
        right: 432,
      },
    ],
  },
];

export const playlists = [
  {
    id: "yoru1",
    user_id: "user_id_1", // to restrict access
    title: "Yorushika fav",
    desc: "My Favorite Yorushika songs",

    videos: ["t7MBzMP4OzY", "zuC_wTi7O5o", "CpAUv-DMTd0"],
    createdAt: "2022-03-15T18:57:38Z", // ISO format
  },
  {
    id: "yoruc2",
    user_id: "user_id_1", // to restrict access
    title: "Chosen by YoruCord",
    desc: "Songs officially approvaed by YoruCord",

    videos: ["AiQo6ZyM9bs", "JxiCAEvcF5s", "GqjX_N6Ad68"],
    createdAt: "2023-05-15T18:57:38Z", // ISO format
  },
  {
    id: "jpop1",
    user_id: "user_id_1", // to restrict access
    title: "Japanese songs",
    desc: "Minami, Eve, Yorushika, Orangestar, etc",

    videos: ["MDcfP97NVpY", "WwnZeQiI6hQ", "TFALdg7HUJU", "DkAyAvKMFP4"],
    createdAt: "2023-06-18T18:57:38Z", // ISO format
  },
];

export const liked_videos = {
  id: "liked_videos_id_1",
  user_id: "user_id_1", // to restrict access
  title: "Liked Videos",
  desc: "Your liked video will be stored here",

  videos: ["yXl5D2B8nKk", "ZdzoLCLliW0", "64ftDYJXcTo"],
  createdAt: "2023-06-15T18:57:38Z", // ISO format
};

export const recently_played = {
  id: "recently_played_videos_id_1",
  user_id: "user_id_1", // to restrict access
  title: "Recently Played Videos",
  desc: "Your recently played videos will be stored here",

  videos: ["j7mCHcDrRF8", "cnRI54A0dyk", "zqjOKjBRq-g"],
  createdAt: "2023-06-16T12:30:00Z", // ISO format
};

export const timer = [
  { value: null, label: "No time limit" },
  { value: 50, label: "50 sec (TEST)" },
  { value: 1800, label: "30 minutes" },
  { value: 3600, label: "1 hour" },
  { value: 2 * 3600, label: "2 hours" },
  { value: 4 * 3600, label: "4 hours" },
];

// solfeggio frequesncies in timer data structure
export const solfeggio = [
  { value: 174, label: "174 Hz" },
  { value: 285, label: "285 Hz" },
  { value: 396, label: "396 Hz" },
  { value: 417, label: "417 Hz" },
  { value: 528, label: "528 Hz" },
  { value: 639, label: "639 Hz" },
  { value: 741, label: "741 Hz" },
  { value: 852, label: "852 Hz" },
  { value: 963, label: "963 Hz" },
];
