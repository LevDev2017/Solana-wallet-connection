import React from 'react'
import { useSelector } from 'react-redux'
import Nav from '../components/Nav';
import ConnectPage from "../components/Connect"

export default function Detail() {

    const isConnected = useSelector((state) => state.wallet.isConnected)


    const nftData = useSelector((state) => (state.detail.data))

    console.log(nftData);

    if(!isConnected){
        return (<ConnectPage/>)
    }
    return (
        <div>

            <Nav display={""}/>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-5">
                        <img className="img-fluid" src={nftData.image} />

                    </div>
                    <div className="col-7">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="text-light">{nftData.name}</h1>
                            </div>
                           
                            <div className="col-12  mt-5">
                                <p className="text-light">{nftData.collection.name}
                                <br/> 
                                {nftData.seller_fee_basis_points}      
                                <br/>
                                {nftData.properties.maxSupply}                          
                                </p>
                            </div>

                           
                

                        </div>

                    </div>

                </div>
                <div className="row mt-5">
                    <div className="col-12 text-light text-center">
                        {nftData.description}

                    </div>

                </div>

            </div>

        </div>
    )
}
