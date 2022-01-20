// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import dataRatib from "data/ratib/al-athos.json";
type Data = {
  code: number;
  status: string;
}

const RatibAthos = (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {

  const returnData = {
    code: 200,
    status: "OK",
    data: dataRatib
  }
  res.status(200).json(returnData)
}

export default RatibAthos;