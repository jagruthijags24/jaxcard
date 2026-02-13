import "./features.css"
import "./card.css"
import transactionImg from "../assets/images/transaction-history.jpg"
import expenseImg from "../assets/images/expense-tracker.jpg"

export default function Features() {
    return (
        <section className="features">
            <div className="featuresHeader">
                <h2> <span className="emphasis">Jax</span>Card Features</h2>
                <p className="featureHeaderText">
                    It's pretty similar to other financial apps you've found out there.
                    However, we have multiple types of secured transactions utilizing the newest technologies. 
                </p>
            </div>

            <div className="featuresTwoColumn">
                <section className="cardFeature">
                    <div className="cardFeatureLeft">
                        <h3 className="cardFeatureHeaderText">Instant Balance Reflection</h3>
                        <p className="cardFeatureText">
                            Get your current balance as soon as a transaction is completed. 
                            No more waiting for transactions to post before your actual balance is reflected.
                        </p>
                        <button className="featuresLearnBtn">Learn More</button>
                    </div>
                    <div className="cardFeatureRight">
                        <img className="cardImg" src={transactionImg} alt="App showing balance and transactions" />
                    </div>
                </section>

                <section className="cardFeature cardFeatureReverse">
                    <div className="cardFeatureLeft">
                        <h3 className="cardFeatureHeaderText">Instant Transaction Tracker</h3>
                        <p className="cardFeatureText">
                            Access every transaction you've ever made as a JaxCard holder. 
                            We never delete transaction history so you can have peace of mind and added security all the time.
                        </p>
                        <button className="featuresLearnBtn">Learn More</button>
                    </div>
                    <div className="cardFeatureRight">
                        <img className="cardImg" src={expenseImg} alt="Transaction history dashboard" />
                    </div>
                </section>
            </div>
        </section>
    )
}