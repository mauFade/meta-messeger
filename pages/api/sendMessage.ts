// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse<Data>
) {
  if (request.method !== "POST") {
    response.status(405).json({ name: "method not allowed" });
    return;
  }

  const { data } = request.body;

  const newData = {
    ...data,
    // Substitui o timestamp do usuário pelo timestamp so servidor
    created_at: Date.now(),
  };

  response.status(200).json({ name: "John Doe" });
}
