import React from 'react'
import onlineBanking from '../images/icon-online.svg'
import simpleBudgeting from '../images/icon-budgeting.svg'
import fastOnboarding from '../images/icon-onboarding.svg'
import openApi from '../images/icon-api.svg'

import moneyImg from '../images/image-currency.jpg'
import restaurantImg from '../images/image-restaurant.jpg'
import confettiImg from '../images/image-confetti.jpg'
import planeImg from '../images/image-plane.jpg'

const Main = () => {

    const easyBankArr = [
        {
            heading: "Online Banking",
            para: " Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
            image: onlineBanking
        }
        , {
            heading: "Simple Budgeting",
            para: " See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
            image: simpleBudgeting
        }
        , {
            heading: "Fast Onboarding",
            para: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
            image: fastOnboarding
        }, {
            heading: "Open API",
            para: " Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
            image: openApi
        }
    ]

    const articleArr = [
        {
            image: moneyImg,
            name: "By Claire Robinson",
            heading: "  Receive money in any currency with no fees",
            para: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …"

        }
        , {
            image: restaurantImg,
            name: "By Wilson Hutton",
            heading: "Treat yourself without worrying about money",
            para: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"

        }
        , {
            image: planeImg,
            name: "By Wilson Hutton",
            heading: "Take your Easybank card wherever you go",
            para: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases  while you’re abroad. We’ll even show you …"

        }
        , {
            image: confettiImg,
            name: "By Claire Robinson",
            heading: "Our invite-only Beta accounts are now live!",
            para: "After a lot of hard work by the whole team, we’re excited to launch our closed beta.  It’s easy to request an invite through the site ..."

        }
    ]
    return (
        <main className="main-container container">
            <section className="first-section">
                <div className="easy-bank-conatiner">
                    <h2 className="common-h2">Why choose Easybank?</h2>
                    <p className="common-para">
                        We leverage Open Banking to turn your bank account into your financial hub. Control
                        your finances like never before.</p>
                </div>
                <div className="facility-container">
                    {
                        easyBankArr.map((elem, index) => {
                            return <div key={index} className="card">
                                <div><img src={elem.image} alt="" className="card-img" /></div>
                                <h3 className="common-h3">{elem.heading}</h3>
                                <p className="common-para">{elem.para}</p>
                            </div>
                        })
                    }

                </div>
            </section>
            <section className="second-section">
                <h2 className="common-h2">Latest Articles</h2>
                <div className="articles-container">
                    {
                        articleArr.map((elem, index) => {
                            return <div key={index} className="article-card">
                                <figure className='article-figure'>
                                    <img src={elem.image} alt="" className="article-img" />
                                    <figcaption className='article-caption'>
                                        <p className="article-para">{elem.name}</p>
                                        <h1 className="article-h1">{elem.heading}</h1>
                                        <h2 className="article-h2">{elem.para}</h2></figcaption>
                                </figure>
                            </div>
                        })
                    }

                </div>
            </section>

        </main>
    )
}

export default Main