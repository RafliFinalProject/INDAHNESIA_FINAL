import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server"
import React from 'react'

export async function getAllListing() {
    const listing=await prisma.listing.findMany({})
    return (listing)

}
