import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {setDetailData} from "../contexts/detailSlice"

export default function Card({nft}) {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setDetailData(nft))
    }, [])



    return (
        <Link to={`/detail/${nft.name}`} style={{textDecoration:"none"}} className="mx-auto text-dark">
            <div className="card m-2" style={{width:" 18rem"}}>
                <div className="mx-auto my-2" style={{width:" 11rem"}}>
                <img  src={nft.image} className=" card-img-top" alt="..." />


                </div>
               
                <div  className="card-body " >
                    <h5 className="">{nft.name}</h5>
                    <h5 className="">{nft.seller_fee_basis_points}</h5>

                 
                </div>
            </div>

        </Link>
    )
}
