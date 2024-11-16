import { tokensProvider } from "../src/styles/tokens.css";
import type { Preview } from "@storybook/react";
import "modern-normalize";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className={tokensProvider}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
