import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useSearchParams } from 'react-router-dom'
import { getOrderById } from '../../../state/Order/Action'
import { updatePayment } from '../../../state/Payment/Action'
import { Alert, AlertTitle, Grid } from '@mui/material'
import OrderTraker from '../Order/OrderTraker'
import AdressCard from '../adresscard/AdressCard'

const PaymentSuccess = () => {
    const [sessionId, setSessionId] = useState();
    const [paymentId, setPaymentId] = useState()
    const [referenceId, setReferenceId] = useState()
    const [paymentStatus, setPaymentStatus] = useState()
    const {orderId} = useParams()

    const dispatch = useDispatch();
    const {order} = useSelector(store => store)

    console.log("order", paymentId);

    useEffect(()=>{
        const urlParam = new URLSearchParams(window.location.search)
        console.log("ayudin");
        console.log("param", urlParam);
        setPaymentId(urlParam.get("session_id"))
    }, [])

    useEffect(()=>{
      if(paymentId & orderId){
          const data = {orderId, paymentId}
          console.log("datasa", data);
          dispatch(getOrderById(orderId))
          dispatch(updatePayment(data))
      }    
    }, [orderId, paymentId])
  return (
    <div className='px-2 lg:px-36'>
      <div className='flex flex-col justify-center items-center'>
        <Alert variant='filled' severity='success' sx={{mb:6, width:"fit-content"}}>
            <AlertTitle>Payment Success</AlertTitle>
            Congratulation Your Order Get Places
        </Alert>
      </div>
      <OrderTraker activeStep={1}/>
      <Grid container className='space-y-5 py-5 pt-20'>
        {order.order?.orderItems.map((item) => <Grid container item className='shadow-xl rounded-md p-5' sx={{alignItems:"center", justifyContent:"space-between"}}>
            <Grid item xs={6}>
                <div className='flex items-center'>
                    <img className='w-[5rem] h-[5rem] object-cover object-top' src={item.product.imageUrl} alt="" />
                    <div className='ml-5 space-y-2'>
                        <p>{item.product.title}</p>
                        <div className='opacity-50 text-xs font-semibold space-x-5'>
                            <span>
                                Color: {item.color}
                            </span>
                            <span>Size: {item.size}</span>
                        </div>
                        <p>Seller: {item.product.brand}</p>
                        <p>S/ {item.price}</p>
                    </div>
                </div>
            </Grid>
            <Grid item>
                <AdressCard address={order.order?.shippingAddress}/>
            </Grid>
        </Grid>)}
      </Grid>
    </div>
  )
}

export default PaymentSuccess
