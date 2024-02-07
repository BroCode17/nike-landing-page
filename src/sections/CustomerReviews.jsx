import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants"

const CustomerReviews = () => {
  return (
    <section
    className="max-container">
    
    <h3 className="font-palanquin text-center text-4xl font-bold">
    What Our <span className="text-coral-red">Customers</span> Say? 
    </h3>
    <p className="info-text m-auto mt-0
    max-w-lg text-center">Hear genuine stories for out satisfied customers about their
    exceptional experiences with us</p>

    <div className="mt-24 flex flex-1 justify-evenly item-center
    max-lg:flex-col gap-14">
    {reviews.map(r => (
      <ReviewCard key={r.customerName}
      imgURL ={r.imgURL}
      customerName={r.customerName}
      rating={r.rating}
      feedback={r.feedback}/>
    ))}
    </div>
    </section>
  )
}



export default CustomerReviews