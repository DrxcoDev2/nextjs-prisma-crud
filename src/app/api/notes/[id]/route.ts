import {NextRequest, NextResponse} from "next/server";
import { Prisma } from "@prisma/client";
import {prisma} from "@/lib/prisma";

interface Params {
    id: string;
}

export async function GET(request: NextRequest, {params}: {params: Params}) {

    try {
    const note = await prisma.note.findUnique({
        where: {
            id: Number(params.id)
        }
    })
    if (!note) {
        return NextResponse.json({error: "Note not found"}, {status: 404}); //Response error 
    }

    return NextResponse.json({message: "getting single note", note});    
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({error: error.message}, {status: 500}); //Response error 
                                                                             //Type 500 = Internal Server Error 
        }
    }
}

export async function DELETE(request: NextRequest, {params}: {params: Params}) {
    try {
    const note = await prisma.note.delete({
        where: {
            id: Number(params.id)
        }
    })
    if (!note) {
        return NextResponse.json({error: "Note not found"}, {status: 404}); //Response error 
    }

    return NextResponse.json({message: "deleting note"});
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {

            if (error.code === "P2025") {
                return NextResponse.json({error: "Note not found"}, {status: 404}); //Response error 
            }

            return NextResponse.json({error: error.message}, {status: 500}); //Response error 
                                                                             //Type 500 = Internal Server Error 
        }
    }
}

export async function PUT(request: NextRequest, {params}: {params: Params}) {
    try {

        const {title, content} = await request.json();

        const note = await prisma.note.update({
            where: {
                id: Number(params.id)
            },
            data: {
                title,
                content
            }
        })
        if (!note) {
            return NextResponse.json({error: "Note not found"}, {status: 404}); //Response error 
        }
        return NextResponse.json({message: "updating note", note});
    } catch (error) {
        if (error instanceof Error) {

            return NextResponse.json({error: error.message}, {status: 500}); //Response error 
        }
    }
}