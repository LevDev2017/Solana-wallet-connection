import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { exit, setPublicKey } from "../contexts/walletslice"

export default function Nav({ display }) {

    const dispatch = useDispatch()

    const clickHand = () => {


        window.solana.disconnect()
           window.solana.on('disconnect', () =>{
                dispatch(exit())
                dispatch(setPublicKey(""))
            } )
    }


    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className={`d-${display} text-dark`} to="/">Home</Link>
                    <ul className="navbar-nav  mb-2 mb-lg-0 ms-auto">
                        <li className="nav-item">
                            <button onClick={clickHand} class="btn btn-light" aria-current="page" href="#">Disconnect Wallet</button>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    )
}
