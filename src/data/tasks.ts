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
    checkpoint: "5k samples",
    successRate: 100,
    accent: "#e85d3f",
  },
  {
    id: "beat-block-hammer",
    title: "Beat Block with Hammer",
    shortTitle: "Hammer",
    description: "Grasp the hammer and execute a controlled strike on the target block.",
    video: `${mediaRoot}/02_beat_block_hammer_01/rollout.mp4`,
    figure: `${mediaRoot}/02_beat_block_hammer_01/success-rate.png`,
    checkpoint: "7k samples",
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
    successRate: 91,
    accent: "#589a8d",
  },
  {
    id: "rank-blocks-size",
    title: "Rank Blocks by Size",
    shortTitle: "Size",
    description: "Compare multiple blocks and place them in the correct size ordering.",
    video: `${mediaRoot}/04_blocks_ranking_size/rollout.mp4`,
    figure: `${mediaRoot}/04_blocks_ranking_size/success-rate.png`,
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
    checkpoint: "15k samples",
    successRate: 100,
    accent: "#7566a8",
  },
  {
    id: "click-bell",
    title: "Click Bell",
    shortTitle: "Bell",
    description: "Approach the bell and activate its top button without disturbing the scene.",
    video: `${mediaRoot}/06_click_bell_00/rollout.mp4`,
    figure: `${mediaRoot}/06_click_bell_00/success-rate.png`,
    checkpoint: "10k samples",
    successRate: 100,
    accent: "#bd6683",
  },
  {
    id: "dump-bin-bigbin",
    title: "Dump Bin into Big Bin",
    shortTitle: "Dump Bin",
    description: "Grasp the small bin and pour its contents into the larger target bin.",
    video: `${mediaRoot}/07_dump_bin_bigbin_00/rollout.mp4`,
    figure: `${mediaRoot}/07_dump_bin_bigbin_00/success-rate.png`,
    checkpoint: "3k samples",
    successRate: 100,
    accent: "#d16b4e",
  },
  {
    id: "move-can-pot",
    title: "Move Can to Pot",
    shortTitle: "Can",
    description: "Pick up the can and place it securely inside the target pot.",
    video: `${mediaRoot}/08_move_can_pot_00/rollout.mp4`,
    figure: `${mediaRoot}/08_move_can_pot_00/success-rate.png`,
    checkpoint: "10k samples",
    successRate: 100,
    accent: "#b98a3f",
  },
  {
    id: "move-playingcard-away",
    title: "Move Playing Card Away",
    shortTitle: "Card",
    description: "Grasp and relocate the playing card away from its initial workspace.",
    video: `${mediaRoot}/09_Move_Playingcard_Away/rollout.mp4`,
    figure: `${mediaRoot}/09_Move_Playingcard_Away/success-rate.png`,
    checkpoint: "9k samples",
    successRate: 100,
    accent: "#4f8f8c",
  },
  {
    id: "move-stapler-pad",
    title: "Move Stapler to Pad",
    shortTitle: "Stapler",
    description: "Move the stapler from the workspace and place it onto the target pad.",
    video: `${mediaRoot}/10_Move_Stapler_Pad/rollout.mp4`,
    figure: `${mediaRoot}/10_Move_Stapler_Pad/success-rate.png`,
    checkpoint: "19k samples",
    successRate: 82,
    accent: "#667eaf",
  },
];
