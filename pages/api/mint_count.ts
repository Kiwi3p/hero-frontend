// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ethers } from "ethers";
import { InfuraProvider } from "@ethersproject/providers";
import { mintContractAbi } from "../../data/mintContractAbit";

type ResponsePayload = {
  count: number
  limit: number
}

async function getMintCount() {
  let provider = new InfuraProvider(process.env.ETHEREUM_NETWORK, {
    projectId: "b4eaa3d90c144a089b770328a0b883fe",
    projectSecret: "249dcf240fba4659bbccba05c7c2b2aa"
  });
  let contractAddress: string = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!;
  let contract = new ethers.Contract(contractAddress, mintContractAbi, provider);
  let tokenSupply = await contract.tokenSupply();
  return { count: parseInt(tokenSupply.toString()), limit: 5555 }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponsePayload>
) {
  res.setHeader('Cache-Control', 'max-age=0, s-maxage=60');
  res.status(200).json(await getMintCount())
}
