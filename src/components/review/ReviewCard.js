import React, { useState, useEffect } from 'react'
import Avatar from "./Avatar"
import { Link } from 'react-router-dom'
import moment from 'moment'

import LikeButton from '../review/LikeButton'
import { useSelector, useDispatch } from 'react-redux'
import ReviewMenu from "./ReviewMenu"
// import { updateComment, likeComment, unLikeComment } from '../../../redux/actions/commentAction'
import InputReview from "./InputReview"

const ReviewCard = ({ children, review, hotel, reviewId }) => {

    // console.log(review)
    // const { auth } = useSelector(state => state)
    const userID=localStorage.getItem('userID')
    const dispatch = useDispatch()

    const [content, setContent] = useState('')
    const [readMore, setReadMore] = useState(false)

    const [onEdit, setOnEdit] = useState(false)
    const [isLike, setIsLike] = useState(false)
    const [loadLike, setLoadLike] = useState(false)

    const [onReply, setOnReply] = useState(false)


    useEffect(() => {
        setContent(review?.review)
        setIsLike(false)
        setOnReply(false)
        if (review?.likes?.find(like => like?._id === userID)) {
            setIsLike(true)
        }
    }, [review, userID])

    const handleUpdate = () => {
        // if (review.content !== content) {
        //     dispatch(updateComment({ review, post, content, auth }))
        //     setOnEdit(false)
        // } else {
        //     setOnEdit(false)
        // }
    }


    const handleLike = async () => {
        // if (loadLike) return;
        // setIsLike(true)

        // setLoadLike(true)
        // await dispatch(likeComment({ review, post, auth }))
        // setLoadLike(false)
    }

    const handleUnLike = async () => {
        // if (loadLike) return;
        // setIsLike(false)

        // setLoadLike(true)
        // await dispatch(unLikeComment({ review, post, auth }))
        // setLoadLike(false)
    }


    const handleReply = () => {
        if (onReply) return setOnReply(false)
        setOnReply({ ...review, reviewId })
    }

    const styleCard = {
        opacity: review._id ? 1 : 0.5,
        pointerEvents: review._id ? 'inherit' : 'none'
    }

    return (
        <div className="comment_card mt-2" style={styleCard}>
            <span className="d-flex text-dark">
                <Avatar src={review?.user?.avatar} size="small-avatar" />
                <h6 className="mx-1">{review.user.username}</h6>
            </span>

            <div className="comment_content">
                <div className="flex-fill"
                >
                    {
                        onEdit
                            ? <textarea rows="5" value={content}
                                onChange={e => setContent(e.target.value)} />

                            : <div>
                                {
                                    review.tag && review.tag._id !== review.user._id &&
                                    <span className="me-1">
                                        @{review?.tag?.username}
                                    </span>
                                }
                                <span>
                                    {
                                        content.length < 80 ? content :
                                            readMore ? content + ' ' : content.slice(0, 80) + '....'
                                    }
                                </span>
                                {
                                    content.length > 80 &&
                                    <span className="readMore" onClick={() => setReadMore(!readMore)}>
                                        {readMore ? 'Hide content' : 'Read more'}
                                    </span>
                                }
                            </div>
                    }


                    <div style={{ cursor: 'pointer' }}>
                        <small className="text-muted me-3">
                            {moment(review.createdAt).fromNow()}
                        </small>

                        <small className="font-weight-bold me-3">
                            {review.likes.length} likes
                        </small>

                        {
                            onEdit
                                ? <>
                                    <small className="font-weight-bold me-3"
                                        onClick={handleUpdate}>
                                        update
                                    </small>
                                    <small className="font-weight-bold me-3"
                                        onClick={() => setOnEdit(false)}>
                                        cancel
                                    </small>
                                </>

                                : <small className="font-weight-bold me-3"
                                    onClick={handleReply}>
                                    {onReply ? 'cancel' : 'reply'}
                                </small>
                        }

                    </div>

                </div>


                <div className="d-flex align-items-center mx-2" style={{ cursor: 'pointer' }}>
                    <ReviewMenu hotel={hotel} review={review} setOnEdit={setOnEdit} />
                    <LikeButton isLike={isLike} handleLike={handleLike} handleUnLike={handleUnLike} />
                </div>
            </div>

            {
                onReply &&
                <InputReview hotel={hotel} onReply={onReply} setOnReply={setOnReply} >
                    <span className="user_hotel_rating">
                        @{onReply.user.username}:
                    </span>
                </InputReview>
            }

            {children}
        </div>
    )
}

export default ReviewCard
