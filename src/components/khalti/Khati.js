import React from "react";
import KhaltiCheckout from "khalti-checkout-web";
import { Button } from "@material-ui/core";
import myKey from "./KhaltiConfig"
import { useDispatch } from "react-redux";
import { createBooking } from "../../redux/actions/bookingAction";
import { GLOBALTYPES } from "../../redux/actions/globalTypes";

const Khalti = ({
    booking, token, navigate
}) => {

    const dispatch = useDispatch();

    let config = {
        publicKey: myKey.publicTestKey,
        productIdentity: "12555321",
        productName: "Nepal Trip",
        productUrl: "http://localhost:3000/checkout",
        eventHandler: {
            onSuccess() {
                dispatch(createBooking({ ...booking, payment_type: "Khalti" }, navigate,token))
            },
            onError(error) {
                dispatch({ type: GLOBALTYPES.ALERT, payload: { error: error } })
            },
            onClose() {
                console.log("widget is closing");
            },
        },
        paymentPreference: [
            "KHALTI",
        ],
    };
    let checkout = new KhaltiCheckout(config);
    let buttonStyles = {
        backgroundColor: "purple",
        padding: "6px",
        color: "white",
        cursor: "pointer",
        fontWeight: "600",
        border: "1px solid white",
    }
    return (
        <>
            <Button
                onClick={() => { checkout.show({ amount: booking.total_amount }); }}
                style={buttonStyles}
                id="khaltiBtn"
                >
                Khalti Pay
            </Button>
        </>
    );
}

export default Khalti;