"use client"
import React, { createContext, useContext, useEffect, useState } from "react";
import { readContract } from '@wagmi/core'
import { config } from "../_config/wallet";

import abi from "../abi/abi.json"
import { useAccount, useWriteContract } from "wagmi";
import { writeContractHook } from "../_utils/contract";

type PodcastData = {
    tokenId: number,
    ipId: `0x${string}`,
    audio: string,
    transcripts: string,
    cover: string,
    name: string,
    owner: string
}

type Notification = {
    type: string,
    indexOne: `0x${string}`,
    amount: number,
    recipient: `0x${string}`,
    message: string
}

type Props = {
    children?: React.ReactNode;
};

type StoreState = {
    podcastsData: PodcastData[],
    userName: string,
    notifications: Notification[],
}

const DataContext = createContext<StoreState>({
    podcastsData: [],
    userName: "",
    notifications: [],
});

export const useDataStore = () => useContext(DataContext);

export const DataContextProvider = (props: Props) => {
    const [ podcastsData, setPodcastData ] = useState<PodcastData[]>([]);
    const [ userName, setUserName ] = useState<string>("");
    const [ notifications, setNotifications ] = useState<Notification[]>([]);
    const account = useAccount()
    const { 
        writeContract 
      } = useWriteContract() 

    useEffect(() => {
        (async () => {
            let podcasts: PodcastData[] = [];
            const contract: any = process.env.NEXT_PUBLIC_CONTRACT
            const result = await readContract(config, {
                abi,
                address: contract,
                functionName: "getIpDetails",
            })
            console.log(result)
            if (Array.isArray(result)) {
                result.map(async (el: any) => {
                    let res = await readContract(config, {
                        abi,
                        address: contract,
                        functionName: "tokenURI",
                        args: [el.tokenId]
                    }) as string
                    let reqData = await fetch(res)
                    let json = await reqData.json()
                    let extReqData = await fetch(json["external_url"])
                    let jsonExt = await extReqData.json()
                    let ipOwner = await readContract(config, {
                        abi,
                        address: contract,
                        functionName: "owner",
                        args: [el.tokenId]
                    }) as `0x${string}`
                    let ownerName = await readContract(config, {
                        abi,
                        address: contract,
                        functionName: "getUserName",
                        account: ipOwner
                    }) as string
                    let data: PodcastData = {
                        tokenId: parseInt(el.tokenId),
                        ipId: el.ipId,
                        name: json.name,
                        audio: jsonExt.audio,
                        transcripts: jsonExt.transcripts,
                        cover: json.image,
                        owner: ownerName
                    }
                    podcasts.push(data)
                    setPodcastData(podcasts)
                });
            }
        })()
    }, [])

    useEffect(() => {
        if (account.address) {
            (async () => {
                const contract: any = process.env.NEXT_PUBLIC_CONTRACT
                try {
                    let res = await readContract(config, {
                        abi,
                        address: contract,
                        functionName: "getUserName",
                        account: account.address
                    }) as string
                    setUserName(res)

                } catch (err) {
                    const name = prompt("What user name would you like to use?") as string
                    await writeContractHook(writeContract, abi, "registerUser", [name])
                    setUserName(name)
                }
            })()
        }
    }, [account.address])

    return (
        <DataContext.Provider value={{
            podcastsData,
            userName,
            notifications
        }}>
            {props.children}
        </DataContext.Provider>
    )
}