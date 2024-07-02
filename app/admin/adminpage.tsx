"use client"
import React, { useCallback, useState } from 'react'
import ListingCardReserve from '../components/listings/listing-cardReserve'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export default function Adminpage({homestay, currentUser}: {homestay:any, currentUser:any}) {
    
    const router = useRouter()
    const [deletingId, setDeletingId] = useState('')

    const onCancel = useCallback((id: string) => {
        setDeletingId(id)

        axios.delete(`/api/listings/${id}`)
            .then(() => {
                toast.success('Daftar telah dihapus')
                router.refresh()
            })
            .catch((error) => {
                toast.error(error?.response?.data?.error)
            })
            .finally(() => {
                setDeletingId('')
            })
    }, [router])
  return (
    <div
                className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
                {homestay.map((listing: any) => (
                    <ListingCardReserve
                        key={listing.id}
                        data={listing}
                        actionId={listing.id}
                        onAction={onCancel}
                        disabled={deletingId === listing.id}
                        actionLabel="Hapus homestay"
                        currentUser={currentUser}
                    />
                ))}
            </div>
  )
}
