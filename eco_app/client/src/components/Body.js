import { React, useState, useEffect } from "react";
import ContactInfo from "./ContactInfo.js";
import eliPic from "../images/eliPic.png";
import EarnPopUp from "./EarnPopUp.js";
import abi from "../abi";

const TronWeb = require("tronweb");

function Body() {
    const [message, setMessage] = useState(<h3> Connecting... </h3>);
    const [details, setDetails] = useState({
        name: "none",
        address: "none",
        network: "none",
    });

    const getWalletDetails = async () => {
        if (window.tronWeb) {
            //checking if wallet injected
            if (window.tronWeb.ready) {
                //we have wallet and we are logged in
                setMessage(<h3>Wallet Connected</h3>);
                setDetails({
                    name: await window.tronWeb.defaultAddress.name,
                    address: await window.tronWeb.defaultAddress.base58,
                    network: await window.tronWeb.fullNode.host,
                });
            } else {
                //we have wallet but not logged in
                setMessage(<h3>Wallet Detected, Please Approve Connection</h3>);
                setDetails({
                    name: "none",
                    address: "none",
                    network: "none",
                });
            }
        } else {
            //wallet is not detected at all
            setMessage(<h3>Wallet Not Detected</h3>);
        }
    };

    useEffect(() => {
        const interval = setInterval(async () => {
            await getWalletDetails();
        }, 500);
        return () => {
            clearInterval(interval);
        };
    });

    const api = "https://api.shasta.trongrid.io";
    const privateKey =
        "1cdee40ae045e22e7035fbea581c1e380925c36986f5deb445ee0ff3471ade47";

    const tronWeb = new TronWeb(api, api, api, privateKey);

    tronWeb.setAddress("TKSzPvJcCNYntfwdaP4YRMWpkU1LuuMt34");

    const contract = tronWeb.contract(
        abi,
        "TGNX6SSrByxG4q9AchFuWns8HjMtvWVVHZ"
    );

    const [totalSupply, getTotalSupply] = useState();
    useEffect(() => {
        const s = async () => {
            const supply = await contract.totalSupply().call();
            getTotalSupply(supply.toString());
        };
        s();
    });

    const [balance, getBalance] = useState();
    useEffect(() => {
        const b = async () => {
            try {
                const supply = await contract.balanceOf(details.address).call();
                getBalance(supply.toString());
            } catch (err) {
                // don't do nothing
            }
        };
        b();
    });

    const rewardUser = async (amount) => {
        function sleep(ms) {
            return new Promise((resolve) => setTimeout(resolve, ms));
        }
        await sleep(500);
        console.log(details.address);
        console.log(amount);

        await contract.reward(details.address, amount).send();
    };

    const spendEco = async (amount) => {
        function sleep(ms) {
            return new Promise((resolve) => setTimeout(resolve, ms));
        }
        await sleep(1000);
        console.log(details.address);
        console.log(amount);

        await contract.spend(amount).send();
    };

    return (
        <div>
            <EarnPopUp earn={rewardUser} />
            <div id="about-section">
                <h2>About</h2>
                <section>
                    $ECO is a rewards token built on the sustainable blockchain
                    Tron. We firmly believe that individuals with a green
                    footprint should be rewarded for their actions. We also
                    believe that people would choose to be greener, if they were
                    rewarded, hence the need for $ECO is earned from completing
                    certain environmentally friendly actions; including,
                    sustainable commuting and travel, beach and park cleanups,
                    recycling, and being active in environmental clubs and
                    groups. We firmly believe that individuals with a green
                    footprint should be rewarded for their actions. We also
                    believe that more people would choose to be green, if they
                    were rewarded, hence the need for $ECO.
                </section>
            </div>
            <div id="contact-section">
                <h2>Contact Us</h2>
                <div id="contact-info-container">
                    <ContactInfo
                        name="Aden Lu"
                        email="lu.ad@northeastern.edu"
                        image={eliPic}
                    />
                    <ContactInfo
                        name="Jack Miller"
                        email="dheeraj.valluru@gmail.com"
                        image={eliPic}
                    />
                    <ContactInfo
                        name="Dheeraj Valluru"
                        email="dheeraj.valluru@gmail.com"
                        image={eliPic}
                    />
                    <ContactInfo
                        name="Elijah Muraoka"
                        email="elijahmuraoka.services@gmail.com"
                        image={eliPic}
                    />
                    <ContactInfo
                        name="Mikko Tripakis"
                        email="tripakis.m@northeastern.edu"
                        image={eliPic}
                    />
                    <ContactInfo
                        name="Dheeraj Valluru"
                        email="dheeraj.valluru@gmail.com"
                        image={eliPic}
                    />
                </div>
            </div>
        </div>
    );
}

export default Body;
