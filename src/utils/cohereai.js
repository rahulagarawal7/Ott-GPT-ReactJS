import { ChatCohere } from "@langchain/cohere";
import { OPENAI_KEY } from "./constants";

export const cohere = new ChatCohere({
  apiKey: OPENAI_KEY,
  model: "command-r-plus",
  temperature: 0.5,
});
