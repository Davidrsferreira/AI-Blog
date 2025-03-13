import OpenAI from "openai";

export default async function handler(req, res) {
  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const model = "gpt-4o-mini-2024-07-18";

  const topic = "dog ownership";
  const keywords = "puppy training adopting breeds";

  const response = await client.chat.completions.create({
    model: model,
    messages: [
      {
        role: "system",
        content:
          "You are a SEO friendly blog post generator called AI-Blog. You are disigned to output markdown without frontmatter.",
      },
      {
        role: "user",
        content: `Generate me a short seo blog post on the following topic delimited by triple hyphens: 
        ---
        ${topic}
        --- 
        targeting the following comma separeted keywords delimited by triple hyphens: 
        ---
        ${keywords}
        ---`,
      },
    ],
  });

  const postContent = response.choices[0]?.message?.content;

  const seoResponse = await client.chat.completions.create({
    model: model,
    messages: [
      {
        role: "system",
        content:
          "You are a SEO friendly blog post generator called AI-Blog. You are disigned to output JSON. Do not include HTML tags in your output, the output json format must be {title: 'title example', metaData: 'metadata example'}",
      },
      {
        role: "user",
        content: `Generate a SEO friendly title and a SEO friendly meta for the following ${postContent}`,
      },
    ],
    response_format: { type: "json_object" },
  });

  const { title, metadata } = seoResponse.choices[0]?.message?.content || {};

  res.status(200).json({ post: { postContent, title, metadata } });
}
