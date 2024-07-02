import React from 'react'
import getListings from '../actions/get-listings'
import Ads from '../components/ads'
import ClientOnly from '../components/client-only'
import ListingCardReserve from '../components/listings/listing-cardReserve'
import Container from '../components/container'
import getCurrentUser from '../actions/get-current-user'
import { getAllListing } from '../actions/get-all-listing'
import axios from 'axios'
import Adminpage from './adminpage'


export default async function page() {
    
    const param = ""
    const homestay = await getAllListing()
    const currentUser = await getCurrentUser()
    const handledelete = (id:any) =>{
        ondelete(id)
    }
    const ondelete=async(id:any)=>{
        await axios.delete(`api/listings/${id}`)
        window.location.reload()
    }
    return (
        <div>
            <ClientOnly>
                <Container>
                <Adminpage homestay={homestay} currentUser={currentUser}/>
                    <Ads />
                </Container>
            </ClientOnly>
        </div>
    )
}
