export type Task = {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  video: string;
  figure?: string;
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
    video: `${mediaRoot}/01_adjust_bottle_01/rollout.mp4`,
    figure: `${mediaRoot}/01_adjust_bottle_01/success-rate.png`,
    checkpoint: "20k samples",
    successRate: 99,
    accent: "#e85d3f",
  },
  {
    id: "beat-block-hammer",
    title: "Beat Block with Hammer",
    shortTitle: "Hammer",
    description: "Grasp the hammer and execute a controlled strike on the target block.",
    video: `${mediaRoot}/02_beat_block_hammer_01/rollout.mp4`,
    figure: `${mediaRoot}/02_beat_block_hammer_01/success-rate.png`,
    checkpoint: "20k samples",
    successRate: 100,
    accent: "#e9a23b",
  },
  {
    id: "rank-blocks-color",
    title: "Rank Blocks by Color",
    shortTitle: "Color",
    description: "Identify colored blocks and arrange them into the requested order.",
    video: `${mediaRoot}/03_blocks_ranking_rgb/rollout.mp4`,
    figure: `${mediaRoot}/03_blocks_ranking_rgb/success-rate.png`,
    checkpoint: "20k samples",
    successRate: 55,
    accent: "#589a8d",
  },
  {
    id: "rank-blocks-size",
    title: "Rank Blocks by Size",
    shortTitle: "Size",
    description: "Compare multiple blocks and place them in the correct size ordering.",
    video: `${mediaRoot}/04_blocks_ranking_size/rollout.mp4`,
    checkpoint: "18k samples",
    successRate: 24,
    accent: "#4878a8",
  },
  {
    id: "click-alarm-clock",
    title: "Click Alarm Clock",
    shortTitle: "Clock",
    description: "Localize the alarm clock control and press it with precise contact.",
    video: `${mediaRoot}/05_click_alarmclock_01/rollout.mp4`,
    figure: `${mediaRoot}/05_click_alarmclock_01/success-rate.png`,
    checkpoint: "20k samples",
    successRate: 89,
    accent: "#7566a8",
  },
  {
    id: "click-bell",
    title: "Click Bell",
    shortTitle: "Bell",
    description: "Approach the bell and activate its top button without disturbing the scene.",
    video: `${mediaRoot}/06_click_bell_00/rollout.mp4`,
    figure: `${mediaRoot}/06_click_bell_00/success-rate.png`,
    checkpoint: "19k samples",
    successRate: 91,
    accent: "#bd6683",
  },
];
