import React, { useState, useEffect } from 'react'
import Connect from '../components/Connect'
import Card from '../components/Card'
import { useSelector } from 'react-redux'
import axios from "axios";
import {  clusterApiUrl } from "@solana/web3.js"; 
import { getParsedNftAccountsByOwner, isValidSolanaAddress, createConnectionConfig, } from "@nfteyez/sol-rayz";
import Nav from '../components/Nav';

function Home() {

    const isConnected = useSelector((state) => state.wallet.isConnected)
    const [loading, setLoading] = useState(true)

    const [nftData, setNftData] = useState([])


    useEffect(() => {
        async function data() {
            getNftTokenData()
                .then((data) => {
                    if (data) {
                        setNftData(data)
                        setLoading(false)
                    }

                })

        }
        console.log(isConnected);
        data();
        console.log(nftData);
    }, [isConnected]);


    const getAllNftData = async () => {
        try {

            if (isConnected === true) {
                console.log(true);
                const connect = await createConnectionConfig(clusterApiUrl("devnet"));
                const provider = window.solana;
                let ownerToken = provider.publicKey;
                const result = await isValidSolanaAddress(ownerToken);
                const nfts = await getParsedNftAccountsByOwner({
                    publicAddress: ownerToken,
                    connection: connect,
                    serialization: true,
                });
                console.log(nfts);

                return nfts;

            }
        } catch (error) {
            console.log(error);
        }
    };

    const getNftTokenData = async () => {
        try {
            let nftData = await getAllNftData();
            var data = Object.keys(nftData).map((key) => nftData[key]); let arr = [];
            let n = data.length;
            for (let i = 0; i < n; i++) {
                console.log(data[i].data.uri);
                let val = await axios.get(data[i].data.uri);
                arr.push(val);
            }
            console.log(`arr`)
            return arr;
        } catch (error) {
            console.log(error);
        }
    };



    if (!isConnected) {

        return <Connect />

    }
    if (loading) {
        return (
            <div className="text-light">
                LOADING ...
                
            </div>
        )
    }




    return (
        <div>

            <Nav display={"none"} />

            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex flex-wrap">
                        {
                            nftData.map((data) => (
                                <Card nft={data.data} />


                            ))




                        }





                    </div>

                </div>

            </div>



        </div>
    )
}

export default Home