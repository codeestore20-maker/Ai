import type { ModelProviderCard } from '@/types/llm';

// ref: https://wavespeed.ai/llm/model
const WaveSpeed: ModelProviderCard = {
  chatModels: [],
  checkModel: 'minimax/minimax-m2.7',
  description:
    'WaveSpeed AI provides a unified API gateway with access to 700+ AI models including MiniMax, offering ultra-fast inference with OpenAI-compatible endpoints.',
  id: 'wavespeed',
  modelsUrl: 'https://wavespeed.ai/llm/model',
  name: 'WaveSpeed',
  settings: {
    proxyUrl: {
      placeholder: 'https://llm.wavespeed.ai/v1',
    },
    sdkType: 'openai',
    showModelFetcher: false,
  },
  url: 'https://wavespeed.ai',
};

export default WaveSpeed;
