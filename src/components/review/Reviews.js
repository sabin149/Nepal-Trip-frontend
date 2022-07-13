import React, { useState, useEffect } from 'react'
import ReviewDisplay from './ReviewDisplay'

const Reviews = ({hotel}) => {
    const [comments, setComments] = useState([])
    const [showReviews, setShowReviews] = useState([])
    const [next, setNext] = useState(2)

    const [replyComments, setReplyComments] = useState([])

    useEffect(() => {
        const newCm = hotel && hotel?.hotel_reviews?.filter(cm => !cm?.reply)
        setComments(newCm)
        setShowReviews(newCm?.slice(newCm?.length - next))
    },[hotel, hotel?.hotel_reviews, next])

    useEffect(()=> {
        const newRep = hotel && hotel?.hotel_reviews?.filter(cm => cm?.reply)
        setReplyComments(newRep)
    }, [hotel, hotel?.hotel_reviews])

    return (
        <div className="comments">
            {
                showReviews?.map((review, index) => (
                   
                    <ReviewDisplay key={index} review={review} hotel={hotel}
                    replyCm={replyComments?.filter(item => item?.reply === review?._id)} />
                ))
            }

            {
                comments?.length - next > 0
                ? <div className="p-2 border-top"
                style={{cursor: 'pointer', color: 'crimson'}}
                onClick={() => setNext(next + 10)}>
                    See more comments...
                </div>

                : comments?.length > 2 &&
                <div className="p-2 border-top"
                style={{cursor: 'pointer', color: 'crimson'}}
                onClick={() => setNext(2)}>
                    Hide comments...
                </div>
            }
        </div>
    )
}

export default Reviews
