import { Rating } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getHotels } from '../../redux/actions/hotelAction'
// import { createComment } from '../../redux/actions/commentAction'
import { createReview, getHotelReviews } from '../../redux/actions/reviewAction'

const InputReview = ({ children, hotel, user, onReply, setOnReply }) => {
    console.log(onReply);

    const [content, setContent] = useState('')
    const [value, setValue] = React.useState(0);

    const token = localStorage.getItem('token')

    const dispatch = useDispatch()

    const handleSubmit = (e) => {

        e.preventDefault()

        if (!content.trim()) {
            if (setOnReply) return setOnReply(false);
            return;
        }

        setContent('')

        const newReview = {
            review: content,
            hotel_rating: value,
            likes: [],
            user,
            createdAt: new Date().toISOString(),
            reply: onReply && onReply.reviewId,
            tag: onReply && onReply?.user
        }

        dispatch(createReview({ hotel, user, newReview, token }))
        // dispatch(getHotelReviews({ hotel }))
        // dispatch(getHotels())

        if (setOnReply) return setOnReply(false);
    }

    return (
        <form className="card-footer comment_input mt-2" style={{

        }} onSubmit={handleSubmit} >
            {children}
            <div className=" text-center">
                <Rating
                    className="user_hotel_rating"
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                />
            </div>

            <input type="text" placeholder="Add your reviews..."
                value={content} onChange={e => setContent(e.target.value)} />

            <button type="submit" className="postBtn">
                Post
            </button>
        </form>
    )
}

export default InputReview
