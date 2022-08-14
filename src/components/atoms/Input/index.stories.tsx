import { ComponentMeta, ComponentStory } from "@storybook/react";
import Input from "./index";

export default {
  title: "Atoms/InputText",
  argTypes: {
    placeholder: {
      control: { type: "text" },
      description: "placeholder",
      table: {
        type: { summary: "string" },
      },
    },
    hasBorder: {
      control: { type: "boolean" },
      defaultValue: true,
      description: "ボーダーフラグ",
      table: {
        type: { summary: "boolean" },
      },
    },
    hasError: {
      control: { type: "boolean" },
      defaultValue: false,
      description: "バリデーションエラーフラグ",
      table: {
        type: { summary: "boolean" },
      },
    },
    fontSize: {
      control: { type: "text" },
      description: "文字の大きさ",
      table: {
        type: { summary: "string" },
      },
    },
    lineHeight: {
      control: { type: "text" },
      description: "行の高さ",
      table: {
        type: { summary: "string" },
      },
    },

    p: {
      control: { type: "number" },
      description: "パディング",
      table: {
        type: { summary: "number" },
      },
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const InputText = Template.bind({});
InputText.args = { hasError: false };

export const InputErrorText = Template.bind({});
InputErrorText.args = { hasError: true };
