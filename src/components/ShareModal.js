import React from 'react'
import {
    EmailShareButton, EmailIcon,
    FacebookShareButton, FacebookIcon,
    TelegramShareButton, TelegramIcon,
    TwitterShareButton, TwitterIcon,
    WhatsappShareButton, WhatsappIcon,
    RedditShareButton, RedditIcon,
    LinkedinShareButton, LinkedinIcon,
    ViberShareButton, ViberIcon,
    FacebookMessengerShareButton, FacebookMessengerIcon,
    InstapaperShareButton, InstapaperIcon,
} from 'react-share'

const ShareModal = ({ url }) => {
    return (
        <div className="d-flex justify-content-between px-4 py-2">
            <FacebookShareButton url={url} id="facebookBtn">
                <FacebookIcon round={true} size={32} />
            </FacebookShareButton>

            <FacebookMessengerShareButton url={url} >
                <FacebookMessengerIcon round={true} size={32} />
            </FacebookMessengerShareButton>

            <TwitterShareButton url={url} >
                <TwitterIcon round={true} size={32} />
            </TwitterShareButton>

            <EmailShareButton url={url} >
                <EmailIcon round={true} size={32} />
            </EmailShareButton>

            <RedditShareButton url={url} >
                <RedditIcon round={true} size={32} />
            </RedditShareButton>

            <TelegramShareButton url={url} >
                <TelegramIcon round={true} size={32} />
            </TelegramShareButton>

            <WhatsappShareButton url={url} >
                <WhatsappIcon round={true} size={32} />
            </WhatsappShareButton>

            <LinkedinShareButton url={url} >
                <LinkedinIcon round={true} size={32} />
            </LinkedinShareButton>

            <ViberShareButton url={url} >
                <ViberIcon round={true} size={32} />
            </ViberShareButton>

            <InstapaperShareButton url={url} >
                <InstapaperIcon round={true} size={32} />
            </InstapaperShareButton>

        </div>
    )
}

export default ShareModal
