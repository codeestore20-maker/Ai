import { ModelProvider } from 'model-bank';

import type { OpenAICompatibleFactoryOptions } from '../../core/openaiCompatibleFactory';
import { createOpenAICompatibleRuntime } from '../../core/openaiCompatibleFactory';

export const params = {
  baseURL: 'https://llm.wavespeed.ai/v1',
  debug: {
    chatCompletion: () => process.env.DEBUG_WAVESPEED_CHAT_COMPLETION === '1',
  },
  provider: ModelProvider.WaveSpeed,
} satisfies OpenAICompatibleFactoryOptions;

export const LobeWaveSpeedAI = createOpenAICompatibleRuntime(params);
