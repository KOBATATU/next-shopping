import { ComponentMeta, ComponentStory } from "@storybook/react";
import ShapeImage from "./index";

export default {
  title: "Atoms/ShapeImage",
  argTypes: {
    shape: {
      options: ["shape", "circle"],
      defaultValue: "shape",
      description: "画像のshape",
      control: { type: "radio" },
      table: {
        type: { summary: "shape | circle " },
      },
    },
    src: {
      control: { type: "text" },
      description: "画像のパス",
      defaultValue: "/images/sample/1.jpg",
      table: {
        type: { summary: "string" },
      },
    },
    width: {
      control: { type: "number" },
      description: "横幅",
      defaultValue: 320,
      table: {
        type: { summary: "number" },
      },
    },
    height: {
      control: { type: "number" },
      description: "縦幅",
      defaultValue: 320,
      table: {
        type: { summary: "number" },
      },
    },
  },
} as ComponentMeta<typeof ShapeImage>;

const Template: ComponentStory<typeof ShapeImage> = (args) => (
  <ShapeImage {...args} />
);

export const Shape = Template.bind({});
Shape.args = { shape: "shape" };

export const Circle = Template.bind({});
Circle.args = { shape: "circle" };
