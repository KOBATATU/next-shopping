import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./index";

export default {
  title: "Atoms/Button",
  argTypes: {
    variant: {
      options: ["primary", "secondary", "danger"],
      defaultValue: "primary",
      description: "ボタンのvariant",
      control: { type: "radio" },
      table: {
        type: { summary: "primary | secondary | danger" },
      },
    },
    children: {
      control: { type: "text" },
      defaultValue: "Button",
      description: "ボタンテキスト",
      table: {
        type: { summary: "string" },
      },
    },
    disabled: {
      control: { type: "boolean" },
      defaultValue: false,
      description: "Disabledのフラグ",
      table: {
        type: { summary: "boolean" },
      },
    },
    width: {
      control: { type: "number" },
      description: "横幅",
      table: {
        type: { summary: "number" },
      },
    },
    height: {
      control: { type: "number" },
      description: "縦幅",
      table: {
        type: { summary: "number" },
      },
    },
    onClick: {
      description: "イベントハンドラ",
      table: {
        type: { summary: "function" },
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
