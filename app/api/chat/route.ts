import { openai } from '@ai-sdk/openai'
import { streamText } from 'ai'

export const runtime = 'edge'

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    const result = streamText({
      model: openai('gpt-4-turbo'),
      messages,
      system: `You are an AI assistant for the Modus platform, an enterprise AI system similar to Palantir AIP.

Your capabilities include:
- Helping users create and manage AI agents
- Building automated workflows
- Analyzing enterprise data and documents
- Providing insights from connected data sources
- Assisting with platform navigation and features

Be helpful, professional, and provide actionable guidance. When discussing technical implementations,
be specific and detailed. Always prioritize data security and compliance in your recommendations.`,
    })

    return result.toTextStreamResponse()
  } catch (error) {
    console.error('Chat API error:', error)
    return new Response('Internal Server Error', { status: 500 })
  }
}
