import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_KEY });

export async function generateVehicles(count: number) {
  const prompt = `
Generate ${count} realistic vehicle records in JSON array format.
Fields: vin, ownerName, model, mileage, serviceHistory.
`;

  const completion = await openai.chat.completions.create({
    // prefer gpt-5-mini for faster, consistent results
    model: "gpt-5-mini",
    messages: [{ role: "user", content: prompt }]
  });

  return JSON.parse(completion.choices[0].message.content!);
}
