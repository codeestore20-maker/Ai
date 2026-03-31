import { type AIChatModelCard } from '../types/aiModel';

// ref: https://wavespeed.ai/llm/model
const wavespeedChatModels: AIChatModelCard[] = [
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      vision: true,
    },
    contextWindowTokens: 204_800,
    description:
      'MiniMax M2.7 is a next-generation flagship text model designed for agent-centric workflows, with strong improvements in coding, complex office tasks, and long-context reasoning.',
    displayName: 'MiniMax M2.7',
    enabled: true,
    id: 'minimax/minimax-m2.7',
    maxOutput: 131_072,
    pricing: {
      currency: 'USD',
      units: [
        { name: 'textInput', rate: 0.3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 1.2, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2026-03-18',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      vision: true,
    },
    contextWindowTokens: 204_800,
    description:
      'MiniMax M2.5 offers top-tier performance and ultimate cost-effectiveness, easily handling complex tasks at approximately 60 tokens per second.',
    displayName: 'MiniMax M2.5',
    enabled: true,
    id: 'minimax/minimax-m2.5',
    maxOutput: 131_072,
    pricing: {
      currency: 'USD',
      units: [
        { name: 'textInput', rate: 0.2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2026-02-12',
    type: 'chat',
  },
];

export const allModels = [...wavespeedChatModels];

export default allModels;
