export type Task = {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  video: string;
  figure: string;
  checkpoint: string;
  successRate: number;
  accent: string;
};

const mediaRoot = "/Codegen_Website/media/robotwin";

export const tasks: Task[] = [
  {
    id: "adjust-bottle",
    title: "Adjust Bottle",
    shortTitle: "Bottle",
    description: "Reorient and position a bottle to satisfy the target configuration.",
    video: `${mediaRoot}/adjust-bottle/rollout.mp4`,
    figure: `${mediaRoot}/adjust-bottle/success-rate.png`,
    checkpoint: "20k samples",
    successRate: 99,
    accent: "#e85d3f",
  },
  {
    id: "beat-block-hammer",
    title: "Beat Block with Hammer",
    shortTitle: "Hammer",
    description: "Grasp the hammer and execute a controlled strike on the target block.",
    video: `${mediaRoot}/beat-block-hammer/rollout.mp4`,
    figure: `${mediaRoot}/beat-block-hammer/success-rate.png`,
    checkpoint: "20k samples",
    successRate: 100,
    accent: "#e9a23b",
  },
  {
    id: "rank-blocks-color",
    title: "Rank Blocks by Color",
    shortTitle: "Color",
    description: "Identify colored blocks and arrange them into the requested order.",
    video: `${mediaRoot}/rank-blocks-color/rollout.mp4`,
    figure: `${mediaRoot}/rank-blocks-color/success-rate.png`,
    checkpoint: "20k samples",
    successRate: 55,
    accent: "#589a8d",
  },
  {
    id: "rank-blocks-size",
    title: "Rank Blocks by Size",
    shortTitle: "Size",
    description: "Compare multiple blocks and place them in the correct size ordering.",
    video: `${mediaRoot}/rank-blocks-size/rollout.mp4`,
    figure: `${mediaRoot}/rank-blocks-size/success-rate.png`,
    checkpoint: "18k samples",
    successRate: 24,
    accent: "#4878a8",
  },
  {
    id: "click-alarm-clock",
    title: "Click Alarm Clock",
    shortTitle: "Clock",
    description: "Localize the alarm clock control and press it with precise contact.",
    video: `${mediaRoot}/click-alarm-clock/rollout.mp4`,
    figure: `${mediaRoot}/click-alarm-clock/success-rate.png`,
    checkpoint: "20k samples",
    successRate: 89,
    accent: "#7566a8",
  },
  {
    id: "click-bell",
    title: "Click Bell",
    shortTitle: "Bell",
    description: "Approach the bell and activate its top button without disturbing the scene.",
    video: `${mediaRoot}/click-bell/rollout.mp4`,
    figure: `${mediaRoot}/click-bell/success-rate.png`,
    checkpoint: "19k samples",
    successRate: 91,
    accent: "#bd6683",
  },
];
