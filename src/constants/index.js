import { detectAgent } from "../utils/detect-agent";

// We will define some global and reusable constants here
const LONG_TEXTS = {
  SLOGAN: "Far far away, behind the word mountains…",
  FOOTER_SLOGAN:
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui official",
  LANDING_MSG:
    "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
  REAL_RANGE_INFO:
    "The actual amount of range that you experience will vary based on your particular use conditions. Your vehicle range is also dependent on other conditions, such as vehicle configuration, battery age and condition, driving style and operating, environmental and climate conditions. See how some of these particular use conditions may affect your range in our simulation model.",
};

const SYS = {
  AGENT: detectAgent(),
  IS_IE: detectAgent().isIE,
};

export { LONG_TEXTS, SYS };
