import type { Meta, StoryObj } from "@storybook/react";
import { SidebarLayout } from "./sidebar-layout";

const meta: Meta<typeof SidebarLayout> = {
  component: SidebarLayout,
};

export default meta;
type Story = StoryObj<typeof SidebarLayout>;

export const Default: Story = {
  render: () => (
    <SidebarLayout
      mainContent={<main>main</main>}
      asideContent={<aside>aside</aside>}
    />
  ),
};
