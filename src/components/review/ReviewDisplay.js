import React, { useState, useEffect } from 'react'
import ReviewCard from './ReviewCard'

const ReviewDisplay = ({review, hotel, replyCm}) => {
    const [showRep, setShowRep] = useState([])
    const [next, setNext] = useState(1)

    useEffect(() => {
        setShowRep(replyCm?.slice(replyCm?.length - next))
    },[replyCm, next])

    return (
        <div className="comment_display">
            <ReviewCard review={review} hotel={hotel} reviewId={review?._id} >
                <div className="pl-4">
                    {
                        showRep?.map((item, index) => (
                            item?.reply &&
                            <ReviewCard
                            key={index}
                            review={item}
                            hotel={hotel}
                            reviewId={review?._id}
                             />
                        ))
                    }

                    {
                        replyCm?.length - next > 0
                        ? <div style={{cursor: 'pointer', color: 'crimson'}}
                        onClick={() => setNext(next + 10)}>
                            See more comments...
                        </div>

                        : replyCm?.length > 1 &&
                        <div style={{cursor: 'pointer', color: 'crimson'}}
                        onClick={() => setNext(1)}>
                            Hide comments...
                        </div>
                    }
                </div>
            </ReviewCard>
        </div>
    )
}

export default ReviewDisplay
