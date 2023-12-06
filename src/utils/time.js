import { padStart } from "lodash";

export function formatTime(seconds) {
  if (isNaN(seconds)) return "00:00";
  const sec = Math.floor(seconds);
  const hours = Math.floor(sec / 3600);
  const minutes = Math.floor((sec % 3600) / 60);
  const remainingSeconds = sec % 60;
  const leadingHours = hours !== 0 ? `${padStart(hours, 2, "0")}:` : "";
  const leadingMinutes = minutes !== 0 ? `${padStart(minutes, 2, "0")}:` : "";

  return leadingHours + `${padStart(minutes, 2, "0")}:${padStart(remainingSeconds, 2, "0")}`;
}
